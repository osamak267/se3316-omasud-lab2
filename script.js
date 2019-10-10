function onSubmit() {
    var Nameid = document.getElementById("name").value;
    var Emailid = document.getElementById("email").value;
    var BirthYearid = document.getElementById("birth-year").value;
    var age = document.getElementById("birth-year").value;
    if(!name_validation(Nameid))
    {
        document.getElementById("InputValidation").innerHTML = "Invalid Name";
        return true;
    }    

    if(!email_validation(Emailid))
    {
        document.getElementById("InputValidation").innerHTML = "Invalid Email";
        return true;
    }

    if(!BirthYear_validation(BirthYearid))
    {
        document.getElementById("InputValidation").innerHTML = "Invalid Year";
        return true;
    }

    document.getElementById("name").replaceWith(document.getElementById("name").value);
    document.getElementById("email").replaceWith("(", document.getElementById("email").value, ")");
    document.body.innerHTML = document.body.innerHTML.replace("Name:", "");
    document.body.innerHTML = document.body.innerHTML.replace("Email:", "");
    document.body.innerHTML = document.body.innerHTML.replace("Year of birth:", "");
    if (age >= 2001) {
    
        
        document.getElementById("birth-year").replaceWith("[Child]");
    }

    if (age < 2001){
        document.getElementById("birth-year").replaceWith("[Adult]");
    }
    document.getElementById("InputValidation").innerHTML = " ";
}

function name_validation(Nameid){
    var lenght_Nameid = Nameid.length;
    if (lenght_Nameid > 0 && lenght_Nameid < 100) 
    {
        if(Nameid.match(/^[A-Za-z]+$/)) 
        {
            return true;
        }  
    }
    else 
    {
        return false;
    }

}

function email_validation(Emailid){
    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Emailid.match(validEmail))
    {
        return true;
    }
    else {
        return false;
    }
}

function BirthYear_validation(BirthYearid)
{
    
    if (BirthYearid < 1900 || BirthYearid > 2019)
    {
        return false;
    }

    else if (BirthYearid.match(/[a-z]/i)) 
    {
        return false;
    }
    
    return true;
    }
