/*let xValue = 100; //Dado que la funcion decrementa, no se puede empezar en 0
while (xValue>0){
    if (xValue % 2 !==0)  //Segunda parte del tercer ejercicio, aqui se compara si el residuo es diferente de 0 y si es el caso, se imprime el valor de xValue en la consola
    {console.log("[", xValue, "]")}; //Tercera parte complementando las instrucciones anteriores
    xValue -= 0.5;
}*/

 /*let xValue = 1;
 let n = prompt ("Cuantos valores necesitas?",0);

while (xValue<=n){
    console.log("[", xValue, "]"); //Tercera parte haciendolo por separado, es necesario anotar el valor de "n" que se desee
    xValue ++;
    
} */

var sum=0,n;
n=parseInt(prompt("Ingresa ell valor que necesitas"));
while(n>=1){
    sum=sum+n;
    n=n-1;
}
console.log("Suma de tu numero es", sum); //Cuarta parte del ejercicio 3 de la cuarta serie, sinceramente esta no supe anidarla en la primera parte