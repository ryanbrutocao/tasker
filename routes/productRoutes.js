// const mongoose = require('mongoose');
// const Tasks = mongoose.model('tasks');

// module.exports = (app) => {

//   app.get(`/api/task`, async (req, res) => {
//     let tasks = await Tasks.find();
//     return res.status(200).send(tasks);
//   });

//   app.post(`/api/task`, async (req, res) => {
//     let task = await Tasks.create(req.body);
//     return res.status(201).send({
//       error: false,
//       task
//     })
//   })

//   app.put(`/api/task/:id`, async (req, res) => {
//     const { id } = req.params;

//     let task = await Tasks.findByIdAndUpdate(id, req.body);

//     return res.status(202).send({
//       error: false,
//       task
//     })

//   });

//   app.delete(`/api/task/:id`, async (req, res) => {
//     const { id } = req.params;

//     let task = await Tasks.findByIdAndDelete(id);

//     return res.status(202).send({
//       error: false,
//       task
//     })

//   })

// }
// /routes/productRoutes.js
const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = (app) => {

  app.get(`/api/product`, async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
  });

  app.post(`/api/product`, async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })

  app.put(`/api/product/:id`, async (req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/product/:id`, async (req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })

}