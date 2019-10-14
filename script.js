var removed = [];
var index = 0;

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

function add(x) 
{   
    var singleElement = document.getElementById(x);
 
    var name = singleElement.querySelector("#box").querySelector("#name").innerHTML;
    var date =  singleElement.querySelector("#box").querySelector("#date").innerHTML;
    var button = document.createElement('button');
    button.appendChild(document.createTextNode("remove"));
    removed[index] = singleElement.parentNode.removeChild(singleElement);
    button.onclick = function() {
        removeFromCheckoutList(button.parentNode);

    }
    checkout = document.getElementById("checkout");
    var li = document.createElement("li");
    var textName = document.createTextNode(name);
    var textDate = document.createTextNode(date);
    li.id = index.toString();
    li.appendChild(textName);
    li.appendChild(textDate);
    li.appendChild(button);
    checkout.appendChild(li);
    index++;
}

function removeFromCheckoutList(x){
    var UserList = document.getElementById("UserList");
    UserList.appendChild(removed[x.id])
    x.remove();
}
function check(){
    var question = confirm("Clear checkout");
    if(question == true){
        var checkout = document.getElementById("checkout");
        var child = checkout.lastElementChild;
        while(child){
            child.remove();
            child = checkout.lastElementChild;
        }
    }
    else{
        var checkout = document.getElementById("checkout");
        var UserList = document.getElementById("UserList");
        var child = checkout.lastElementChild;
        while(child){
            UserList.appendChild(removed[child.id]);
            child.remove();
            child = checkout.lastElementChild;
        }

    }
}