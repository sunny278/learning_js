// Перед вами программа, которая сперва запрашивает у пользователя сумму, а потом спрашивает, какую операцию он хочет с ней совершить: внести эту сумму на счет или снять эту сумму со счета. Если сумма снятия превышает баланс, программа выводит сообщение о недостатке средств. Вставьте вместо многоточий верные инструкции.

let bankAccount = {
  balance: 500,

  deposit: function () {
    return this.balance + amount;
  },

  withdraw: function () {
    return this.balance - amount;
  },
};

const amount = Number(prompt());
const choice = prompt();
if (choice === "внести") {
  console.log(bankAccount.deposit());
} else if (choice === "снять" && amount <= bankAccount.balance) {
  console.log(bankAccount.withdraw());
} else if (amount > bankAccount.balance) {
  console.log("Недостаточно средств на счете");
}
