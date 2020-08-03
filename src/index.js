import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {sendRequest, parse, currencies} from './dataCurrencies';
import './index.css';


// ждем, пока выполниться запрос, 
// после этого парсим полученный ответ,
// затем отрисовываем все приложение
sendRequest("https://www.cbr-xml-daily.ru/daily_utf8.xml")
.then(requestAnswer => parse(requestAnswer))
.then(() => ReactDOM.render(<App currencies={currencies}/>, document.getElementById('root')));