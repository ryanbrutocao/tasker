// //  /client/src/services/productService.js

// import axios from 'axios';

// export default {
//   getAll: async () => {
//     let res = await axios.get(`/api/task`);
//     return res.data || [];
//   }
// }

import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/product`);
    return res.data || [];
  }
}