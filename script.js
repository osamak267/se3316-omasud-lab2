var removed = []; // creates a global variable called removed 
var index = 0; // creates a global variable called index 

function onSubmit() { // creates an function onSubmit which takes the values of the name, email and birth year and checks the validation 
    var Nameid = document.getElementById("name").value; 
    var Emailid = document.getElementById("email").value;
    var BirthYearid = document.getElementById("birth-year").value;
    var age = document.getElementById("birth-year").value;
    if(!name_validation(Nameid)) // name validation 
    {
        document.getElementById("InputValidation").innerHTML = "Invalid Name"; // If the name is invalid the website will display and text that says invalid name 
        return true;
    }    

    if(!email_validation(Emailid)) // email validation 
    {
        document.getElementById("InputValidation").innerHTML = "Invalid Email"; // If the email is invalid the website will display text that says invalid email 
        return true;
    }

    if(!BirthYear_validation(BirthYearid)) // birth year validation 
    {
        document.getElementById("InputValidation").innerHTML = "Invalid Year"; // If birth year is invalid the user will display a text that says invalid year 
        return true;
    }

    document.getElementById("name").replaceWith(document.getElementById("name").value); // This is access the id name and replace it with a name value that is accessed 
    document.getElementById("email").replaceWith("(", document.getElementById("email").value, ")"); // Once the the email is valid it puts circular brackets around it 
    document.body.innerHTML = document.body.innerHTML.replace("Name:", ""); // this replaces the name slot 
    document.body.innerHTML = document.body.innerHTML.replace("Email:", ""); // this replaces the email slot 
    document.body.innerHTML = document.body.innerHTML.replace("Year of birth:", ""); // will replace the year slot with the if statements below
    
    if (age >= 2001) {
        document.getElementById("birth-year").replaceWith("[Child]"); // if the age entered is above 2001 output child 
    }

    if (age < 2001){
        document.getElementById("birth-year").replaceWith("[Adult]"); // if age entered is below 2001 output adult 
    }

    document.getElementById("InputValidation").innerHTML = "";
}

function name_validation(Nameid){ // name validation function 
    var lenght_Nameid = Nameid.length; 
    
    if (lenght_Nameid > 0 && lenght_Nameid < 100) // makes sure lenght of name is between 0 and 100 
    {
        if(Nameid.match(/^[A-Za-z]+$/))  // makes sure valid characters only are entered
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
    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // makes sure valid characters are entered
    
    if (Emailid.match(validEmail))
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function BirthYear_validation(BirthYearid)
{
    if (BirthYearid == 1867){ // special case if BirthYearid === 1867 
        return true;
    }
    
    if (BirthYearid < 1900 || BirthYearid > 2019) 
    {
        return false;
    }

    else if (BirthYearid.match(/[a-z]/i)) // makes sure only valid characters 
    {
        return false;
    }
    
    return true;
    }
    
function add(x) // this is for adding and removing form checkout list and checkout basket
{   
    var singleElement = document.getElementById(x); // create an var called singleElement and access the id of x 
 
    var name = singleElement.querySelector("#box").querySelector("#name").innerHTML; // use queryselector with box and name so items names can be added 
    var date =  singleElement.querySelector("#box").querySelector("#date").innerHTML; // use queryselector with box and name so item due dates can be added 
    var button = document.createElement('button'); // create a button var 
    button.appendChild(document.createTextNode("remove"));
    removed[index] = singleElement.parentNode.removeChild(singleElement);
    button.onclick = function() {
        removeFromCheckoutList(button.parentNode);

    }
    checkout = document.getElementById("checkout");
    var li = document.createElement("li");
    var textName = document.createTextNode(name); // acess the name of item 
    var textDate = document.createTextNode(date); // acess the name of the date 
    li.id = index.toString(); // list id to a string 
    li.appendChild(textName); 
    li.appendChild(textDate);
    li.appendChild(button);
    checkout.appendChild(li);
    index++; // increment the child 
}

function removeFromCheckoutList(x){ 
    var UserList = document.getElementById("UserList");
    UserList.appendChild(removed[x.id])  
    x.remove(); // value of x while remove is accessed will get rid of that 
}
function check(){ // checkout button function 
    var question = confirm("Clear checkout"); // If the user 
    if(question == true){
        var checkout = document.getElementById("checkout");
        var child = checkout.lastElementChild;
        while(child){
            child.remove();
            child = checkout.lastElementChild;
        }
    }
    else
    {
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

function LanguageChange(switchLanguage) { // create a function to switch to a different language 
    switch (switchLanguage) { // make a switch statement for the language change 
        case "English": // case for english 
            document.getElementById("Arabic").checked = false; // always make it false 
            document.getElementById("0").innerHTML = "Naruto Volume One"; // type in the name of each id from the element in english so it can be converted to a different language
            document.getElementById("1").innerHTML = "One Piece Volume 50";
            document.getElementById("2").innerHTML = "Percy Jackson: The Lightning Theif";
            document.getElementById("3").innerHTML = "2014 Forest Hills Drive";
            document.getElementById("4").innerHTML = "Nothing Was The Same";
            document.getElementById("5").innerHTML = "Views";
            document.getElementById("6").innerHTML = "Coloring Book";
            document.getElementById("7").innerHTML = "The Hobbit";
            document.getElementById("8").innerHTML = "To Kill A MockingBird";
            document.getElementById("9").innerHTML = "4 Your Eyez Only";
            break;
        case "Arabic": // arabic case 
            document.getElementById("English").checked = false; // always make it false 
            document.getElementById("0").innerHTML = "ناروتو المجلد الأول"; // All the names below are the translated version of the english names into arabic
            document.getElementById("1").innerHTML = "قطعة واحدة حجم 50";
            document.getElementById("2").innerHTML = "بيرسي جاكسون: البرق ذايف";
            document.getElementById("3").innerHTML = "2014 فورست هيلز درايف";
            document.getElementById("4").innerHTML = "لا شيء بقي على حاله";
            document.getElementById("5").innerHTML = "الآراء ";
            document.getElementById("6").innerHTML = "كتاب التلوين";
            document.getElementById("7").innerHTML = "الهوبيت";
            document.getElementById("8").innerHTML = "لقتل الطائر المحاكي";
            document.getElementById("9").innerHTML = "4 عينيك فقط";
            break;
    }
}