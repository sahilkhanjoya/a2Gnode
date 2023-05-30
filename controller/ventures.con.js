import smallbanner from "../model/smallbanner.model.js";
import venture from "../model/ventures.model.js";

export const venturecreate = async (req, res) => {
    try {
        req.body.image = req.file.path;
        const ventuers = await venture.create(req.body);
        res.status(200).send({ status: true, data: ventuers });

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};
export const getventure = async (req, res) => {
    try {
        const get = await venture.findAll({ include: smallbanner })
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: "get data succesfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const deleteventure = async (req, res) => {
    try {
        const deleted = await venture.destroy({ where: { id: req.body.id } })
        if (deleted) {
            res.status(200).send({ status: true, msg: "list of venture deleted succesfully", data: deleted });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
export const updateventure = async (req, res) => {
    try {
        const { id, name, discription, website_link } = req.body;
        const { path: imagePath } = req.file;
        const updateVenture = await venture.update(
            {
                image: imagePath,
                name: name,
                discription: discription,
                website_link: website_link
            }, { where: { id } });
        if (updateVenture[0] == 0) {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        } else {
            res.status(200).send({ status: true, msg: "venture updated successfully", data: updateVenture });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
};
// export const ventureimagejoin = async (req, res) => {
//     try {
//         const result = await venture.findAll({
//             where: {
//                 smallbanner_id: req.body.smallbanner_id
//             },
//             include: smallbanner
//         });
//         res.status(200).send({ status: true, msg: "venture image join successfully", data: result });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ error: 'Internal server error' });
//     }
// };