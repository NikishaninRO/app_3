import React from 'react';
import ReactDOM from 'react-dom';
import {sendRequest, parse} from './dataCurrencies';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

// ждем, пока выполниться запрос, 
// после этого парсим полученный ответ,
// затем отрисовываем все приложение
sendRequest("https://www.cbr-xml-daily.ru/daily_utf8.xml")
.then(requestAnswer => parse(requestAnswer))
.then(() => ReactDOM.render(<App/>, document.getElementById('root')));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();