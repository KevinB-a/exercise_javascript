//exercise1
var number = 57;
var number1 = 23;
var number2 = 98;
var number3 = 67;

function biggestNumber(number, number1, number2, number3) {
    if (number > number1 && number > number2 && number > number3) 
    {
      console.log(a);
    } 
    else if (number1 > number && number1 > number2 && number1 > number3) 
    {
      console.log(b)
    } 
    else if (number2 > number1 && number2 > number1 && number2 > number3) 
    {
      console.log(c);
    } 
    else 
    {
      console.log(d);
    }
  }
  biggestNumber(number, number1, number2, number3);

//exercise2
var userAge = Number(prompt("Quel âge avez-vous ?"));
if (userAge !== 0) {
  if (userAge <= 0) {
    alert("Rentrez votre vrai âge !"); 
  }
  if (userAge >= 21) {
    alert("vous pouvez entrer !");
  }
  if (userAge % 2 === 0) {
    alert("Votre âge est paire");
  }
  if (Number.isInteger(Math.sqrt(userAge))) {
    alert("Votre âge est un carré");
  }
} else {
  alert("Vous n'avez rien rentré !")
}
//exercise3
var hiddeNumber = 32;
var userNumber = null;

while (hiddeNumber !== userNumber) {
  userNumber = Number(prompt("Quel est le nombre caché ?"));
  if (userNumber > hiddeNumber) {
    alert("Trop haut !");
  } else if (userNumber < hiddeNumber) {
    alert("Trop bas");
  } else {
    alert("Trouvé !");
  }
}
//exercise4
var n = 0;
while(n !=100);
{
    console.log(n);
    n ++;
}

//exercise5
var n = 0;
while(n !=100);
{
    console.log(n);
    n = n+2;
}

//exercise6
function filling(lenght,width,depth,debit)
{
    var m3 = (lenght*width*depth)/debit;
    console.log(m3);
}
filling(5,4,2,3)

// exercise7
var ray = Number(prompt("veuillez entrez le rayon du cercle"));
function areaCircle()
{
    var area = (Math.sqrt(rayon) * Math.PI).toFixed(2);
    console.log("Votre cercle a une aire de " + area + " cm carrés");
}
function perimeterCircle()
{
    var perimeter = (2 * Math.PI * rayon).toFixed(2);
    console.log("Votre cercle a un perimètre de " + perimeter + " cm");
}
//exercise8

var n = 0;
var symbol = "*"
while (n != 6)
{
    console.log(n*symbol)
    n ++;
}

//exercise9
for (var i = 1; i <= 100; i++) 
{
    if (i % 15 === 0) 
    {
      console.log("FIZZBUZZ");
    } 
    else if (i % 5 === 0) 
    {
      console.log("BUZZ");
    } 
    else if (i % 3 === 0) {
      console.log("FIZZ");
    } 
    else 
    {
      console.log(i);
    }
}