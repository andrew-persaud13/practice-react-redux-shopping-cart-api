const express = require('express');
const {
  getProducts,
  createProduct,
  getProduct,
  getProductsInCart,
} = require('../controllers/product');

const router = express.Router();

router.post('/cart', getProductsInCart);
router.get('', getProducts);
router.post('', createProduct);
router.get('/:id', getProduct);

module.exports = router;
