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