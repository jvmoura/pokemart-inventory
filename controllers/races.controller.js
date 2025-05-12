const Race = require("../models/race.model");

//Get  races function
const getRaces = async (req, res) => {
    try {
        const race = await Race.find({});
        res.status(200).json(race);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const postRace = async (req, res) => {
    try {
        const race = await Race.create(req.body);
        res.status(200).json(race);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteRace = async (req, res) => {
    try {
        const {id} = req.params;

        const race = await Race.findByIdAndDelete(id);

        if(!race) {
            return res.status(404).json({message: "Race not found"});
        }

        res.status(200).json({message: "Race deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



module.exports = {
    getRaces,
    postRace,
    deleteRace

}