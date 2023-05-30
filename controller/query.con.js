import query from "../model/query.model.js";

export const querycraete = async (req, res) => {
    try {
        const create = await query.create(req.body)
        res.status(200).send({ status: true, msg: "create successfully", data: create });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const queryget = async (req, res) => {
    try {
        const get = await query.findOne({ where: { id: req.body.id } })
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: "data get successfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};