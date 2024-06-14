"use strict";


//coding class
class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate, fullName) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    this.fullName = fullName;
  }
}


//test and run script
//let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
//console.log(`Employee ${employee1.firstName} created`);


//code change to run

let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
   console.log(`Employee ${employee1.fullName} created`);
   console.log(`Job title is ${employee1.jobTitle}`);
   console.log(`Pay rate is $${employee1.payRate}`);

//adding fullname getter
 getFullName() 
    return this.firstName + " " + this.lastName;

getIntro()
        let intro =
        "Hi! I'm " + this.getFullName() + " and I am a " +
        this.jobTitle;
        return intro;


