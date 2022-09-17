const express=require('express');
const router = express.Router();
const Employee = require('../model/Employee')
const bcrypt = require('bcryptjs');


var jwt = require('jsonwebtoken');
const JWT_SECRET = 'uppcl%hierarchy##$$@@'


//ROUTE 1: Create a user using : POST "api/user/createuser" doesnot require token
router.post('/createuser',
    async (req, res) => {
        try {
            //Check if user with same erpId exists
            let employee = await Employee.findOne({ erpId: req.body.erpId });
            if (employee) {
                return res.status(400).json({ code:2, msg: "User with same erp id already exists" });
            }

            //Check if user with same email id exists
            employee = await Employee.findOne({ email: req.body.email});
            if (employee) {
                return res.status(400).json({ code:2, msg: "User with same email already exists" });
            }

            //Check if user with same mobile no exists
            employee = await Employee.findOne({ mobileno: req.body.mobileno});
            if (employee) {
                return res.status(400).json({ code:2, msg: "User with same mobile no already exists" });
            }

            //Password hashing
            var salt = await bcrypt.genSaltSync(10);
            const securePassword = await bcrypt.hash(req.body.password, salt);

            //Creating employee or saving details in database
            employee = await Employee.create({
                erpId:req.body.erpId,
                designation:req.body.designation,
                office:req.body.office,
                name: req.body.name,
                mobileno:req.body.mobileno,
                email: req.body.email,
                password: securePassword,
                role:req.body.role,
            });

            res.json({code:1,msg:"User Creation Successful"})
        }
        catch (error) {
            res.status(500).json({resCode:3, error:"Internal Server Error"});
        }
    });

    //ROUTE 2: Login a user using : POST "api/user/login" doesnot require token
router.post('/login',
async (req, res) => {
    const { erpId, password } = req.body;
    try {

        let employee = await Employee.findOne({ erpId });
        if (!employee) {
            return res.json({code:2, msg: "User does not exist" });
        }
        const passwordCompare = await bcrypt.compare(password, employee.password);
        
        if (!passwordCompare) {
            return res.json({ code:2, msg: "Please try to login with correct credentials" });
        }

        //Auth Token Generation
            const data = {
                employee: {
                    id: employee._id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            res.status(200).json({ code:1, authToken:authToken});
    }
    catch (error) {
        res.status(500).json({code:3,error:"Internal Server Error"});
    }
});

module.exports=router;
