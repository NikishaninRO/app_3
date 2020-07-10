let currencies = new Map(); // словарь, содержит информацию о котировке разных типов валют

currencies.set("RUB", getCurInfo(1, 1));

function getCurInfo(value, nominal) {
    // конструктор объекта, содержащего информацию о котировке некоторого типа валют
        return {
            value: value, // стоимость номинала в рублях
            nominal: nominal // номинал
        }
}

async function sendRequest(url) {
/*
Функция запрашивает данные о текущем курсе валют по переданному URL. Если запрос выполнен успешно,
функция возвращает ответ на запрос в формате текста.
*/
    try {
        const response = await fetch(url); // выполняем простой GET-запрос
        console.log("Код статуса HTTP-запроса: " + response.status);
        if(response.ok) {
            return await response.text();
        }
        else {
            alert("Ошибка HTTP: " + response.status);
        }
    }
    catch(err) {
        alert(err);
    }
}

function parse(data) {
/* 
Функция выполняет парсинг xml-документа, извлекает из полученного DOM-дерева
информацию о текущем курсе валют и записывает ее в специальный словарь
*/
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, 'application/xhtml+xml');
    let valutes = xml.getElementsByTagName("Valute");
    for(let valute of valutes)
    {
        let valuteInfo = valute.children;
        for(let element of valuteInfo)
        {
            if(element.localName === "CharCode")
            {
               var valuteName = element.innerHTML;
            }
            if(element.localName === "Value")
            {
                var valuteValue = +element.innerHTML.replace(",", ".");
            }
            if(element.localName === "Nominal")
            {
                var valuteNominal = +element.innerHTML;
            }
        }
        currencies.set(valuteName, getCurInfo(valuteValue, valuteNominal));
    }
}

export {currencies, sendRequest, parse};