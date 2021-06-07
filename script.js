
// Registra nome
function nameHome(){
    let name = document.querySelector("#text_name").value
    document.querySelector('.text_input').innerHTML = `Olá, ${name}!`
}

// Informe se não digitou nome
function nameAlert(){
    let name = document.querySelector('#text_name').value
    if (name == '' ){
        alert('Digite seu nome')
    } else {
        location.href = "./opcoes-pagamento.html"
    }
}

// Calcula juros de pagamento mínimo
function minimum(){
    let totalFatura = document.querySelector('#totalFatura').value
    let valorMin = document.querySelector('#valorMin').value
    let pagMin = totalFatura * 0.15
    let date = document.querySelector('#date').value
    let taxa =  document.querySelector('#taxa').value

    if(totalFatura == '' || valorMin == '' || date == '' ||taxa == ''){
        alert('Preencha todos os campos')
    } else if (valorMin < pagMin){
        alert(`Valor mínimo estipulado é R$ ${pagMin}`)
    } else{
        let totalAberto = totalFatura - valorMin
        let totalJuros = totalAberto * (taxa / 100)
        let totalPag = totalAberto + totalJuros

        document.querySelector('#totalPag').innerHTML = totalPag
        document.querySelector('.totalJuros').innerHTML = totalJuros
        document.querySelector('.totalAberto').innerHTML = totalAberto
    }
}

// Calcula juros de pagamento em atraso
function late(){
    let totalFatura = document.querySelector('#totalFatura').value
    let data1 = document.querySelector('#dataVenc').value
    let data2 = document.querySelector('#dataPag').value
    let taxa =  document.querySelector('#taxa').value / 100
    let diasAtraso = document.querySelector('.diasAtraso')

    function calcData(){
        dataVenc = new Date(data1)
        dataPag = new Date(data2)

        let definirTempo = Math.abs(dataPag - dataVenc)
        let tempoDia = 1000 * 60 * 60 * 24 
        let definirDias = definirTempo / tempoDia

        return definirDias
    }

    if(totalFatura == '' || data1 == '' || data2 == '' ||taxa == ''){
        alert('Preencha todos os campos')
    } else {

        let totalJuros = totalFatura * (1 + taxa)**(0.33) - totalFatura
        let multa = totalFatura * 0.02
        let mora =(totalFatura * calcData() * 0.00033)
        let totalPag = totalJuros + multa + mora

        document.querySelector('.mora').innerHTML = parseFloat(mora.toFixed(2))
        document.querySelector('.valorMulta').innerHTML = parseFloat(multa.toFixed(2))
        document.querySelector('.totalJuros').innerHTML = parseFloat(totalJuros.toFixed(2))
        document.querySelector('#totalPag').innerHTML = parseFloat(totalPag.toFixed(2))
    }
    diasAtraso.innerHTML = calcData()
}
    





