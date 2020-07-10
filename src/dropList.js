import React from 'react';
import './dropList.css';
import {currencies}  from './dataCurrencies';
import {convert} from './convert'

class DropList extends React.Component {
// компонент выпадающий список
    constructor(props) {
        super(props);
        this.getCurrencies = () => {
            // функция определяет кол-во и содержимое option списка по импортированному словарю
            let result = [];
            for(let currencie of currencies.keys())
            {
                result.push(currencie)
            }
            result.sort();
            return result;
        };
        this.options = this.getCurrencies();
    }

    render() {
    // это будет отрисовываться при рендеринге выпадающего списка
        return <div className="select"><select id={this.props.id} className="dropList" 
        onChange={() => convert("list_from", "list_to", "input_from", "input_to")}>
        {this.options.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select></div>;
    }
}

export default DropList;