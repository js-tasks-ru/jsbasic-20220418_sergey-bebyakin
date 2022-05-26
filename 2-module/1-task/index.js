let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  let sum = 0;
  for (let value of Object.values(salaries)) {
      if (typeof value === 'number' && isFinite(value)) {
        sum += value;
      }      
  }
return sum;
}

sumSalary(salaries);
