import connect from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { generateResetToken } from "@/helpers/generateToken";
import User from "@/models/userModel";
import sendEmail from "@/helpers/sendEmail";

export async function POST(request: NextRequest) {
  await connect();

  try {
    const { email } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User with this email does not exist", success: false },
        { status: 404 }
      );
    }

    const token = generateResetToken(user._id);

    const resetUrl = `${process.env.DOMAIN}/reset-password?token=${token}`;
    
    await sendEmail( resetUrl,user.email);

    return NextResponse.json(
      { message: "Password reset link sent to your email", success: true },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
