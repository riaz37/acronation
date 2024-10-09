
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import connect from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";




export async function POST(request: NextRequest){
    await connect()
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        const {role} = getDataFromToken(request)
        if(role!=="superAdmin"){
          return  NextResponse.json({error:"user is not super admin"})
        }
    
        //check if user already exists
        const user = await User.findOne({email})



        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        //send verification email


        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
        


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}