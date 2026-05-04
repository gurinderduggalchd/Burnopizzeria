
function checkform()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var addrs = document.getElementById("saddrs").value;
    var town = document.getElementById("town").value;
    var state = document.getElementById("state").value;
    var pcode = document.getElementById("pcode").value;
    var email = document.getElementById("email").value;
    var phno = document.getElementById("phno").value;
    var usrname = document.getElementById("usrname").value;
    var pwd = document.getElementById("pwd").value;
    
    if(fname === "")
    {
        document.getElementById("err").innerHTML = "First Name cannot be blank !!!";
        document.getElementById("fname").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(lname === "")
    {
        document.getElementById("err").innerHTML = "Last Name cannot be blank !!!";
        document.getElementById("lname").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(dob === "")
    {
        document.getElementById("err").innerHTML = "Date of birth cannot be blank !!!";
        document.getElementById("dob").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(addrs === "")
    {
        document.getElementById("err").innerHTML = "Street Address cannot be blank !!!";
        document.getElementById("saddrs").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(town === "")
    {
        document.getElementById("err").innerHTML = "Suburb/Town cannot be blank !!!";
        document.getElementById("town").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(state === "")
    {
        document.getElementById("err").innerHTML = "State cannot be blank !!!";
        document.getElementById("state").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(pcode === "")
    {
        document.getElementById("err").innerHTML = "Post Code cannot be blank !!!";
        document.getElementById("pcode").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(pcode.length < 4 || pcode.length > 4)
    {
        document.getElementById("err").innerHTML = "Post Code should be 4 digits only !!!";
        document.getElementById("pcode").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(email === "")    
    {
	document.getElementById("err").innerHTML = "Email cannot be blank !!!";
	document.getElementById("email").focus();  
	return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
	
    var emailpat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	
    if(email.match(emailpat))   
    {
	document.getElementById("err").innerHTML = "";    
    }
    else
    {
	document.getElementById("err").innerHTML = "Email address format is not correct !!!";
	document.getElementById("email").focus();    
	return false;
    }
    
    var numbers = /^[0-9]+$/;
    if(phno === "")
    {
        document.getElementById("err").innerHTML = "Phone number cannot be blank !!!";
	document.getElementById("phno").focus();    
	return false;
    }
    else if(phno.length < 10 || phno.length > 10)
    {
        document.getElementById("err").innerHTML = "Phone number should be 10 digits only !!!";
	document.getElementById("phno").focus();    
	return false;
    }   
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(phno.matches(numbers))
    {
        document.getElementById("err").innerHTML = "";
    }
    else
    {
        document.getElementById("err").innerHTML = "Phone number should be 10 digits only !!!";
        document.getElementById("phno").focus();
        return false;
    }
    
    if(usrname === "")
    {
        document.getElementById("err").innerHTML = "User name cannot be blank !!!";
        document.getElementById("usrname").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";
    }
    
    if(pwd === "")
    {
        document.getElementById("err").innerHTML = "Password cannot be blank !!!";
        document.getElementById("pwd").focus();
        return false;
    }
    else if(pwd.length < 8)
    {
        document.getElementById("err").innerHTML = "Password should be at least 8 characters long !!!";
        document.getElementById("pwd").focus();
        return false;
    }
    else
    {
        document.getElementById("err").innerHTML = "";        
    }
    
    return true;
 }