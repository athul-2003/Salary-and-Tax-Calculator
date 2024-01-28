
function calcTax() {
    var incomeAmount = parseInt(document.getElementById('income').value);
    var timePeriod = parseInt(document.getElementById('time').value || 1);

    if (isNaN(incomeAmount)  || incomeAmount <= 0 || isNaN(timePeriod) || timePeriod <= 0){
        document.getElementById('error-message').innerHTML = "Please enter valid positive values.";
        document.getElementById('result').style.display = "none";
        return;
    }

    var tax;


    
    if (incomeAmount <= 700000) {
        // No tax for income up to 7,00,000 according to section 87A
        tax = 0;

    }
    else if(incomeAmount >700000 && incomeAmount<800000){
        var tax=(incomeAmount-700000);
   
    }
    else{
    
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



    }

    tax=tax*timePeriod;
    var cess = tax * 0.04;
    var totalTax = tax + cess;
    incomeAmount=incomeAmount*timePeriod;

    var totalSalary = incomeAmount - totalTax;

    document.getElementById('error-message').innerHTML = "";
    document.getElementById('result').style.display = "block";
    document.getElementById('tax').innerHTML = "\u20B9 " + tax.toLocaleString();
    document.getElementById('cess').innerHTML = "\u20B9 " + cess.toLocaleString();
    document.getElementById('totalTax').innerHTML = "\u20B9 " + totalTax.toLocaleString();
    document.getElementById('totalPayment').innerHTML = "\u20B9 " + totalSalary.toLocaleString();
}
function dataClear(){
    document.getElementById('error-message').innerHTML = "";
    document.getElementById('result').style.display = "block";
    document.getElementById('tax').innerHTML = "";
    document.getElementById('cess').innerHTML = "";
    document.getElementById('totalTax').innerHTML = "";
    document.getElementById('totalPayment').innerHTML = "";
}