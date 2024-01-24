import Contact from "../model/contact.js"

export const ContactCreate = async function (req, res) {
    try {
        const create = await Contact.create(req.body)
        res.send({ status: true, message: "Insert Successfully", data: create })
    } catch (error) {
        res.status(404).send({ status: false, message: error.message, data: error })
    }
}
export const ContactFindAll = async function (req, res) {
    try {
        const findData = await Contact.find({}).sort({ _id: -1 })
        if (findData.length == 0) return res.status(404).send({ status: false, message: 'data not found', data: null })
        res.send({ status: true, message: "Find Successfully", data: findData })
    } catch (error) {
        res.status(404).send({ status: false, message: error.message, data: error })
    }
}
export const ContactFindById = async function (req, res) {
    try {
        const findData = await Contact.findById({ _id: req.params.id })
        if (!findData) return res.status(404).send({ status: false, message: 'data not found', data: null })
        res.send({ status: true, message: "find Successfully", data: findData })
    } catch (error) {
        res.status(404).send({ status: false, message: error.message, data: error })
    }
}