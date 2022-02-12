//calculadora simple
//basic calculator

num1 = parseInt(prompt("Num 1:"))
oper = prompt("Oper:")
num2 = parseInt(prompt("Num 2:"))
resultado;
if (oper == "+" || oper == "mas" || oper == "suma" || oper == "plus"){
    resultado = num1+num2;
    alert(`Equals: ${resultado}`);
}
else if (oper == "-" || oper == "resta" || oper == "menos"){
    resultado = num1-num2;
    alert(`Equals: ${resultado}`);
}
else if (oper == "*" || oper == "por" || oper == "x" || oper == "multiplicacion" || oper == "."){
    resultado = num1*num2;
    alert(`Equals: ${resultado}`);
}
else if (oper == "/" || oper == "division" || oper == "dividido" || oper == "entre" || oper == ":"){
    resultado = num1/num2;
    alert(`Equals: ${resultado}`);
}
else {
    alert("TUs muertos")
}