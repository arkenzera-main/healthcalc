/**
 * APP Health Calc
 * Calculadora de métricas de saúde
 * @author Bruno Politi Romero
 * @version 1.0
 * @link https://github.com/arkenzera-main/healthcalc
 */


let peso, altura, imc, idade, fcm, litros, get








function calcular() {
    // captura das variáveis idade, peso e altura
    idade = frmHealth.txtIdade.value
    peso = frmHealth.txtPeso.value
    altura = frmHealth.txtAltura.value / 100 //converter cm em m
    // validação de campos obrigatórios (todos)
    if (frmHealth.txtIdade.value === "") { 
        alert("Preencha a idade!")
        frmHealth.txtIdade.focus()
    } else if (frmHealth.txtPeso.value === "") {
        alert("Informe o peso!")
        frmHealth.txtPeso.focus()
    } else if (frmHealth.txtAltura.value === "") {
        alert("Informe a altura!")
        frmHealth.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione     o sexo!")   
    } else if (frmHealth.nivel.value === "") {
        alert("Selecione o nível de atividade!")
    } else {
        // lógica principal
        // Cálculo do IMC
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = `IMC : ${imc.toFixed(2)}`
        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "img/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal"
            document.getElementById("grafico").src = "img/normal.png"
        } else if (imc < 30) {
            document.getElementById("status").innerHTML = "Sobrepeso"
            document.getElementById("grafico").src = "img/sobrepeso.png"
        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "Obesidade grau 1"
            document.getElementById("grafico").src = "img/obesidade1.png"
        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "Obesidade grau 2"
            document.getElementById("grafico").src = "img/obesidade2.png"
        } else if (imc >= 40) {
            document.getElementById("status").innerHTML = "Obesidade Extrema"
            document.getElementById("grafico").src = "img/obesidadeExtrema.png"
        }

        //FCM
        fcm = 208 - (0.7 * idade)
        document.getElementById("freq").innerHTML = fcm

        //consumo de água
        litros = (peso * 35) / 1000
        document.getElementById("agua").innerHTML = `${litros.toFixed(1)} litors/dia`


        //get
        //passo 1: capturar o valor da lista(combobox)
        let lista = document.getElementById('atividade')
        let valor = Number(lista.options[lista.selectedIndex].value)
        console.log(valor)
        //passo 2: executar uma fórmula diferente para o sexo selecionado
        if (document.getElementById("m").checked === true) {
            get = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade))) * valor
        }
        if (document.getElementById("f").checked === true) {
            get = (655 + (9.6 * peso) + (1.8 * (altura * 100) - (4.7 * idade))) * valor
        }

        // passo 3: exibir o resultado 
        //(Math.floor converte para número inteiro)
        document.getElementById('calorias').innerHTML = `${Math.floor(get)} calorias/dia`
    } 

    

}

function limpar() {
    document.getElementById('imc').innerHTML = "IMC"
    document.getElementById('status').innerHTML = "status"
    document.getElementById('frq').innerHTML = "FCM"
    document.getElementById('calorias').innerHTML = "calorias/dia"
    document.getElementById('agua').innerHTML = "litros/dia"
    document.getElementById('grafico').src = "img/reset.png "

}

