import seoJobs from "../model/SEO.model.js";
import SeoTag from "../model/seo.tags.js";

class seo {
    async seoTagCreate(req, res) {
        const checkSeo = await SeoTag.findOne({ jobId: req.body.jobId })
        if (checkSeo) {
            return res.status(409).send({ status: false, message: 'seo already exist', data: null })
        }
        SeoTag.create(req.body).then(async (data) => {
            await seoJobs.findByIdAndUpdate({ _id: data.jobId }, { $set: { seo: true } })
            res.send({ status: true, message: 'create', data: data })
        }).catch(error => res.status(400).send({ status: false, message: error.message, error: error }))
    }
    async seoGet(req, res) {
        SeoTag.findById({ _id: req.params.id }).then((data) => {
            if (!data) return res.status(404).send({ status: false, message: "data not found", data: null })
            res.send({ status: true, message: 'tag gets', data: data })
        }).catch(error => res.status(400).send({ status: false, message: error.message, data: error }))
    }
    async seoUpdates(req, res) {
        const checkAndUpdate = await SeoTag.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!checkAndUpdate) {
            return res.status(404).send({ status: false, message: 'data not found', data: null })
        }
        res.send({ status: true, message: 'seo update successfully', data: checkAndUpdate })
    }
    async seoAllGets(req, res) {
        const findData = await SeoTag.find({}).populate("jobId").sort({ _id: -1 })
        console.log(findData);
        if (findData.length == 0) {
            return res.status(404).send({ status: false, message: 'data not found', data: null })
        }
        res.send({ status: true, message: 'seo get success', data: findData })
    }
    async deleteSeo(req, res) {
        const deleteWithId = await SeoTag.findByIdAndDelete({ _id: req.params.id })
        if (!deleteWithId) {
            return res.status(404).send({ status: false, message: 'data not found', data: null })
        }
        await seoJobs.findByIdAndUpdate({ _id: deleteWithId.value.jobId },{$set:{seo:false}})
        res.send({ status: true, message: 'seo delete successfully', data: deleteWithId })
    }
}
const seotag = new seo()
export default seotag