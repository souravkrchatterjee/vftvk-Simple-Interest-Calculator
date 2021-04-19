function compute()
{
<<<<<<< Updated upstream
    var principal = document.getElementById("principal").value;

    principal = Number(principal);
    var rate = document.getElementById("rate").value;
    rate= parseFloat(rate);
    var years = document.getElementById("years").value;
    years=Number(years);
    var interest = principal*rate*years/100;

    if(validatePrincipal() === true){

    var currentDate = new Date();
    var currentYear= currentDate.getFullYear();
    currentYear=Number(currentYear);
    var futureYear = currentYear + years;

    var result = document.getElementById("result");
      var output = "If you deposit <mark>" +principal+"</mark>,<br/>"+  "at an interest rate of <mark>" + rate + "</mark>%,<br/>" + "You will receive an amount of <mark>" + interest + "</mark>,<br/> in the year <mark>" + futureYear + "</mark>";

          result.innerHTML = output;
}
}

    function showRange()
    {
    var rate = document.getElementById("rate").value;
    document.getElementById("rate").nextElementSibling.innerHTML = rate +'%';

    }
=======
		//Create variables from input
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    
    //do math
    let interest = principal * years * rate / 100;
    let endYear = new Date().getFullYear() + parseInt(years);

    //compound interest formula
    let compounded = principal * ((1 + ((rate/100)/12)) ** (12*years))
		
    //validate the principal. If negative or 0 alert user and focus on principal
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    
    //display result
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>at an interest rate of 
    <mark>${rate}</mark>.<br>You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br>in the year <mark>${endYear}</mark><br>
    <br>With monthly compounded interest your balance would instead be <mark>${compounded.toFixed(2)}</mark>`;
}

//display rate % by slider
function rangeReader()
{
    let sliderValue = document.getElementById("rate").value;
    document.getElementById("sliderValue").innerText = `${sliderValue}%`;
}
>>>>>>> Stashed changes
