import people from "../model/ourpeople.model.js";

export const peoplecreate = async (req, res) => {
    try {
        req.body.image = req.file.path;
        const create = await people.create(req.body);
        res.status(200).send({ status: true, data: create });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};
export const getpeople = async (req, res) => {
    try {
        const get = await people.findAll()
        if (get) {
            res.status(200).send({ status: true, msg: "get data our people succesfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const updatepeople = async (req, res) => {
    try {
        const { id, name, dictionary } = req.body;
        const { path: imagePath } = req.file;
        const updatepeople = await people.update({ image: imagePath, name: name, dictionary: dictionary },
            { where: { id } });
        if (updatepeople[0] == 0) {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        } else {
            res.status(200).send({ status: true, msg: "our people updated successfully", data: updatepeople });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};