const ExpertModel = require('../models/ExpertModel');

class ExpertController {

    async add(req, res) {
        const { name, formation, skils, adrress, contact } = req.body;
        if (!name || !formation || !skils || !adrress || !contact) {
            return res.status(404).json({ message: "name, formation, skils, adrress, and contact is require" });
        }
        const createdExperts = await ExpertModel.create(req.body);
        return res.status(200).json(createdExperts);
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            await ExpertModel.findByIdAndUpdate(id, req.body);
            return res.status(200).json({ message: "Expert updated" });
        } catch (error) {
            return res.status(404).json({ message: "Error to update: Verify the expert id" });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const expertDeleted = await ExpertModel.findByIdAndDelete(id);
            if (!expertDeleted) {
                return res.status(404).json({ message: "Error to delete: expert does not exists" });
            }
            return res.status(200).json({ message: "Expert Deleted" });
        } catch (error) {
            return res.status(404).json({ message: "Failed to delete expert" });
        }
    }
    async findAll(req, res) {
        const experts = await ExpertModel.find();
        return res.status(200).json(experts);
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;

            const expert = await ExpertModel.findById(id);

            if (!expert) {
                return res.status(404).json({ message: "Expert does not exist" });
            }
            return res.status(200).json(expert);
        } catch (error) {
            return res.status(404).json({ message: "Error to find : Verify the expert id" });

        }

    }

}

module.exports = new ExpertController();
