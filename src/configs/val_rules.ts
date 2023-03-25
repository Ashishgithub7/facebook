import { IRules } from "../interfaces";

const rules:IRules={
    name:{
        min:5,
        max:20,
        reg:/^[a-zA-Z]$/
    },

    email:{
        min:11,
        max:20,
        reg:/[a-z]+(([0-9a-z]+)\.{0,1})*[a-z0-9]+@[a-z]+(([a-z]+)\.{0,1})*[a-z]{2,3}/
    },

    password:{
        min:5,
        max:10,
        reg:/[a-zA-Z]/
    }

}

export default rules;