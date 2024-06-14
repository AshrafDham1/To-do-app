import {Schema,model} from "mongoose";
import mongoose from "mongoose"
const TODOSchema = new Schema(
    {
        task: {type: String, required: true},
        status: {type: String, required: true},
        // date: {type: Date, required: true}
    },
    {   
        collection: "TODOS",   
        timestamps: true,  
    }
)
const TODO = mongoose.model("TODO", TODOSchema);
export default TODO