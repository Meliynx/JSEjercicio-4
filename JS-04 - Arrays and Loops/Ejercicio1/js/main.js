let fila = ["Sofia", "David", "Juan"]; // los primeros integrantes de la fila
console.log("Parte #1");
console.log(fila);
fila.push("Sara"); //Agregamos a Sara al final de la fila
fila.push("Agustin"); // Agregamos a Agustin al final de la fila
fila.shift(); //Sofia es removidad e la fila ya quepasa a ventanilla
console.log("Parte #2");
console.log(fila);
fila.splice(1,0, "Renata"); //Agregamos a Renata al espacio especifico de la fila 
fila.push("Elena"); // Agregamos a Elena al fina de la fila
console.log("Parte #3");
console.log(fila);