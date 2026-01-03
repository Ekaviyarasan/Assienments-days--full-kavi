const book ={
    Author:"Tesla",
    Title:"Autobiography",
    Pages:555,


}
book.Types=500
console.log(book)
book.Author="kalam"
book.Title="Agni sirakugal"
console.log(book)



// class Employee {
//   constructor(name, salery) {
//     this.name = name;
//     this.salery = salery; // spelled "salery"
//   }

//   display() {
//     console.log(`Name: ${this.name}`);
//     console.log(`Salery: ${this.salery}`);
//   }
// }

// const emp = new Employee("Root", 70000);
// emp.display();

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  

}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);   // call Employee constructor
    this.department = department;
  }
}
let manager1 = new Manager("Arasan", 50000, "HR");

console.log(manager1);













const user = {
  username: null,
  isLoggedIn: false,

  login(name) {
    this.username = name;
    this.isLoggedIn = true;
    console.log(`${this.username} logged in successfully.`);
  },

  logout() {
    if (this.isLoggedIn) {
      console.log(`${this.username} logged out.`);
      this.username = null;
      this.isLoggedIn = false;
    } else {
      console.log(`No user is currently logged in.`);
    }
  }
};

// Example usage:
user.login("Alice");  // Alice logged in successfully.
user.logout();        // Alice logged out.

