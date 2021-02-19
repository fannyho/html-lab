function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years1").value;

    if (!checkData())
       return;
    
    thisYear = (new Date()).toString().split(" ")[3];
    interest = principal * years * rate / 100;
//    total = parseInt(principal) + interest ;
    total = Number(principal) + interest ;
    result = document.getElementById("result");

    result.innerHTML = "aIf you deposit <span class='bgyellow'>" + principal + "</span>.<br/>" +
                       "at an interest rate of <span class='bgyellow'>" + rate + "%</span>. <br/>" + 
                       "You will receive an amount of <span class='bgyellow'>" + (Number(principal) + interest) + "</span>, <br />" + 
                       " in the year <span class='bgyellow'>" + (Number(thisYear) + Number(years)) + "</span><br/><br/>";



}

function rateChanged()
{
    rate = document.getElementById("rate").value;
    rate_span  = document.getElementById("rate_span");
    rate_span.innerHTML = rate + "%";
}

function checkData ()
{
    var principal = document.getElementById("principal");
    var years = document.getElementById("years1");
   
    if ( Number(principal.value) <= 0 || isNaN(principal.value))
    {
       alert("Enter a positive number");
       principal.value = "";
       principal.focus();
       return false;
    }
  
    if (Number(years.value) <= 0 || isNaN(years.value))
    {
        alert("Please select a number.");
        years.value = "";
        years.focus();
        return false;
    }

    return true;
}
        