let employee = {
    baseSalary : 30000,
    overtime:10,
    rate:20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();
// BENEFITS OF OOP
// encapsulation: reduce complexity + increase resuability
// abstraction: reduce complexity + isolate impact of changes
// inheritance : eliminate redundant Conde 
// polymorephism : Refactor ugly switch/case statements
