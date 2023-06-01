import SEO from "../model/SEO.model.js";
import city from "../model/city.model.js";

export const cityadd = async (req, res) => {
    try {
        const create = await city.create(req.body)
        res.status(200).send({ status: true, msg: "city add successfully", data: create });
    } catch (error) {
        res.status(500).send({status:false, msg: "Internal server error",data:error });
    }
};
export const cityget = async (req, res) => {
    try {
        const get = await city.findAll()
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: "data get successfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({status:false, msg: "Internal server error",data:error });
    }
};
export const joinSEO = async (req, res) => {
    try {
        const result = await city.findAll({
            where: {
                id: req.body.city_id
            },
            include: SEO
        });
        res.status(200).send({ status: true, msg: "table are joining successfully", data: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({status:false, msg: "Internal server error",data:error });
    }
};