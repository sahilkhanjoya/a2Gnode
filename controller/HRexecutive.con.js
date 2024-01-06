import applyjob from "../model/HRexecutive.model.js";

export const createHR = async (req, res) => {
    try {
        if (req.file) {
            req.body.resume = req.file.path;
        }
        const create = await applyjob.create(req.body);
        res.status(200).send({ status: true, msg: "craete successfully", data: create });
    } catch (error) {
        res.status(500).send({status:false, msg: "Internal server error",data:error });
    }
};
export const getHR = async (req, res) => {
    try {
        const get = await applyjob.find({job_id:req.params.id})
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: "get data succesfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "id not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({status:false, msg:error.message,data:error });
    }
};