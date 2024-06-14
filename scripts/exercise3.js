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




//adding fullname getter

getFullName(){
let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
   console.log(`Employee ${employee1.fullName} created`);
   console.log(`Job title is ${employee1.jobTitle}`);
   console.log(`Pay rate is $${employee1.payRate}`);
 }
    return this.firstName + " " + this.lastName;

//code change to run

getIntro()
        let intro =
        "Hi! I'm " + this.getFullName() + " and I am a " +
        this.jobTitle;
        return intro;


Promote(newJobTitle,NewPayRate){
    let employee1 = new Employee(
        1, "Ian", "Auston", "Graphic Artist", 42.50);
       console.log(`Employee ${employee1.fullName} created`);
       employee1.promote("Sr. Graphic Artist", 46.75);
       console.log(`Job title is ${employee1.jobTitle}`);
       console.log(`Pay rate is $${employee1.payRate}`);
}


getIntro(){
    let employee1 = new Employee(
        1, "Ian", "Auston", "Graphic Artist", 42.50);
       let intro = employee1.getIntro();
       console.log(intro);
       employee1.promote("Sr. Graphic Artist", 46.75);
       console.log(`Job title is ${employee1.jobTitle}`);
}