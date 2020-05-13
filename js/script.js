const currencyTypes = {
    'EUR':
    {
        'USD': 1.081903,
        'VND': 25126.40,
        'KRW': 1324.47,
        'JPY': 116.304,
        'SGD': 1.53265
    },
    'USD':
    {
        'EUR': 0.924445,
        'VND': 23266.31,
        'KRW': 1224.25,
        'JPY': 107.503,
        'SGD': 1.41677
    },
    'VND':
    {
        'EUR': 0.0000398295,
        'USD': 0.0000430879,
        'KRW': 0.0527470,
        'JPY': 0.00463171,
        'SGD': 0.0000610457
    },
    'KRW':
    {
        'EUR': 0.000755385,
        'USD': 0.000817151,
        'VND': 18.9689,
        'JPY': 0.0878372,
        'SGD': 0.00115750
    },
    'JPY':
    {
        'EUR': 0.00859996,
        'USD': 0.00930328,
        'VND': 216.191,
        'KRW': 11.3873,
        'SGD': 0.0131783
    },
    'SGD':
    {
        'EUR': 0.652649,
        'USD': 0.705969,
        'VND': 16405.89,
        'KRW': 864.081,
        'JPY': 75.8825
    },
}

let amountConvert = document.getElementById('amountConvert');
//let btn = document.getElementById("updateButton");
let active = 'EUR';

let coinChangeAmount = document.getElementById('coinChangeAmount');

updateButton.addEventListener("click", () => {
    let amt = amountConvert.value;
    if ((amt == "") || (isNaN(amt) == true)) {
        alert("Please enter amount to convert");
    } else {
        // amt ? ("" || (isNaN(amt) == true)) : alert("Please enter amount to convert");
        let fromCurrency = document.querySelector('input[name="currencyRadioButton"]:checked').value

        hideSelectedFromResults(fromCurrency);

        let toCurrency = ["EUR", "USD", "VND", "KRW", "JPY", "SGD"]
        let result = [];
        let displayResult = [];
        let i;
        for (i = 0; i < toCurrency.length; i++) {
            (fromCurrency == toCurrency[i]) ? result[i] = amt : result[i] = (amt * currencyTypes[fromCurrency][toCurrency[i]]).toFixed(2);
            // (from == to) ? result = amt : result = (amt * currencyTypes[from][to).toFixed(2);
            displayResult[i] = showResult(toCurrency[i], result[i])
        }
        // let notification = showResult(to, result);
        document.getElementById("toEurResult").innerHTML = `${displayResult[0]}`;
        document.getElementById("toUsdResult").innerHTML = `${displayResult[1]}`;
        document.getElementById("toVndResult").innerHTML = `${displayResult[2]}`;
        document.getElementById("toKrwResult").innerHTML = `${displayResult[3]}`;
        document.getElementById("toJpyResult").innerHTML = `${displayResult[4]}`;
        document.getElementById("toSgdResult").innerHTML = `${displayResult[5]}`;
    }
})

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

let showResult = (to, result) => {
    let convertedResult = "";
    to == "USD" ? convertedResult = formatCurrency('USD', result) : ""
    to == "EUR" ? convertedResult = formatCurrency('EUR', result) : ""
    to == "VND" ? convertedResult = formatCurrency('VND', result) : ""
    to == "KRW" ? convertedResult = formatCurrency('KRW', result) : ""
    to == "JPY" ? convertedResult = formatCurrency('JPY', result) : ""
    to == "SGD" ? convertedResult = formatCurrency('SGD', result) : ""
    return convertedResult;
}

// Bootstrap d-flex has some trouble with adding a display:none, so have to remove the class altogether to hide

function hideSelectedFromResults(active) {
    if (active == 'EUR') {
        $('.eur').removeClass("d-flex").addClass('hide');
        $('.usd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.vnd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.krw').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.jpy').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.sgd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
    }

    if (active == 'USD') {
        $('.usd').removeClass("d-flex").addClass('hide');
        $('.eur').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.vnd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.krw').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.jpy').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.sgd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
    }

    if (active == 'VND') {
        $('.vnd').removeClass("d-flex").addClass('hide');
        $('.eur').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.usd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.krw').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.jpy').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.sgd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
    }

    if (active == 'KRW') {
        $('.krw').removeClass("d-flex").addClass('hide');
        $('.eur').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.usd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.vnd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.jpy').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.sgd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
    }

    if (active == 'JPY') {
        $('.jpy').removeClass("d-flex").addClass('hide');
        $('.eur').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.usd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.vnd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.krw').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.sgd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
    }
    if (active == 'SGD') {
        $('.sgd').removeClass("d-flex").addClass('hide');
        $('.eur').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.usd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.vnd').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.krw').removeClass("d-flex").addClass("d-flex").removeClass("hide");
        $('.jpy').removeClass("d-flex").addClass("d-flex").removeClass("hide");
    }
}

coinChangeButton.addEventListener("click", () => {
    let amt = Math.round(coinChangeAmount.value / 1000) * 1000;
    if ((amt == "") || (isNaN(amt) == true)) {
        alert("Please enter amount to change into smaller bills");
    } else {
        let fiveHundredK = parseInt(amt / 500000);
        amt = amt % 500000;
        let twoHundredK = parseInt(amt / 200000);
        amt = amt % 200000;
        let oneHundredK = parseInt(amt / 100000);
        amt = amt % 100000;
        let fiftyK = parseInt(amt / 50000);
        amt = amt % 50000;
        let twentyK = parseInt(amt / 20000);
        amt = amt % 20000;
        let tenK = parseInt(amt / 10000);
        amt = amt % 10000;
        let fiveK = parseInt(amt / 5000);
        amt = amt % 5000;
        let twoK = parseInt(amt / 2000);
        amt = amt % 2000;
        let oneK = parseInt(amt / 1000);
        amt = amt % 1000;

        document.getElementById("coinChangeResult-500").innerHTML = `${fiveHundredK}`;
        document.getElementById("coinChangeResult-200").innerHTML = `${twoHundredK}`;
        document.getElementById("coinChangeResult-100").innerHTML = `${oneHundredK}`;
        document.getElementById("coinChangeResult-50").innerHTML = `${fiftyK}`;
        document.getElementById("coinChangeResult-20").innerHTML = `${twentyK}`;
        document.getElementById("coinChangeResult-10").innerHTML = `${tenK}`;
        document.getElementById("coinChangeResult-5").innerHTML = `${fiveK}`;
        document.getElementById("coinChangeResult-2").innerHTML = `${twoK}`;
        document.getElementById("coinChangeResult-1").innerHTML = `${oneK}`;
    }
})

hideSelectedFromResults(active);