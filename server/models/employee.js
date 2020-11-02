const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema ({

    companyName: String,
    employeeName: String,
    country: String,
    terms:String,
    lSignature:String,
    tSignature:String
   
   })
   

const Employee = mongoose.model('Employee', EmployeeSchema);

//save rentl data to database
Employee.addEmployee = (employee, cb)=>{
    employee.save((err, result)=>{
        if(err){
            console.log(err);
            cb('Failed to add data', null);
        } else{
            cb(null, 'data saved successfully');
        }
    });
}






module.exports = Employee;