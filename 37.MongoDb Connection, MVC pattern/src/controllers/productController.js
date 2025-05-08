const Product = require('../models/productModel');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).json(products)
        
    } catch (error) {
        res.status(500).json("Server Error")
        
    }
};

exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).send({
            message: "Product Created",
            product: newProduct
        });
        
    } catch (error) {
        res.status(500).send("Server Error");

        
    }
  
  
};

exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send({
            message: "Product Updated",
            product: updated
        });
    } catch (error) {
        res.status(500).send({ message: "Server Error" });
    }
};


exports.deleteProduct = async (req, res) => {

  try {
    const deleted = await Product.findByIdAndDelete(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!deleted) {
        return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send({
        message: "Product Deleted",
    });
} catch (error) {
    res.status(500).send({ message: "Server Error" });
}
};
