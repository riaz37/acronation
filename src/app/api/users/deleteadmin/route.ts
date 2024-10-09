import connect from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(request: NextRequest) {
  await connect()
  try {
    const { role } = getDataFromToken(request);

    if (role !== "superAdmin") {
      return NextResponse.json({ error: "User is not super admin" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Delete the user (or any resource) from the database
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
