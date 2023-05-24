import location from "../model/location.model.js";

export const locationcreate = async (req, res) => {
    try {
        const loca = await location.create(req.body)
        res.status(200).send({ status: true, msg: "create location successfully", data: loca });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const getlocation = async (req, res) => {
    try {
        const get = await location.findOne({ where: { id: req.body.id } })
        if (get) {
            res.status(200).send({ status: true, msg: "get data successfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const deletedlocation = async (req, res) => {
    try {
        const deleted = await location.destroy({ where: { id: req.body.id } })
        if (deleted) {
            res.status(200).send({ status: true, msg: "deleted  location succesfully", data: deleted });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const updatelocation = async (req, res) => {
    try {
        const update = await location.update(req.body, {
            where: { id: req.body.id },
        });
        if (update[0] == 0) {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        } else {
            res.status(200).send({ status: true, msg: "location updated successfully", data: update });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};