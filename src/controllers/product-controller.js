const Product = require("../models/product");
const ProductService = require("../services/product-service");
var productService = new ProductService();

exports.get = async (req, res) => {
  res.json(await productService.getAll());
};

exports.getById = async (req, res) => {
  res.json(await productService.getById(req.params.id));
};

exports.getByName = async (req, res) => {
  res.json(await productService.getByName(req.query.name));
};

exports.post = async (req, res) => {
  res.json(
    await productService.add(new Product(req.body.name, req.body.price))
  );
};

exports.put = async (req, res) => {
  res.json(
    await productService.update(
      req.params.id,
      new Product(req.body.name, req.body.price)
    )
  );
};

exports.delete = (req, res) => {
  res.json(productService.delete(req.params.id));
};
