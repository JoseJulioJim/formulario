function myFunction() 
{
    let x = document.getElementById("numb").value;
    let text;
    if (isNaN(x)) 
    {
        text = "Input no valido";
    } 
    else {
        text = "Input valido";
    }
    document.getElementById("demo").innerHTML = text;
}

function Pregunta2()
{
    let nombre = document.getElementById("name").value;
    let text;
    if (nombre != 5)
    {
        text = "Input invalido"
    }
    else{
        text = "Input valido"
    }
    document.getElementById("demo").innerHTML = text;

    
}

function Pregunta3()
{
    let nombre2 = document.getElementById("name2").value;
    let text;
    if (nombre2 % 7 == 0)
    {
        text = "Input valido"
    }
    else{
        text = "Input invalido"
    }
    document.getElementById("demo").innerHTML = text;
}

function Pregunta4()
{
    let nombre2 = document.getElementById("name3").value;
    let text;
    if (nombre2.length == 3)
    {
        text = "Input valido"
    }
    else{
        text = "Input invalido"
    }
    document.getElementById("demo").innerHTML = text;
}