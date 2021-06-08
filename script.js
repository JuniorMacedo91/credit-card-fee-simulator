
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
        alert(`Valor mínimo estipulado é R$ ${pagMin.toFixed(2)}`)
    } else{
        let iofMensal = 0.0038
        let iofDiario = 0.000082
        let diasAberto = 30

        let totalAberto = totalFatura - valorMin
        let totalTaxa = totalAberto * (taxa / 100)
        let iof = (totalAberto * iofMensal) + (totalAberto * iofDiario * diasAberto)
        let totalJuros = totalTaxa + iof
        let totalPag = totalAberto + totalTaxa

        document.querySelector('.totalAberto').innerHTML = parseFloat(totalAberto.toFixed(2))
        document.querySelector('.totalTaxa').innerHTML = `R$ ${totalTaxa.toFixed(2)}`
        document.querySelector('.iof').innerHTML = (iof.toFixed(2))
        document.querySelector('.totalJuros').innerHTML = totalJuros.toFixed(2)
        document.querySelector('#totalPag').innerHTML = (totalPag.toFixed(2))
        
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

    diasAtraso.innerHTML = calcData()

    if(totalFatura == '' || data1 == '' || data2 == '' ||taxa == ''){
        alert('Preencha todos os campos')
    } else {
        let iofMensal = 0.0038
        let iofDiario = 0.000082

        let totalTaxa = totalFatura * (1 + taxa)**(0.33) - totalFatura
        let mora = (totalFatura * calcData() * 0.00033)
        let multa = totalFatura * 0.02
        let iof = (totalFatura * iofMensal) + (totalFatura * iofDiario * calcData())
        let totalJuros = totalTaxa + mora + multa + iof
        let totalPag =  totalJuros + totalFatura
        
        document.querySelector('.totalTaxa').innerHTML = parseFloat(totalTaxa.toFixed(2))
        document.querySelector('.mora').innerHTML = parseFloat(mora.toFixed(2))
        document.querySelector('.valorMulta').innerHTML = parseFloat(multa.toFixed(2))
        document.querySelector('.iof').innerHTML = parseFloat(iof.toFixed(2))
        document.querySelector('.totalJuros').innerHTML = parseFloat(totalJuros.toFixed(2))
        document.querySelector('.totalPag').innerHTML = parseFloat(totalPag.toFixed(2))
    }
    
}
    





