function createCurrencyElements(elements, root, inputName){
    for(let i =0; i< elements.length; i++){
        const currencyKeyDiv   = document.createElement("div");
        const currencyKeyInput = document.createElement("input");
        currencyKeyInput.setAttribute("type", "radio");
        currencyKeyInput.setAttribute("name", inputName);
        currencyKeyInput.setAttribute("id", inputName + elements[i]);
        currencyKeyInput.setAttribute("value", elements[i]);

        const currencyKeyLabel = document.createElement("label");
        currencyKeyLabel.setAttribute("for", inputName + elements[i]);
        currencyKeyLabel.textContent = elements[i];

        currencyKeyDiv.appendChild(currencyKeyInput);
        currencyKeyDiv.appendChild(currencyKeyLabel);
        root.appendChild(currencyKeyDiv);
    }
}


//from
const parentEl = document.querySelector("#currency-box-from");
const fromInputName = "currency_from";


// to
const parentToEl = document.querySelector("#currency-box-to");
const toInputName = "currency_to";

const getBaseData = async function(fromTarget){
    const response =  await fetch(`https://api.exchangeratesapi.io/latest?base=${fromTarget}`);
    const responseJSON = await response.json();
    return responseJSON.rates;
};

const getData = async function(){
    const response =  await fetch("https://api.exchangeratesapi.io/latest?base=USD");
    const responseJSON = await response.json();
    const allCurrencies = Object.keys(responseJSON.rates);
    return allCurrencies;
};

const calculateButton = document.querySelector("#calculate-button");
calculateButton.addEventListener("click", function(){
    // kimden ceviriyourz
    const fromTarget = document.querySelector("input[name='currency_from']:checked").value;
    // kime ceviriyoruz
    const toTarget   = document.querySelector("input[name='currency_to']:checked").value;
    // amountu alalim
    const amount     = document.querySelector("input[name='amount']").value;

    getBaseData(fromTarget, toTarget, amount).then((rates) => {
        const resultForOne = rates[toTarget];
        const result = amount * resultForOne;
        const currencyResult = document.querySelector("#currency-result");
        currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
    });
});


getData().then((allCurrencies) => {
    createCurrencyElements(allCurrencies, parentEl, fromInputName);
    createCurrencyElements(allCurrencies, parentToEl, toInputName);
});

