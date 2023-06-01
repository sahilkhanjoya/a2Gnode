import SEO from "../model/SEO.model.js";

export const seocreate = async (req, res) => {
    try {
        const create = await SEO.create(req.body)
        res.status(200).send({ status: true, msg: "seo executive successfully", data: create });
    } catch (error) {
        console.log(error);
        res.status(500).send({status:false, msg: "Internal server error",data:error });
    }
};
export const seoget = async (req, res) => {
    try {
        const get = await SEO.findAll()
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: "data get successfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "data not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({status:false, msg: "Internal server error",data:error });
    }
};
export const onedataget = async (req, res) => {
    try {
        const  id  = req.params.id
        const onedata = await SEO.findOne({ where: { id} })
        if (onedata) {
            res.status(200).send({ status: true, msg: "data get successfully", data: onedata });
        } else {
            res.status(404).send({ status: false, msg: "data not found", data: {} });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({status:false, msg: "Internal server error",data:error });
    }
};