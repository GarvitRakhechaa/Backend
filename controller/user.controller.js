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
    else{
         return res.status(200).json({
            message: "All fields has done"
        })
    }
    console.log(name);
    console.log(email);
    console.log(password);
    
    //check if user exist
    //create a user in DB
    //create a token
    //save token in db
    // send token as email to user
    // send success status to user
}

export { registerUser }