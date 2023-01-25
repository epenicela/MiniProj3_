const SponsorModel = require('../models/SponsorModel');

class SponsorController {

    async add(req, res) {
        const {name, company, adrress,contact} = req.body;
        if(!name || !company || !adrress|| !contact){
            return res.status(404).json({ message: "name, company, adrress and contact is require" });
        }
        const createdSponsors = await SponsorModel.create(req.body);
        return res.status(200).json(createdSponsors);
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            await SponsorModel.findByIdAndUpdate(id, req.body);
            return res.status(200).json({message: "Sponsor updated"});
        } catch (error) {
            return res.status(404).json({ message: "Error to update: Verify the sponsor id" });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const sponsorDeleted = await SponsorModel.findByIdAndDelete(id);
            if(!sponsorDeleted){
                return res.status(404).json({ message: "Error to delete: Sponsor does not exists" });
            }
            return res.status(200).json({message: "Sponsor Deleted"});
        } catch (error) {
            return res.status(404).json({ message: "Failed to delete sponsor" });
        }
    }
    async findAll(req, res) {
        const sponsors = await SponsorModel.find();
        return res.status(200).json(sponsors);
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;

            const sponsor = await SponsorModel.findById(id);

            if (!sponsor) {
                return res.status(404).json({ message: "Sponsor does not exist" });
            }
            return res.status(200).json(sponsor);
        } catch (error) {
            return res.status(404).json({ message: "Error to find : Verify the sponsor id" });

        }

    }

}

module.exports = new SponsorController();
