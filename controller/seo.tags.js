import SeoTag from "../model/seo.tags.js";

class seo {
    seoTagCreate(req, res) {
        SeoTag.create(req.body).then((data) => {
            res.send({ status: true, message: 'create', data: data })
        }).catch(error => res.status(400).send({ status: false, message: error.message, error: error }))
    }
    async seoGet(req, res) {
        SeoTag.findById( { _id: req.params.id }).then((data) => {
            if (!data) return res.status(404).send({ status: false, message: "data not found", data: null })
            res.send({ status: true, message: 'tag gets', data: data })
        }).catch(error => res.status(400).send({ status: false, message: error.message, data: error }))
    }
}  
const seotag = new seo()
export default seotag