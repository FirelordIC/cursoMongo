import Tienda from "../models/tienda";

export const getTienda = async (req, res) => {
    const tienda = await Tienda.find();
    res.status(200).json(tienda);
}

// export const createTienda = async (req, res) => {
//     const{
//         name,
//     } = req.body;
//     const newTienda = new Tienda({
//         name,
//     })
//     await newTienda.save();
//     res.status(200).json({messages: "CORRECTO"})
// }