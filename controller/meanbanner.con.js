import meanbanner from "../model/meanBanner.model.js";

export const meancreate = async (req, res) => {
    try {
        req.body.image = req.file.path;
        const mean = await meanbanner.create(req.body);
        res.status(200).send({ status: true, data: mean });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
}
export const getmeanbanner = async (req, res) => {
    try {
        const get = await meanbanner.findAll()
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: " data get succesfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const deletedmeanbanner = async (req, res) => {
    try {
        const deleted = await meanbanner.destroy({ where: { id: req.body.id } })
        if (deleted) {
            res.status(200).send({ status: true, msg: " mean banner deleted succesfully", data: deleted });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const updatemeanbanner = async (req, res) => {
    try {
        const { id, name, discription, dictionary, mobile_number, email, social_link } = req.body;
        const { path: imagePath } = req.file;
        const updatedBanner = await meanbanner.update(
            {
                image: imagePath,
                name: name,
                discription: discription,
                dictionary: dictionary,
                mobile_number: mobile_number,
                email: email,
                social_link: social_link
            }, { where: { id } });
        if (updatedBanner[0] == 0) {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        } else {
            res.status(200).send({ status: true, msg: "mean banner updated successfully", data: updatedBanner });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};