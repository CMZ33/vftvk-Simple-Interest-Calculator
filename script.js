function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal<=0)
    {
        alert("We only take negetive numbers");
        principal.focus();
        return false;
    }
    var interest = (principal * years * rate) / 100;
    
    document.getElementById("all").hidden=false;
    document.getElementById("result").innerText = principal;
    document.getElementById("rates").innerText = rate;
    document.getElementById("ammount").innerText = interest;
  
    function updateRate() {
      var rateval = document.getElementById("rate").value;
      document.getElementById("rate_val").innerText = rateval;
    }
  return true;
  }     
        