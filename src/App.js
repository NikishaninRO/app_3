import React from 'react';
import DropList from './dropList';
import InputField from './inputField';
import SwapButton from './swapButton';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
// конструктор для создания компонента, объединяющего весь контент приложения
  return (
  <div>
  <h1 className="caption">Конвертер валют</h1>
  <p className="label_1">Выполнить перевод из</p>
  <div className="list"><DropList id="list_from"/></div>
  <p className="label_2">в</p>
  <div className="list"><DropList id="list_to"/></div>
  <div className="edit_from"><InputField id="input_from"/></div>
  <p className="label_3">=</p>
  <div className="edit_to"><InputField id="input_to" readOnly=""/></div>
  <div className="button"><SwapButton id="swButton"/></div>
  </div>
  )
}

export default App;