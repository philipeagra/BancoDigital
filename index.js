const App = require("./App");

App.createUser("philipeagra.dev@email.com", "Philipe Agra");
App.createUser("logan@email.com", "Logan");
App.createUser("charlies_chavier@email.com", "Charlies Chavier");

App.deposit("philipeagra.dev@email.com", 100);

App.transfer("philipeagra.dev@email.com", "charlies_chavier@email.com", 20);

App.changeLoanFee(10);
App.takeLoan("logan@email.com", 2000, 24);

console.log(App.findUser("philipeagra.dev@email.com"));
console.log(App.findUser("philipeagra.dev@email.com").account);
console.log(App.findUser("charlies_chavier@email.com"));
console.log(App.findUser("charlies_chavier@email.com").account);
console.log(App.findUser("logan@email.com"));
console.log(App.findUser("logan@email.com").account);
console.log(App.findUser("logan@email.com").account.loans[0].installments);
