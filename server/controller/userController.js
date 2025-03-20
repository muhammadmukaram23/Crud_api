import User from "../model/userModel.js";

//create user
export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }
        const saveData = await userData.save();
        res.status(200).json(saveData); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}

//get all users

export const getall=async(req,res)=>{
    try {
        const userData=await User.find();
        if(!userData){
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(userData); 
        
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}

//get one user using id
export const getOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(400).json({msg:"USer not found"});
        }
        res.status(200).json(userExist); 
    } catch (error) {
        res.status(500).json({error:error});
        
    }
}

//update user using id
export const update= async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"USer not found"});
        }
        const updatedData=await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedData); 
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}

//delete user using id

export const delUser= async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"USer not found"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"user delete sucessfully"}); 
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}
