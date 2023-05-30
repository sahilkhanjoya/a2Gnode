import touch from "../model/getintouch.model.js";

export const touchcreate = async (req, res) => {
    try {
        const gettouch = await touch.create(req.body)
        res.status(200).send({ status: true, msg: "create get in touch successfully", data: gettouch });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};
export const gettouch = async (req, res) => {
    try {
        const get = await touch.findOne({ where: { id: req.body.id } })
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: "get data successfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const deletedtouch = async (req, res) => {
    try {
        const deleted = await touch.destroy({ where: { id: req.body.id } })
        if (deleted) {
            res.status(200).send({ status: true, msg: "deleted  get touch succesfully", data: deleted });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const updatetouch = async (req, res) => {
    try {
        const update = await touch.update(req.body, {
            where: { id: req.body.id },
        });
        if (update[0] == 0) {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        } else {
            res.status(200).send({ status: true, msg: "get touch updated successfully", data: update });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};
