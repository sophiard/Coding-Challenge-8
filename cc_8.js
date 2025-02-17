//Task 1 - Employee Salary Calculation.

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return netSalary;
}
//created function and equation to calculate the net salary 

console.log(`Task 1 part 1- Net Salary: $${calculateSalary(5000, 500, 0.1).toFixed(2)}`);  
console.log(`Task 1 part 2- Net Salary: $${calculateSalary(7000, 1000, 0.15).toFixed(2)}`); 
//logged the two net salaries 


//Task 2 - Product Price After Discount.
let calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return finalPrice;
  };
  //created a function that calculates the final price after discount 
  
  console.log(`Task 2 part 1- Final Price: $${calculateDiscount(100, 0.2).toFixed(2)}`); 
  console.log(`Task 2 part 2- Final Price: $${calculateDiscount(250, 0.15).toFixed(2)}`);
  //logged the final prices for task 2 


  //Task 3 - Service Fee Calculation
  const calculateServiceFee = (amount, serviceType) => {
    let discount = 0;
//created a arrow fucntion for calculating service fee 
    if (serviceType === "Premium") {
        discount = 0.15;
    } else if (serviceType === "Standard") {
        discount = 0.10;
    } else if (serviceType === "Basic") {
        discount = 0.05;
    }
    //I made a fee to each service type

    let serviceFee = amount * discount;
    return serviceFee;
// this is the equation to calculate service fee 
};

console.log(`Task 3 Part 1- Service Fee: $${calculateServiceFee(200, "Premium").toFixed(2)}`);
console.log(`Task 3 Part 2- Service Fee: $${calculateServiceFee(500, "Standard").toFixed(2)}`);
 
//Task 4 - Car Rental Cost Calculation
const calculateRentalCost = (days, carType, insurance = false) => {
    let costamount = 0;
//created a function calculate rental cars

    if (carType === "Economy") {
        costamount = 40;
    } else if (carType === "Standard") {
        costamount = 60;
    } else if (carType === "Luxury") {
        costamount = 100;
    }
    //assigned the car types to how much they costs

    let totalCost = days * costamount;
    if (insurance === true) {
        totalCost += days * 20;
    }
    //added on insurance fee if they ahve one

    return totalCost;
};

console.log(`Task 4 part 1- Total Rental Cost: $${calculateRentalCost(3, "Economy", true).toFixed(2)}`); 
console.log(`Task 4 part 2- Total Rental Cost: $${calculateRentalCost(5, "Luxury", false).toFixed(2)}`); 
//logged total rental costs 

//Task 5
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return totalPayment;
}// made a function that calculates the total payment 
console.log(`Task 5 part 1- Total Payment: $${calculateLoanPayment(1000, 0.05, 2).toFixed(2)}`);  
console.log(`Task 5 part 2- Total Payment: $${calculateLoanPayment(5000, 0.07, 3).toFixed(2)}`);
//logged the total payment   

//task 6
let transactions = [200, 1500, 3200, 800, 2500];

const filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};
//created a function that retunrs transactions using filter method
console.log("Task 6 - Transactions:", filterLargeTransactions(transactions, amount => amount > 1000));
//logged results  

//Task 7 - Shopping Cart Tracker.
function createCartTracker() {
    let total = 0;
    return function(amount) {
        total += amount;
        console.log(`Task 7- Total Cart Value: $${total}`);
    };
}
// used a function that retuns another one 
// this is so it can add more onto the ongoing total
let cart = createCartTracker();
cart(20);
cart(35); 
//logged the results 


//part 8
function calculateSavings(years, amount) {
    if (years >= 10) {
        return amount;
    }
    return calculateSavings(years + 1, amount * 1.05);
}
//made a function that calculated savings by increasing 5% until they reach 10 years 
console.log(`Task 8 Part 1- Projected Savings: $${calculateSavings(8, 1000).toFixed(2)}`);
console.log(`Task 8 Part 2- Projected Savings: $${calculateSavings(5, 5000).toFixed(2)}`);
//logged the projected savings 