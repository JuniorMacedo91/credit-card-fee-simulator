
// Get name
function nameHome(){
    let name = document.querySelector("#text_name").value
    document.querySelector('.text_input').innerHTML = `Olá, ${name}!`
}



// Open and close popups
function popUp1(){
    let box2 = document.getElementById('popupMinPay')
    box2.style.display = 'block';
}

function popUp2(){
    let box2 = document.getElementById('popupLatePay')
    box2.style.display = 'block'
}

function closePopup(btn){
    btn.style.display = "none"
}

// Requesting to write name
function nameAlert(){
    let name = document.querySelector('#text_name').value
    if (name == '' ){
        alert('Digite seu nome')
    } else {
        location.href = "./opcoes-pagamento.html"
    }
}


// Convert to  Real currency
function realCurrency(number){
    let value = number
    
    let result = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    return result
}

// Calcule minimum rate
function minimum(){
    let totalInvoice = document.querySelector('#totalInvoice').value
    let minValue = document.querySelector('#minValue').value
    let minPay = totalInvoice * 0.15
    let date = document.querySelector('#date').value
    let rate =  document.querySelector('#rate').value

    if(totalInvoice == '' || minValue == '' || date == '' ||rate == ''){
        alert('Preencha todos os campos')
    } else if (minValue < minPay){
        alert(`Valor mínimo estipulado é R$ ${minPay.toFixed(2)}`)
    } else{
        let iofMensal = 0.0038
        let iofDiario = 0.000082
        let diasAberto = 30

        let totalLeft = totalInvoice - minValue
        let totalRate = totalLeft * (rate / 100)
        let iof = (totalLeft * iofMensal) + (totalLeft * iofDiario * diasAberto)
        let sumRate = totalRate + iof
        let totalPay = parseFloat (sumRate) + parseFloat (totalLeft)

        document.querySelector('#totalLeft').innerHTML = realCurrency(totalLeft)
        document.querySelector('#totalRate').innerHTML = realCurrency(totalRate)
        document.querySelector('#iof').innerHTML = realCurrency(iof)
        document.querySelector('#sumRate').innerHTML = realCurrency(sumRate)
        document.querySelector('#totalPay').innerHTML = realCurrency(totalPay)
        
    }
}


// Calcule the late payments rate
function late(){
    let totalInvoice = document.querySelector('#totalInvoice').value
    let expirationDate = document.querySelector('#expirationDate').value
    let payDate = document.querySelector('#payDate').value
    let rate =  document.querySelector('#rate').value / 100
    let delayDay = document.querySelector('#delayDay')

    function calcDate(){
        expiration = new Date(expirationDate)
        payDay = new Date(payDate)

        let defTime = Math.abs(payDay - expiration)
        let dayTime = 1000 * 60 * 60 * 24 
        let defDays = defTime / dayTime

        return defDays
    }

    delayDay.innerHTML = calcDate()

    if(totalInvoice == '' || expirationDate == '' || payDate == '' ||rate == ''){
        alert('Preencha todos os campos')
    } else {
        let iofMonth = 0.0038
        let iofDay = 0.000082

        let totalFee = totalInvoice * (1 + rate)**(0.33) - totalInvoice
        let dayRate = (totalInvoice * calcDate() * 0.00033)
        let fee = totalInvoice * 0.02
        let iof = (totalInvoice * iofMonth) + (totalInvoice * iofDay * calcDate())
        let totalRate = totalFee + dayRate + fee + iof
        let totalPay = parseFloat(totalInvoice) + parseFloat(totalRate)
        
        document.querySelector('#totalFee').innerHTML = realCurrency(totalFee)
        document.querySelector('#dayRate').innerHTML =  realCurrency(dayRate)
        document.querySelector('#fee').innerHTML = realCurrency(fee)
        document.querySelector('#iof').innerHTML = realCurrency(iof)
        document.querySelector('#totalRate').innerHTML = realCurrency(totalRate)
        document.querySelector('#totalPay').innerHTML = realCurrency(totalPay)
    }
    
}
    

