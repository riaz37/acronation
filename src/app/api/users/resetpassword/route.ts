import connect from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

export async function POST(request: Request) {
  await connect();

  try {
    const { token, newPassword } = await request.json();

    const decode = jwt.verify(token, process.env.TOKEN_SECRET!);
    const userId = (decode as { id: string }).id;
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired token", success: false },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return NextResponse.json(
      { message: "Password reset successful", success: true },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
