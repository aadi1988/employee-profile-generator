const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email,offNumber){
        super(name, id , email);
        this.offNumber = offNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
