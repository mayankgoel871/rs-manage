//importing student model
const Student = require('../models/student');

const student_login_get = (req, res) => {
       res.render("student/login",{
        error : null
       });
    };

const student_login_post = async (req, res) => {
try{
        const Sturoll = req.body.roll;   
        const StuDob = req.body.dob;
        const individualStudent = await Student.findOne({roll : Sturoll , dob : StuDob});  
        if(individualStudent==null) {
          throw new Error("not found")
        }  
        res.render("student/view", { one : individualStudent});}catch(error){
          res.render("student/login", {
            error : "Login with correct roll number"
          })
        }
    };
  
//exporting student controller functions
module.exports={
    student_login_get,
    student_login_post
}