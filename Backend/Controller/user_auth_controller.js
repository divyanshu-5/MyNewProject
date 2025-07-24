
let user_auth = require("../Model/user_auth_schema")
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

let SECRET_KEY="MyNewProject"

let SignUpApi = async (req, res) => {
    console.log(req.body)

    let { firstName, lastName, email, password, confirmPassword } = req.body

    try {
        
        if(password!==confirmPassword){
            res.json({
                message:"Password and Confrim Password not matched"
            })
        }
        else{

            let existingUser= await user_auth.findOne({email:email});
            
            if(existingUser){
                res.json({
                    message:"User Already Exist"
                })
            }
            else{
                let hashPassword= await bcrypt.hash(password,10);
                let hashConfirmPassword= await bcrypt.hash(confirmPassword,10);

                let signUpUser =await user_auth({
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:hashPassword,
                    confirmPassword:hashConfirmPassword
                }).save()

                let token=jwt.sign({email:signUpUser.email},SECRET_KEY)
                res.json({
                    message:"Login Successfully",
                    token: token,
                })
            }
        }
    } 
    catch (error) {
        res.json({
            message:"Something went wrong",
        })
        
    }
}


let LoginApi = async (req, res) => {
    console.log(req.body)

    let {email,password,confirmPassword}= req.body;

    try {

        if(password!==confirmPassword){
            res.json({
                message:"Password and Confirm Password doesn't match."
            })
        }
        else{

            let existingUser=await user_auth.findOne({email:email});
            if(!existingUser){
                res.json({
                    message:"User not found."
                })
            }
            else{
                let matchedPassword=await bcrypt.compare(password,existingUser.password);
                if(!matchedPassword){
                    res.json({
                        message:"Invalid Password"
                    })
                }
                else{

                    let token= jwt.sign({email:existingUser.email},SECRET_KEY)
                    res.json({
                        message:"Login Successfully.",
                        token:token,
                    })
                }
            }
            
        }
        
    } catch (error) {
        res.json({
            message:"Something went wrong."
        })
        
    }

}

module.exports = { SignUpApi, LoginApi };