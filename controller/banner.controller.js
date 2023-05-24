import banner from "../model/banner.model.js";

export const createbanner = async (req, res) => {
    try {
        var imagepath = req.file.path
        const bann = await banner.create({ image: imagepath });
        res.status(200).send({ status: true, data: bann });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal server error" });
    }
}
export const getbanner = async(req,res)=>{
    try {
        const get = await banner.findAll()
        if(get){
            res.status(200).send({ status: true, msg:"data get succesfully",data: get });
        }else{
            res.status(404).send({ status: false, msg:"id not found",data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
}
export const bannerdelete = async(req,res)=>{
    try {
        const deleted = await banner.destroy({where:{ id: req.body.id }})
        if(deleted){
            res.status(200).send({ status: true, msg:"banner delete succesfully",data: deleted });
        }else{
            res.status(404).send({ status: false, msg:"id not found",data: {} });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};