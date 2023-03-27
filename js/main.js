let people = ["Sofia", "David", "Juan"];

let divAlert = document.getElementById("divAlert");


people.push("Sara", "Agustin");
people.push("Renata");
people.sort();
divAlert.innerHTML = people.lenght +"Personas";

divAlert.innerHTML += "<ol><li>" + people[0] + "</li>"
 + "<li>" + people[1] + "</li>"
 + "<li>" + people[2] + "</li>"
 + "<li>" + people[3] + "</li>"
 + "<li>" + people[4] + "</li>"
 + "<li>" + people[5] + "</li></ol>";

 let strPeople = people.join(", ").toUpperCase();
 console.log(strPeople);

 let arregloPeople = strPeople.split(", ");
 console.log(arregloPeople,length);
 console.log(arregloPeople[0]);
 console.log(arregloPeople[1]);
 console.log(arregloPeople[2]);
 console.log(arregloPeople[3]);

 