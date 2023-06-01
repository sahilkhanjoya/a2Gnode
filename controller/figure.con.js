import figure from "../model/figure.model.js";

export const figurecreate = async (req, res) => {
    try {
        const fig = await figure.create(req.body)
        res.status(200).send({ status: true, msg: "create location successfully", data: fig });
    } catch (error) {
      res.status(500).send({status:false, msg: "Internal server error",data:error });
    }
};
export const updatefig = async (req, res) => {
    try {
      const fig = await figure.update(req.body, {
        where: { id: req.body.id },
      });
      if (fig[0]==0) {
        res.status(404).send({ status: false, msg: "banner not found", data: {} });
      } else {
        res.status(200).send({ status: true, msg: "banner updated successfully", data: fig });
      }
    } catch (error) {
        console.log(error);
        res.status(500).send({status:false, msg: "Internal server error",data:error });
    }
  };
  