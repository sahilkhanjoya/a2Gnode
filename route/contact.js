import express from'express'
import { ContactCreate, ContactFindAll, ContactFindById } from'../controller/contact.js'
const ContactRouter = express.Router()

ContactRouter.post('/Contact',ContactCreate)
ContactRouter.get('/Contact',ContactFindAll)
ContactRouter.get('/Contact/:id',ContactFindById)
export default ContactRouter