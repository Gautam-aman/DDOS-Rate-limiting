import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const otpstore : Record<string,string>={};
//const otpstore = {[key:string]:string}={};

app.post('/gen-otp' , (req,res)=>{
    const email = req.body.email;
    if (!email){
        res.status(500).json({
            message : "Email Required"
        })
    }

    const OTP = Math.floor(100000  + Math.random() *900000).toString();
    otpstore[email]=OTP;

    console.log(`OTP for ${email}  : ${OTP}`);

    res.json({
        message:"user logged in"
    })
})

app.post('/reset-password' , (req,res)=>{
    const {email , otp , newpassword} = req.body;
    if (!email || !otp || !newpassword) {
        res.status(403).json({
            message : "feilds are required"
        })
    }
    if (otpstore[email]=otp){
        console.log(`password for ${email} has been changes`)
        delete(otpstore[email]);
        res.status(200).json({
            message : " Password changed"
        })
        }else{
            res.status(500).json({
                message : " Invalid OTP"
            })
        }
})

app.listen(PORT , ()=>{
    console.log("Server is Live")
})

