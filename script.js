let money, 
		income = "Фриланс",
		addExpenses,
		deposit = true,
		mission = 333333,
		period;

money = prompt("Ваш месячный доход?");

let	a1 = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
		a2 = prompt("Во сколько это обойдется?"),
		a3 = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
		a4 = prompt("Во сколько это обойдется?");

let getExpensesMonth = function (){
	return("Сумма всех расходов за месяц: " + ((+a2) + (+a4)));
};

console.log(getExpensesMonth());

var accumulatedMonth = function getAccumulatedMonth(){
	return("Накопления за месяц: " + ((+money) - ((+a2) + (+a4))));
};

console.log(accumulatedMonth());

let getTargetMonth = function(){
	let accumulatedMonth2 = (+money) - ((+a2) + (+a4));
	return("За какой период будет достигнута цель: " + (Math.round(mission / (+accumulatedMonth2))) + " месяцев");
};

console.log(getTargetMonth());

let showTypeof = function(item){
	console.log(item, typeof item);
}
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let budgetMonth = (+money) - (+a2) -(+a4);
let budgetDay = (Math.floor(budgetMonth/30));

function getStatusIncome(){
	if (budgetDay >= 800) {
		return("Высокий уровень дохода");
	} else if (budgetDay > 300 && budgetDay < 800 ) {
		return("Средний уровень дохода");
	} else if (budgetDay >= 0 && budgetDay <= 300) {
		return("Низкий уровень дохода"); 
	} else if (budgetDay < 0){
		return("Что-то пошло не так")
	}
}

console.log(getStatusIncome());