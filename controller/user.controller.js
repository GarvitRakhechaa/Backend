import User from "../model/user.model.js";
import crypto from "crypto"
const registerUser = async (req, res) => {
    // res.send("register")
    //get-data
    const {name, email, password} = req.body
    //validate
    if(!name || !email || !password){
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    // numberchecker  = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/; 
    // if(!passwordChecker.test(password || password.length()<8)){
    //     return res.status(400).json({
    //         message:"password must contain cpacial c"
    //     })
    // }

    console.log(name);
    console.log(email);
    console.log(password);
    
    //check if user exist
    try {
       const exitstingUser = await User.findOne({email})
       if(exitstingUser){
        return res.status(400).json({
            message:"user already exits:"
        })
       }
       const user = await User.create({
        name,
        email,
        password
       })

       if(!user){
        return res.status(400).json({
            message: "user not registerd"
        })
       }

       const token = crypto.randomBytes(32).toString("hex")
       console.log(token);
       user.varificationToken = token

       await user.save()
       console.log("user saved");
       
       
       

    } catch (error) {
        
    }
    //create a user in DB
    //create a token
    //save token in db
    // send token as email to user
    // send success status to user
}

export { registerUser }