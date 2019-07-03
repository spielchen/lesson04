let money, 
		income = "Фриланс",
		addExpenses,
		deposit,
		mission = 333333,
		period;

money = prompt("Ваш месячный доход?");
console.log(money);

addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses.split(","));

deposit = confirm("Есть ли у вас депозит в банке?");
console.log(deposit);

console.log(typeof money, typeof income, typeof deposit);

let	a1 = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
		a2 = prompt("Во сколько это обойдется?"),
		a3 = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
		a4 = prompt("Во сколько это обойдется?");
console.log(a1 + ": " + a2);
console.log(a3 + ": " + a4);

let budgetMonth = (+money) - (+a2) -(+a4);
console.log(budgetMonth);

period = (Math.round(mission / budgetMonth));
console.log("За " + period + " месяцев");

let budgetDay = (Math.floor(budgetMonth/30));
console.log(budgetDay);

if (budgetDay >= 800) {
	console.log("Высокий уровень дохода");
} else if (budgetDay > 300 && budgetDay < 800 ) {
	console.log("Средний уровень дохода");
} else if (budgetDay >= 0 && budgetDay <= 300) {
	console.log("Низкий уровень дохода"); 
} else if (budgetDay < 0){
	console.log("Что-то пошло не так")
}
//let budgetDay = money/30;
//console.log("Дневной бюджет: " + budgetDay);