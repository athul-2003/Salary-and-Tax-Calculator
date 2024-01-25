
function calcTax() {
    var incomeAmount = parseInt(document.getElementById('income').value);
    var timePeriod = parseInt(document.getElementById('time').value || 1);

    if (isNaN(incomeAmount)  || incomeAmount <= 0 || isNaN(timePeriod) || timePeriod <= 0){
        document.getElementById('error-message').innerHTML = "Please enter valid positive values.";
        document.getElementById('result').style.display = "none";
        return;
    }

    var tax;
    
    if (incomeAmount <= 300000) {
        // No tax for income up to 3,00,000
        tax = 0;
    } 
    else if (incomeAmount <= 600000) {
        
        tax = (incomeAmount - 300000) * 0.05;
    } 
    else if (incomeAmount <= 900000) {
       
        tax = (600000 - 300000) * 0.05 + (incomeAmount - 600000) * 0.1;
    } 
    else if (incomeAmount <= 1200000) {
        
        tax = (600000 - 300000) * 0.05 + (900000 - 600000) * 0.1 + (incomeAmount - 900000) * 0.15;
    } 
    else if (incomeAmount <= 1500000) {

        tax = (600000 - 300000) * 0.05 + (900000 - 600000) * 0.1 + (1200000 - 900000) * 0.15 + (incomeAmount - 1200000) * 0.2;
    }
    else{
        tax = (600000 - 300000) * 0.05 + (900000 - 600000) * 0.1 + (1200000 - 900000) * 0.15 + (1500000 - 1200000) * 0.2 + (incomeAmount - 1500000) * 0.3;
    }


    tax=tax*timePeriod;
    
    incomeAmount=incomeAmount*timePeriod;

    var totalSalary = incomeAmount - tax;

    document.getElementById('error-message').innerHTML = "";
    document.getElementById('result').style.display = "block";
    document.getElementById('tax').innerHTML = tax.toFixed(2);
    document.getElementById('totalPayment').innerHTML = totalSalary.toFixed(2);
}
function dataClear(){
    document.getElementById('error-message').innerHTML = "";
    document.getElementById('result').style.display = "block";
    document.getElementById('tax').innerHTML = "";
    document.getElementById('totalPayment').innerHTML = "";
}