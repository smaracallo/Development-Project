/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

 //Set up an associative array
 //The keys represent the size of the cake
 //The values represent the cost of the cake i.e A 10" cake cost's $35
 var pizza_prices = new Array();
 pizza_prices["slice"]=1;
 pizza_prices["8pie"]=9;
 pizza_prices["10pie"]=11;
 
 
 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
 //We use this this array when the user selects a filling from the form
 var topping_prices= new Array();
 topping_prices["extracheese"]=1;
 topping_prices["pepperoni"]=1;
 topping_prices["sausage"]=1;
 topping_prices["olives"]=1;
 topping_prices["ham"]=1;

 
 
	 
	 
// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getPizzaPrice()
{  
    var pizzaPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["pizzaform"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedpizza = theForm.elements["selectedpizza"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedpizza.length; i++)
    {
        //if the radio button is checked
        if(selectedpizza[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            pizzaPrice = pizza_prices[selectedpizza[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return pizzaPrice;
}

//This function finds the filling price based on the 
//drop down selection
function getToppingPrice()
{
    var pizzaToppingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["pizzaform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["toppings"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    pizzaToppingPrice = topping_prices[selectedTopping.value];

    //finally we return cakeFillingPrice
    return pizzaToppingPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function candlesPrice()
{
    var candlePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["includecandles"];

    //If they checked the box set candlePrice to 5
    if(includeCandles.checked==true)
    {
        candlePrice=5;
    }
    //finally we return the candlePrice
    return candlePrice;
}

function insciptionPrice()
{
    //This local variable will be used to decide whether or not to charge for the inscription
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0
    var inscriptionPrice=0;
    //Get a refernce to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includeinscription"
    var includeInscription = theForm.elements["includeinscription"];
    //If they checked the box set inscriptionPrice to 20
    if(includeInscription.checked==true){
        inscriptionPrice=20;
    }
    //finally we return the inscriptionPrice
    return inscriptionPrice;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var totalPizzaPrice = getPizzaPrice() + getToppingPrice();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Your Pizza cost $"+ totalPizzaPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';

}






