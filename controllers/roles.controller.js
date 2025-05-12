const Role = require("../models/role.model");

//Get  roles function
const getRoles = async (req, res) => {
    try {
        const role = await Role.find({});
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const postRole = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteRole = async (req, res) => {
    try {
        const {id} = req.params;

        const role = await Role.findByIdAndDelete(id);

        if(!role) {
            return res.status(404).json({message: "Role not found"});
        }

        res.status(200).json({message: "Role deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



module.exports = {
    getRoles,
    postRole,
    deleteRole

}