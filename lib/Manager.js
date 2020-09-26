const Employee = require('./Employee');

//Manager class inheriting from Employee class
class Manager extends Employee{
    constructor(name, id, email,offNumber){
        super(name, id , email);
        this.offNumber = offNumber;
    }

    //get manager's office number
    getoffNumber(){
        return this.offNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
