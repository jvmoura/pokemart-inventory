const Character = require("../models/character.model");

//Get  characters function
const getCharacters = async (req, res) => {
    try {
        const character = await Character.find()
        .populate('race');
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const postCharacter = async (req, res) => {
    try {
        const character = await Character.create(req.body);
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteCharacter = async (req, res) => {
    try {
        const {id} = req.params;

        const character = await Character.findByIdAndDelete(id);

        if(!character) {
            return res.status(404).json({message: "Character not found"});
        }

        res.status(200).json({message: "Character deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



module.exports = {
    getCharacters,
    postCharacter,
    deleteCharacter
}