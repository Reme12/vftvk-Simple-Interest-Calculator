function compute()
{
    p = document.getElementById("principal").value;

    //get principal element with the amount
    var principal = document.getElementById("principal");
    //Validation: added one, the user could delete all, prevented
    if(principal.value == "" || principal.value == 0 || principal.value < 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //interest renamed in amount
    var amount = principal.value * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    //final string with the result
    document.getElementById("result").innerHTML = "If you deposit <mark>"+ principal.value + "</mark>,\<br\>at an interest rate of <mark>" + rate + "%</mark>\<br\>You will receive an amount of <mark>" + amount + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>"
}

function updateRate() 
{
    //get from a range value the number value
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}     
