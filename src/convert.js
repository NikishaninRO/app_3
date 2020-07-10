import {currencies} from './dataCurrencies';

function convert(idListFrom, idListTo, idInputFrom, idInputTo)
/*
Функция выполняет перевод из одной валюты в другую по имеющейся информации о курсе валют;
Является обработчиком событий: выбор новой валюты в списках,  изменение содержимого поля для ввода;
Входные параметры: идентификаторы html-элементов (списков с выбранными типами валют и текстовых полей).
*/
{
    let listFrom = document.getElementById(idListFrom);
    let listTo = document.getElementById(idListTo);
    let inputFrom = document.getElementById(idInputFrom);
    let inputTo = document.getElementById(idInputTo);

    let currencieInfoFrom = currencies.get(listFrom.value);
    let currencieInfoTo = currencies.get(listTo.value);

    if(inputFrom.value === "" || isNaN(inputFrom.value))
    // поле для ввода пустое или не содержит число
    {
        inputTo.value = "";
        return;
    }
    
    let newValue = inputFrom.value * currencieInfoFrom.value / 
    currencieInfoFrom.nominal * currencieInfoTo.nominal / currencieInfoTo.value;
    
    inputTo.value = newValue.toFixed(4).toString().length < 24 && newValue.toString().indexOf('e') === -1 ? 
        newValue.toFixed(4) : 
        newValue.toExponential(4);
}

export {convert};