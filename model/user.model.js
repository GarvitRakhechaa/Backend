import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        role: {
            type: String,
            enum: ["User", "Admin"],
            default:"User"
        },
        isVarified: {
            type: Boolean,
            default: String
        },
        varificationToken: {
            type: String
        },
        resetPasswordToken: {
            type: String
        },
        resetPasswordTokenExpires:{
            type:String
        }
    },{timestamps: true}
)

const User = mongoose.model("User",userSchema)
export default User