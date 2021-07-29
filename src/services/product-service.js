const productRepo = require("../repositories/product-repo");

class ProductService {
  add(product) {
    return productRepo.save(product);
  }

  getAll() {
    return productRepo.findAll();
  }

  getById(id) {
    return productRepo.findOne(id);
  }

  getByName(name) {
    return productRepo.findByName(name);
  }

  update(id, product) {
    return productRepo.update(id, product);
  }

  delete(id) {
    return productRepo.delete(id);
  }
}

module.exports = ProductService;
