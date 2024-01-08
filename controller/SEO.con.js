import seoJobs from "../model/SEO.model.js";

export const seocreate = async (req, res) => {
    try {
        const create = await seoJobs.create(req.body)
        res.status(200).send({ status: true, msg: "seo executive successfully", data: create });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: false, msg:error.message, data: error });
    }
};
export const seoget = async (req, res) => {
    try {
        const get = await seoJobs.find()
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: "data get successfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "data not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ status: false, msg:error.message, data: error });
    }
};
export const onedataget = async (req, res) => {
    try {
        const id = req.params.id
        const onedata = await seoJobs.findById(id)
        if (onedata) {
            res.status(200).send({ status: true, msg: "data get successfully", data: onedata });
        } else {
            res.status(404).send({ status: false, msg: "data not found", data: {} });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: false, msg:error.message, data: error });
    }
};
export const seodelete = async (req, res) => {
    try {
        const deleteseo = await seoJobs.findByIdAndDelete({ _id: req.params.id })
        if (deleteseo) {
            return res.status(200).send({ status: true, msg: "data delete successfully", data: deleteseo });
        }
        res.status(404).send({ status: false, msg: "data not found", data: {} });

    } catch (error) {
        console.log(error);
        res.status(500).send({ status: false, msg:error.message, data: error });
    }
};
export const updatejobs = async (req, res) => {
    try {
        const updateNew = await seoJobs.findByIdAndUpdate({ _id: req.params.id },req.body,{new:true})
        if (updateNew) {
            return res.status(200).send({ status: true, msg: "data update successfully", data: updateNew });
        }
        res.status(404).send({ status: false, msg: "data not found", data: {} });

    } catch (error) {
        console.log(error);
        res.status(500).send({ status: false, msg:error.message, data: error });
    }
};