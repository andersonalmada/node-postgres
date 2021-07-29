const pool = require("../dbs/postgres");

exports.save = async (product) => {
  const result = await pool.query(
    "INSERT INTO products(name, price) VALUES ($1,$2) RETURNING *;",
    [product.name, product.price]
  );
  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query("SELECT * FROM products;");
  return result.rows;
};

exports.findOne = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id=$1;", [id]);
  return result.rows[0];
};

exports.findByName = async (name) => {
  const result = await pool.query("SELECT * FROM products WHERE name=$1;", [
    name,
  ]);
  return result.rows;
};

exports.update = async (id, product) => {
  const result = await pool.query(
    "UPDATE products SET name=$1, price=$2 WHERE id=$3 RETURNING *;",
    [product.name, product.price, id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM products WHERE id=$1;", [id]);
};
