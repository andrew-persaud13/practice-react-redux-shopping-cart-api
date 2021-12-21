const Product = require('../db/models/product');

exports.getProducts = async (req, res) => {
  const products = await Product.find({});

  return res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.getProductsInCart = async (req, res) => {
  try {
    const products = await Product.find({ _id: { $in: req.body.productIds } });

    return res.status(200).json(products);
  } catch (err) {
    res.status(401).send(err.message);
  }
};
