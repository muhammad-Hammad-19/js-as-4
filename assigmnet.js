// ✅ 1. Online Course Enrollment Processor
// Scenario:
// An online platform tracks course enrollments for students. Each enrollment includes the
// student's name, selected course, and enrollment date.
// Task:
// Write a function that processes an array of enrollment objects, each containing:
// ● name: Name of the student.
// ● course: The name of the course.
// ● enrollmentDate: The date the student enrolled.

// The system should:
// 1. Use switch to assign a fee to each course:
// ○ Web Development: $200
// ○ Data Science: $250
// ○ Graphic Design: $150
// 2. Use if-else to apply a 10% early bird discount for enrollments made more than 30
// days before the course start date.
// 3. Format student names and courses using string methods (capitalize first letter of each
// word).
// 4. Use date methods to calculate the duration since enrollment.
// 5. Use array methods to generate a summary of enrollments and fees.

// let students = [
//   {
//     name: "hammad",
//     course: "web development",
//     enrollDate: new Date("2024-4-01"),
//   },
//   {
//     name: "usman",
//     course: "Data science",
//     enrollDate: new Date("2024-4-2"),
//   },
//   {
//     name: "ali",
//     course: "graphic design",
//     enrollDate: new Date("2024-5-24"),
//   },
//   {
//     name: "hammad",
//     course: "web development",
//     enrollDate: new Date("2024-4-01"),
//   },
//   {
//     name: "usman",
//     course: "Data science",
//     enrollDate: new Date("2024-4-2"),
//   },
//   {
//     name: "ali",
//     course: "graphic design",
//     enrollDate: new Date("2024-5-24"),
//   },
// ];

// let capitalizeFirstLetter = (str) => {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };
// let feesSwitch = (students, startDate) => {
//   let currentdate = new Date(startDate);
//   let fees = 0;
//   let result = students.map((studentdata) => {
//     switch (studentdata.course) {
//       case "Data science":
//         fees = 250;
//         break;
//       case "graphic design":
//         fees = 150;
//         break;
//       case "web development":
//         fees = 200;
//         break;
//       default:
//         "we dont have coures:";
//         break;
//     }
//     let usersDate = new Date(studentdata.enrollDate);
//     let deletCurrentDate = Math.floor(
//       (currentdate - usersDate) / (1000 * 60 * 60 * 24)
//     );
//     if (deletCurrentDate > 30) {
//       let dic = fees * 0.1;
//       fees = fees - dic;
//     }
//     return {
//       studentname: capitalizeFirstLetter(studentdata.name),
//       enroolmentfess: `${fees.toFixed(2)}`,
//       durationtime: `${deletCurrentDate}ago`,
//     };
//   });
//   return result;
// };
// let result = feesSwitch(students, "2024-6-6");
// console.log(result);

// ✅ 2. Employee Payroll System
// Scenario:
// You are developing a payroll system for employees. Each employee has a salary, hours worked,
// and bonus eligibility.
// Task:
// Write a function that processes an array of employee objects, each containing:
// ● employeeName: The name of the employee.
// ● baseSalary: The base salary of the employee.
// ● hoursWorked: The total number of hours worked.
// ● eligibleForBonus: Boolean flag indicating if the employee is eligible for a bonus.

// The system should:
// 1. Calculate the overtime pay (1.5x the base rate) for any hours worked beyond 40.
// 2. Use switch to apply a bonus based on eligibility:
// ○ If eligible, apply a 10% bonus to the base salary.
// ○ If not eligible, no bonus.
// 3. Use if-else to check if the total salary exceeds $100,000, applying a tax rate of 30%
// for high earners.
// 4. Use string methods to format employee names.
// 5. Use array methods to calculate and display the total payroll.

// const employeesArr = [
//   {
//     employeeName: "hammad",
//     baseSalary: 100000,
//     hoursWorked: 45,
//     bonus: true,
//   },
//   {
//     employeeName: "usman",
//     baseSalary: 100000,
//     hoursWorked: 42,
//     bonus: false,
//   },
//   {
//     employeeName: "huzaifa",
//     baseSalary: 20000,
//     bonus: true,
//     hoursWorked: 41,
//   },
//   {
//     employeeName: "hashir",
//     baseSalary: 300000,
//     hoursWorked: 40,
//     bonus: false,
//   },
//   {
//     employeeName: "yafis",
//     baseSalary: 50000,
//     hoursWorked: 33,
//     bonus: true,
//   },
//   {
//     employeeName: "hassna",
//     baseSalary: 40000,
//     hoursWorked: 22,
//     bonus: true,
//   },
//   {
//     employeeName: "umar",
//     baseSalary: 20500,
//     hoursWorked: 41,
//     bonus: false,
//   },
// ];
// const format = (word) => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// };

// const allDataEmployees = () => {
//   let result = employeesArr.map((date) => {
//     let overtimePay = 0;
//     if (date.hoursWorked > 40) {
//       overtimePay = (date.hoursWorked - 40) * (date.baseSalary / 40) * 1.5;
//     }
//     let dic = 0;
//     switch (date.bonus) {
//       case true:
//         dic = date.baseSalary * 0.1;
//         break;
//       default:
//         "no bonus";
//         break;
//     }
//     let text = 0;
//     if (date.baseSalary > 100000) {
//       text = date.baseSalary * 0.3;
//       date.baseSalary = date.baseSalary - text;
//     }
//     let final = overtimePay + date.baseSalary + dic;
//     return {
//       employeeName: format(date.employeeName),
//       employeesBonus: date.bonus,
//       employeesSalary: final.toFixed(2),
//       employeeshoursWorked: date.hoursWorked,
//     };
//   });
//   return result;
// };
// let mainResult = allDataEmployees();
// console.log(mainResult);

// ✅ 3. Temperature Converter
// Scenario:
// You are building a temperature converter that converts between Celsius, Fahrenheit, and Kelvin.
// Task:
// Write a function that:
// 1. Takes in a temperature value and a unit (Celsius, Fahrenheit, or Kelvin).
// 2. Use switch to convert the given temperature to the other two units (e.g., Celsius to
// Fahrenheit and Kelvin).
// 3. Return the converted temperature values.

// let tempertures = () => {
//   let temperature = +prompt("Enter the temperature value:");
//   let unit = prompt(
//     "Enter the unit (celsius, fahrenheit, kelvin):"
//   ).toLowerCase();
//   let celsius;
//   let fahrenheit;
//   let kelvin;

//   switch (unit) {
//     case "celsius":
//       celsius = temperature;
//       fahrenheit = (celsius * 9) / 5 + 32;
//       kelvin = celsius + 273.15;
//       break;

//     case "fahrenheit":
//       fahrenheit = temperature;
//       celsius = ((fahrenheit - 32) * 5) / 9;
//       kelvin = celsius + 273.15;
//       break;

//     case "kelvin":
//       kelvin = temperature;
//       celsius = kelvin - 273.15;
//       fahrenheit = (celsius * 9) / 5 + 32;
//       break;

//     default:
//       console.log(
//         "⚠️ Invalid unit entered. Please enter 'celsius', 'fahrenheit', or 'kelvin'."
//       );
//       return;
//   }

//   console.log("✅ Converted Temperatures:");
//   console.log("Celsius: " + celsius.toFixed(2) + "°C");
//   console.log("Fahrenheit: " + fahrenheit.toFixed(2) + "°F");
//   console.log("Kelvin: " + kelvin.toFixed(2) + "K");
// };

// tempertures();

// ✅ 4. Banking System (Using Switch Case, Functions, and Loops)
// Scenario:
// You are developing a banking system that allows users to check their balance, deposit money,
// withdraw money, and transfer money to other users.
// Task:
// 1. Create an array of users, where each user has:
// ○ name (user’s name),
// ○ balance (user’s current balance).
// 2. Write a function that takes the user’s action (e.g., "deposit", "withdraw",
// "transfer", "checkBalance") and updates the user’s balance accordingly.
// 3. Use switch to handle the user’s action and:
// ○ For "deposit", add the deposit amount to the balance.
// ○ For "withdraw", subtract the withdrawal amount from the balance.
// ○ For "transfer", transfer money between users.
// 4. Return the updated balance after the action is performed.
// let bankfun = () => {
//   let userArray = [
//     {
//       name1: "ali",
//       balance: 5000,
//     },
//     {
//       name2: "usman",
//       balance1: 6000,
//     },
//   ];
//   function addFuc() {
//     let deposit = 30;
//     let withdraw = 500;
//     let transfer = 200;
//     userArray.forEach((data) => {
//       if (data.name1 === "ali") {
//         console.log("name", data.name1);
//         console.log("currant balance", data.balance);
//         console.log("deposite amount", deposit);
//         data.balance += deposit;
//         console.log("That is deposite amound calculate:", data.balance);
//         console.log("That is withdrow amound", withdraw);
//         data.balance -= withdraw;
//         console.log("That is withdrow amound substract", data.balance);
//         if (data.balance >= transfer) {
//           console.log("Transfer amount user", transfer);
//           data.balance -= transfer;
//           console.log("Transfer amounts", data.balance);
//         } else {
//           alert("Your amount is decress:");
//         }
//       } else if (data.name2 === "usman") {
//         console.log("name", data.name2);
//         console.log("currant balance", data.balance1);
//         console.log("deposite amount", deposit);
//         data.balance1 += deposit;
//         console.log("That is deposite amound:", data.balance1);
//         console.log("That is withdrow amound", withdraw);
//         data.balance1 -= withdraw;
//         console.log("That is withdrow amound", data.balance1);
//         console.log("Recive amount form user:", transfer);
//         data.balance1 += transfer;
//         console.log("Recive amount calculate::", data.balance1);
//       }
//     });
//   }
//   addFuc();
// };
// bankfun();

// ✅ 5. Multi-Currency Converter
// Scenario:
// You are building a currency converter for an international travel app. The app needs to convert
// an amount in one currency to multiple other currencies (e.g., USD to EUR, GBP, JPY, etc.).
// Task:
// 1. Create an object with exchange rates for different currencies (e.g., {"USD": 1,
// "EUR": 0.85, "GBP": 0.75, "JPY": 110.50}).
// 2. Write a function that:
// ○ Takes in the amount in USD and the target currency.
// ○ Converts the amount to the target currency using the exchange rates.
// ○ Use switch to handle the conversion based on the target currency.
// 3. Return the converted amount in the selected currency.

// const exchangeRates = {
//   USD: 1,
//   EUR: 0.85,
//   GBP: 0.75,
//   JPY: 110.59,
// };

// const currencyConvert = (amount, targetCurrency) => {
//   let convertedAmount;

//   switch (targetCurrency) {
//     case "EUR":
//       convertedAmount = amount * exchangeRates.EUR;
//       break;
//     case "GBP":
//       convertedAmount = amount * exchangeRates.GBP;
//       break;
//     case "JPY":
//       convertedAmount = amount * exchangeRates.JPY;
//       break;
//     case "USD":
//       convertedAmount = amount;
//       break;
//     default:
//       return "We don't have this currency.";
//   }

//   return convertedAmount.toFixed(2);
// };

// let result = currencyConvert(10, "EUR");
// console.log(result);
