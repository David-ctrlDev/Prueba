let botonCalcular=document.querySelector(".play-buttons1")
botonCalcular.addEventListener('click', () => {
 let salario = document.getElementById('salario').value;
 let dias = document.getElementById('diasLabor').value;
 let calcular = (salario/30)*dias
 document.getElementById('resultado').innerHTML = parseInt(calcular)

    
})
    

