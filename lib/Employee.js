class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";

      if (name === undefined) {
        this.name = '';
      }
      if (id === undefined) {
        this.id = '';
      }
      if (email === undefined) {
        this.email = '';
      }
    }
    

    
getName(){
    return this.name;
}

getId(){
    return this.id;
}

getEmail(){
    return this.email;
}
getRole(){
    return this.role;
}

  }

  const employee = new Employee();
console.log(employee);
  module.exports = Employee;