//Task 1 - Employee Salary Calculation.

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return netSalary;
}
//created function and equation to calculate the net salary 

console.log(`Task 1 part 1- Net Salary: $${calculateSalary(5000, 500, 0.1).toFixed(2)}`);  
console.log(`Task 1 part 2- Net Salary: $${calculateSalary(7000, 1000, 0.15).toFixed(2)}`); 
//logged the two net salaries 

