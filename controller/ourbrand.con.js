import brand from "../model/ourbrand.model.js";
import smallbanner from "../model/smallbanner.model.js";

export const brandcreate = async (req, res) => {
    try {
        const our = await brand.create(req.body)
        res.status(200).send({ status: true, msg: "create our brand successfully", data: our });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const getourbrand = async (req, res) => {
    try {
        const get = await brand.findOne({ where: { id: req.body.id } })
        if (get) {
            res.status(200).send({ status: true, msg: "get our brand successfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const deletedourbrand = async (req, res) => {
    try {
        const deleted = await brand.destroy({ where: { id: req.body.id } })
        if (deleted) {
            res.status(200).send({ status: true, msg: "deleted our brand succesfully", data: deleted });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const updateourbrand = async (req, res) => {
    try {
        const update = await brand.update(req.body, { where: { id: req.body.id }, });
        if (update[0] == 0) {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        } else {
            res.status(200).send({ status: true, msg: "our brand updated successfully", data: update });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};
export const join = async (req, res) => {
    try {
        const result = await brand.findAll({
            where: {
                smallbanner_id: req.body.smallbanner_id
            },
            include: smallbanner
        });
        res.status(200).send({ status: true, msg: "table are joining successfully", data: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal server error' });
    }
};