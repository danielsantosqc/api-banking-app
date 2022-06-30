const { faker } = require('@faker-js/faker');

class User {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    for (let index = 0; index < 10; index++) {
      let name = faker.name.findName();
      let age = faker.datatype.number({ min: 18, max: 100 });
      this.users.push({
        id: faker.datatype.uuid(),
        name: name,
        age: age,
        email: faker.internet.email(`${name}`, `${age}`),
        phone: faker.phone.number('+55 ## 9########'),
        // job: faker.name.jobTitle(),
      })
    }
  }

  create(user) {
    this.users.push(user);
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => { return item.id === id});
   }

  update() { }

  delete() { }


}
console.log('')

module.exports = User;
