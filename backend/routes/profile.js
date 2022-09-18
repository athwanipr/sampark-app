const express=require('express');
const router = express.Router();
const Employee = require('../model/Employee')
//var fetchuser=require('../middleware/fetchuser');

// //ROUTE 1 : Get user profile details using : GET : "api/profile/fetchprofile" API  : login required
// router.get('/fetchprofile', fetchuser, async (req, res) => {
//     try {
//         const employee = await Employee.findOne({ employee: req.employee.id });
//         res.json(employee);
//     }
//     catch (error) {
//         res.status(500).send("Internal Server Error");
//     }

// });

module.exports = router;