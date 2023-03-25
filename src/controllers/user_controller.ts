import { Request, Response } from "express";
import userModel from "../models/user_model";
import { IUser, IResponse } from "../interfaces";
import { Document, HydratedDocument } from "mongoose";


interface IUserDoc extends IUser, Document { }

const login = async (req: Request, res: Response) => {

    var response: IResponse;
    
    const { email, password }: IUser = req.body;
    const user: IUserDoc | null = await userModel.findOne({ email, password });

    if (!user) {
        response = { success: false, message: "Invalid Credentials!!", data: null };
        return res.send(response);
    }

    response = { success: true, message: "Logged in successfully!!", data: user };
    res.send(response);

};//login

const register = async (req: Request, res: Response)=>{
    var response: IResponse;
    const { email, password, name, phone }: IUser = req.body;
    const user: IUserDoc | null = await userModel.findOne({ email })

    if (user) {
        response = { success: false, message: "already exists", data: null };
        return res.send(response);
    }

    const userObj: HydratedDocument<IUser> = new userModel<IUser>({ name, email, password, phone })
    await userObj.save();
    response = { success: true, message: "registered successfully", data: userObj }
    res.send(response);


}//register

export { login,register };

