import seoJobs from "../model/SEO.model.js";
import SeoTag from "../model/seo.tags.js";

export const seocreate = async (req, res) => {
    try {
        const {requiredskills,job_Description, responsibilities, ...restOfData } = req.body;
        const responsibilitiesArray = responsibilities.split('\n').filter(Boolean);
        const reqSkill = requiredskills.split('\n').filter(Boolean);
        const des = job_Description.split('\n').filter(Boolean);
        const create = await seoJobs.create({
            ...restOfData,
            responsibilities: responsibilitiesArray,
            requiredskills:reqSkill,
            job_Description:des

        });
        res.status(200).send({ status: true, msg: "seo executive successfully", data: create });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: false, msg: error.message, data: error });
    }
};
export const seoget = async (req, res) => {
    try {
        const get = await seoJobs.find().sort({ _id: -1 })
        if (get.length > 0) {
            res.status(200).send({ status: true, msg: "data get successfully", data: get });
        } else {
            res.status(404).send({ status: false, msg: "data not found", data: {} });
        }
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message, data: error });
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
        res.status(500).send({ status: false, msg: error.message, data: error });
    }
};
export const seodelete = async (req, res) => {
    try {
        const deleteseo = await seoJobs.findByIdAndDelete({ _id: req.params.id })
        const deleteData = await SeoTag.findOneAndDelete({ jobId: deleteseo.value._id })
        console.log(deleteData);
        if (deleteseo) {
            return res.status(200).send({ status: true, msg: "data delete successfully", data: deleteseo });
        }
        res.status(404).send({ status: false, msg: "data not found", data: {} });

    } catch (error) {
        console.log(error);
        res.status(500).send({ status: false, msg: error.message, data: error });
    }
};
export const updatejobs = async (req, res) => {
    try {
        const {requiredskills,job_Description, responsibilities} = req.body;
        const responsibilitiesArray = responsibilities.split('\n').filter(Boolean);
        const reqSkill = requiredskills.split('\n').filter(Boolean);
        const des = job_Description.split('\n').filter(Boolean);
        req.body.responsibilities = responsibilitiesArray
        req.body.requiredskills = reqSkill
        req.body.job_Description = des
        const updateNew = await seoJobs.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (updateNew == 0) {
            res.status(404).send({ status: false, msg: "data not found", data: {} });
        }
        return res.status(200).send({ status: true, msg: "data update successfully", data: updateNew });

    } catch (error) {
        console.log(error);
        res.status(500).send({ status: false, msg: error.message, data: error });
    }
};
export const AllFindJobBySeo = async function (req, res) {
    const finds = await seoJobs.find({ seo: false }).sort({ _id: -1 })
    if (finds.length == 0) {
        res.status(404).send({ status: false, msg: "data not found", data: {} });
        return
    }
    res.status(200).send({ status: true, msg: "data find successfully", data: finds });
}