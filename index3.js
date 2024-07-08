// Function to calculate the gross salary
function grossSalary(basicSalary, benefits){
    return basicSalary + benefits;
};

// Function to calculate net salary and showcase the various deductions
function calculateNetSalary(basicSalary, benefits) {

    let gross = grossSalary(basicSalary, benefits);

    let payee = calculateTax(gross);
    
    let nhifDeductions = calculateNHIF(gross);
    
    let nssfDeductions = calculateNSSF(gross);
    
    let netSalary = gross - payee - nhifDeductions - nssfDeductions;

    console.log (`Gross Salary: ${gross}`);
    console.log (`PAYEE: ${payee}`);
    console.log (`NHIF Deductions: ${nhifDeductions}`);
    console.log (`NSSF Deductions: ${nssfDeductions}`);
    console.log (`Net Salary: ${netSalary}`);

};

// Function calculating payee
function calculateTax(grossSalary){
    if (grossSalary <= 24000 ){
        return grossSalary * 0.1;
    } else if (grossSalary > 24000 && grossSalary <= 32333){
        return basicSalary * 0.25;
    } else if (grossSalary > 32333 && grossSalary <= 500000){
        return grossSalary * 0.3;
    } else if (grossSalary > 500000 && grossSalary <= 800000){
        return grossSalary * 0.325;
    } else {
        return grossSalary * 0.35;
    }
};

// Function calculating NHIF deduction based on gross salary
function calculateNHIF(grossSalary){
    if (grossSalary <= 5999 ){
        return 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999){
        return 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999){
        return 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999){
        return 500;
    } else if (grossSalary >= 15000 && grossSalary <= 19999){
        return 600;
    } else if (grossSalary >= 20000 && grossSalary <= 24999){
        return 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999){
        return 850;
    } else if (grossSalary >= 30000 && grossSalary <= 34999){
        return 900;
    } else if (grossSalary >= 35000 && grossSalary <= 39999){
        return 950;
    } else if (grossSalary >= 40000 && grossSalary <= 44900){
        return 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49999){
        return 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999){
        return 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999){
        return 1300;
    } else if (grossSalary >= 70000 && grossSalary <= 79999){
        return 1400;
    } else if (grossSalary >= 80000 && grossSalary <= 89999){
        return 1500;
    } else if (grossSalary > 90000 && grossSalary <= 99999){
        return 1600;
    } else {
        return 1700;
    }
};

// Function calculating NHIF deduction based on gross salary
function calculateNSSF(grossSalary){
    return Math.floor(grossSalary * 0.06);
};


calculateNetSalary(400000, 20000);