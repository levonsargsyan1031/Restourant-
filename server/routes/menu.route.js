const route = require("express").Router();
const { db } = require("../connection");

route.get("/", async (req, res) => {
  let query = `SELECT * FROM menuitem`;

  if (req.query.filter) {
    query = `${query} WHERE category = ?`;
    console.log(query);
  }

  try {
    const menu = await db.query(query, [req.query.filter]);
    const menuData = JSON.parse(JSON.stringify(menu));
    res.json(menuData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});


route.post("/", async (req, res) => {
  const { price, name, category, composition } = req.body;
  if (!price || !name || !category) {
    res.status(400).send("Bad request");
    return;
  }

  try {
    const query = `INSERT INTO menuitem (name, price, composition, category, image_url)
      VALUES (?, ?, ?, ?, 'imgs/Karas.jpg')`;
    const result = await db.query(query, [name, price, composition, category]);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = { route };