const Product = require('../db/models/product');
const Category = require('../db/models/category');
const { products, categories } = require('./data');

class FakeDb {
  async clean() {
    await Category.deleteMany({});
    await Product.deleteMany({});
  }
  async add() {
    await Category.create(categories);
    await Product.create(products);
  }

  async populate() {
    await this.clean();
    await this.add();
  }
}

module.exports = new FakeDb();
