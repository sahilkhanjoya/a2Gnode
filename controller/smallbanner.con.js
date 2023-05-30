import smallbanner from "../model/smallbanner.model.js";

export const createsmall = async (req, res) => {
    try {
        var imagepath = req.file.path;
        const small = await smallbanner.create({ image: imagepath });
        res.status(200).send({ status: true, data: small });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const getsmall = async (req, res) => {
    try {
        const get = await smallbanner.findAll()
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: "get data succesfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const smalldelete = async (req, res) => {
    try {
        const deleted = await smallbanner.destroy({ where: { id: req.body.id } })
        if (deleted) {
            res.status(200).send({ status: true, msg: "small banner delete succesfully", data: deleted });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};
export const smallupdate = async (req, res) => {
    try {
        const { id } = req.body;
        const { path: imagePath } = req.file;
        const updatedSmallBanner = await smallbanner.update({ image: imagePath }, { where: { id } });
        if (updatedSmallBanner[0] == 0) {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        } else {
            res.status(200).send({ status: true, msg: "small banner updated successfully", data: updatedSmallBanner });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};