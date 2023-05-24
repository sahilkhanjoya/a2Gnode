import journey from "../model/journey.model.js";

export const journeycreate = async (req, res) => {
    try {
        const jour = await journey.create(req.body)
        res.status(200).send({ status: true, msg: "create journey rable successfully", data: jour });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const getjourney = async (req, res) => {
    try {
        const get = await journey.findAll()
        if (get) {
            res.status(200).send({ status: true, msg: "get data successfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};
export const updatejourney = async (req, res) => {
    try {
        const update = await journey.update(req.body, {
            where: { id: req.body.id },
        });
        if (update[0] == 0) {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        } else {
            res.status(200).send({ status: true, msg: "journey updated successfully", data: update });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};