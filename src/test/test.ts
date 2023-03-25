import { valEmail,valName,valPassword,validate } from "../utlis/validations";

const email= "ashish12@gmail.com"
const name ="ashish bhandari"
const password= "ashish778"
interface IError{
    name :string|null,
    password:string|null,
    email:string|null,
    error:boolean
}

const error:IError={name:null,password:null,email:null,error:false}

if (!valEmail(email)){
    error.email="Invalid email"
    error.error=true
}   
if (!valPassword(password)){
    error.password="Invalid Password"
    error.error=true
}   
if (!valName(name)){
    error.name="Invalid Name"
    error.error=true

}   

if (error.error==true) res.send(error)
const error_output=validate({name,email,password})
if (error_output.error) res.send(error_output) 