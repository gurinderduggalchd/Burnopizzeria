
function getprice()
{
    var pizzprice = document.getElementById("pizztyp").value;
    document.getElementById("pprice").value = pizzprice; 
}

function setdelivery()
{
    var dlvrytyp = document.getElementById("dlvrytyp").value;
    
    if(dlvrytyp === "delivery")
    {
        document.getElementById("dlvryaddrs").disabled = false;
        document.getElementById("dlvryaddrs").focus();
    }    
}

function checkdelivery()
{
    var flag = document.getElementById("samedlvry").checked;
    if(flag === true)
    {
        var dlvryaddrs = document.getElementById("dlvryaddrs").value;
        if(dlvryaddrs === "")
        {
            alert("Please enter your delivery address first !!!");
            document.getElementById("dlvryaddrs").focus();
        }
        else
        {
            document.getElementById("billaddrs").value = dlvryaddrs;
        }
    }
    else
    {
        document.getElementById("billaddrs").value = "";
    }
}

function selectpay()
{
    var pay = document.getElementById("payon").value;
    
    if(pay === "online")
    {
        document.getElementById("ccardlbl").style.display = "inline-block";
        document.getElementById("ccnolbl").style.display = "inline-block";
    }
    else
    {
        document.getElementById("ccardlbl").style.display = "none";
        document.getElementById("ccnolbl").style.display = "none";
    }
}

function checkccard()
{
    var ccard = document.getElementById("ccard").value;
    
    if(ccard === "visa" || ccard === "mastercard")
    {
        document.getElementById("ccno").maxLength = "16";
        document.getElementById("ccno").focus();
    }
    else if(ccard === "americanexp")
    {
        document.getElementById("ccno").maxLength = "15";
        document.getElementById("ccno").focus();
    }    
}

function checkorder()
{
    var pizztyp = document.getElementById("pizztyp").value;
    var dlvrytyp = document.getElementById("dlvrytyp").value;
    var dlvryaddrs = document.getElementById("dlvryaddrs").value;
    var billaddrs = document.getElementById("billaddrs").value;
    var payon = document.getElementById("payon").value;
    var ccard = document.getElementById("ccard").value;
    var ccno = document.getElementById("ccno").value;
    
    if(pizztyp === "")
    {
         document.getElementById("err").innerHTML = "Select Pizza type !!!";
         document.getElementById("pizztyp").focus();
         return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(dlvrytyp === "")
    {
        document.getElementById("err").innerHTML = "Select Delivery type !!!";
        document.getElementById("dlvrytyp").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(document.getElementById("dlvryaddrs").disabled === false && dlvryaddrs === "")
    {
        document.getElementById("err").innerHTML = "Delivery Address cannot be blank !!!";
        document.getElementById("dlvryaddrs").focus();
         return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    
    if(billaddrs === "")
    {
        document.getElementById("err").innerHTML = "Billing address cannot be blank !!!";
        document.getElementById("billaddrs").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(payon === "")
    {
        document.getElementById("err").innerHTML = "Select Payment !!!";
        document.getElementById("payon").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(ccard === "")
    {
        document.getElementById("err").innerHTML = "Select Credit Card !!!";
        document.getElementById("ccard").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(ccno === "")
    {
        document.getElementById("err").innerHTML = "Credit card number cannot be blank !!!";
        document.getElementById("ccno").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    return true;
    
}