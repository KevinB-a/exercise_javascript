//exercise1
var chest = "\n";

for(var i=1; i <= 8; i++) 
{
 for(var j=1; j <= 16; j++) 
 {
   if(j%2==0) {
     chest += " ";
   }
   else {
     chest += "#";
   }
 }
 chest += "\n";
}

console.log(chest);

//exercise2
var matrix = "\n";

for(var i=1; i <= 4; i++) 
{
 for(var j=1; j <= 4; j++) 
 {
   if(i === j) {
     matrix += "1 \n";
   }
   else 
   {
     matrix += "0 \n";
   }
 }
 matrix += "-------- \n";
}

console.log(matrix);



//Exercice 3 : Nombre paire ?

function isOdd(amont) 
{
 amont = Math.round(Number(amont));
 if(amont%2 === 0) {
   console.log(true);
 }
 else 
 {
   console.log(false);
 }
}

isOdd(4);


//Exercice 4 : Vous avez dit factorielle ?

function factorielle(value) 
{
 if(Number.isInteger(value)) 
 {
    var result = 1;
    for(var i=1; i < value; i++) 
    {
    result += result * i;
   }
   console.log(result);
 }
 else
{
   console.log("erreur");
}
}

factorielle(4);


//Exercice 5 : Les tirets ça compte !


function toUnderscore(string) 
{
 if( typeof string === "string") 
 {
   string = string.replace(/-/g, "_");
   console.log(string);
 }
 else
{
   console.log("Attention il faut passer une string en argument");
}
}

toUnderscore("attention-aux-tirets")

//Exercice 6 : Entraînez-vous avec les tableaux

var shoppingList = 
[
 "frites",
 "yahourt",
 "steack",
 "eau",
 "legumes"
];

console.log("Il faut acheter : " + shoppingList[0]);
console.log("Il faut acheter : " + shoppingList[shoppingList.length - 1]);
console.log("Il faut acheter : " + shoppingList[2]);


//Exercice 7 : Le tableau d'un homme

var people = 
[
 [
   "Thomas",
   "Homme",
   33
 ],
 [
   "Manon",
   "Femme",
   24
 ],
 [
   "Nicos",
   "Homme",
   34
 ]
];

function showPeople(arrayPeople) 
{
 for(var i = 0; i < arrayPeople.length; i++) 
 {
   var singlePeople = arrayPeople[i];
   for(var j = 0; j < singlePeople.length; j++ ) 
   {
     console.log(singlePeople[j]);
   }
 }
}

 showPeople(people);


//Exercice 8 : Le max d'un tableau
var arrayOfNumbers = [12, 45, 190, 150, 8, 21];

function findBiggestNumber(numbers) 
{
 var biggestNumber = 0;
 for(var i = 0; i<numbers.length; i++) 
 {
   if(numbers[i] > biggestNumber) 
   {
     biggestNumber = numbers[i];
   }
 }
 console.log(biggestNumber);
}

findBiggestNumber(arrayOfNumbers);


//Exercice 9 : Une to do list

var tasks = [];

var task;

while(task !== "fin") 
{
 task = prompt("Que devez-vous faire ?");
 tasks.push(task);
}

for(var i=0; i < tasks.length; i++) 
{
 console.log(tasks[i]);
}
// exercise 10 shifumi
var continueGame = new Boolean("true");
console.log("Welcome on shifumi game")

while (continueGame == "true")
{
    var scoreUser=0;
    var scoreComputer=0;
    var userName = prompt("quel est votre nom ou pseudo ? ");
    while (scoreUser && scoreComputer !=3)
    {
        var answer = prompt("veuillez entrez votre choix (pierre, papier, ciseaux)").toLowerCase();
        var listActions = ["pierre","papier","ciseaux"];
        var randomAction = listactions[Math.floor(Math.random()*listactions.length)];
        console.log(randomaction);
        if (answer !=randomAction )
        {
            if (answer == "pierre" && randomAction == "ciseaux" 
            || answer == "feuille" && randomAction == "pierre"
            || answer == "ciseaux" && randomAction == "feuille")
                scoreUser += 1;
            else
            {
                scoreComputer += 1;
            }
        console.log("le score de l'ordi est",scoreComputer,"votre score est ",scoreUser);
        var replay = prompt("voulez vous rejouer ? (tapez non pour quitter oui pour rejouer");
        if (replay == "non")
        {
            continueGame == false;
        }
        else
        {
            continueGame == true;
        }
    } 

}
}