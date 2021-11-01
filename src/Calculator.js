import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
    constructor (){
        super();
        this.state = {
            currentNum: '0',
            prevNum: undefined,
            operation: undefined,
            result: '0',
            calcDisplay: '0',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        const newVal = e.target.value
        
        switch (newVal) {
            case 'clear': {
                this.setState({
                    currentNum: '0',
                    prevNum: undefined,
                    operation: undefined,
                    result: '0',
                    calcDisplay: '0',
                })
                break;
            }
            case 'dot': {
                if(!this.state.currentNum.includes('.')) {
                    this.setState({
                        currentNum: this.state.currentNum + '.',
                        calcDisplay: this.state.calcDisplay + '.'
                    })
                }
                break;
            }
            case 'div': {
                if(!this.state.operation){
                    this.setState({
                        prevNum: this.state.currentNum,
                        currentNum: '0',
                        operation: '/',
                        calcDisplay: this.state.calcDisplay + '/',
                        result: '/'
                    })
                }
                break;
            }
            case 'mult': {
                if(!this.state.operation){
                    this.setState({
                        prevNum: this.state.currentNum,
                        currentNum: '0',
                        operation: '*',
                        calcDisplay: this.state.calcDisplay + '*',
                        result: '*'
                    })
                }
                break;
            }
            case 'rest': {
                if(!this.state.operation){
                    this.setState({
                        prevNum: this.state.currentNum,
                        currentNum: '0',
                        operation: '-',
                        calcDisplay: this.state.calcDisplay + '-',
                        result: '-'
                    })
                }
                break;
            }
            case 'add': {
                if(!this.state.operation){
                    this.setState({
                        prevNum: this.state.currentNum,
                        currentNum: '0',
                        operation: '+',
                        calcDisplay: this.state.calcDisplay + '+',
                        result: '+'
                    })
                }
                break;
            }
            case 'equal': {
                const evaluated = eval(`${this.state.prevNum} ${this.state.operation} ${this.state.currentNum}`)
                this.setState({
                        prevNum: this.state.currentNum,
                        currentNum: `${evaluated}`,
                        operation: undefined,
                        result: evaluated
                    })
                break;
            }
            default: {
                if(!Number.isNaN(Number(newVal))) {
                    if(this.state.currentNum === '0'){
                        this.setState({
                            currentNum: newVal,
                            calcDisplay: newVal,
                            result: newVal
                        })
                    } else {
                        this.setState({
                            currentNum: this.state.currentNum + newVal,
                            calcDisplay: this.state.calcDisplay + newVal,
                            result: newVal
                        })
                    }
                }
            }

        }
    }

    display = (e) => {

    }

    render () {
        return (
            <div className="calculator">
                <div className="screen">
                    <input className="calc" type="text" value={this.state.calcDisplay}/>
                    <input className="result" type="text" value={this.state.result} id="display"/>
                </div>
                <button className="button clear" onClick={this.handleClick} value={'clear'} id="clear">AC</button>
                <button className="button div" onClick={this.handleClick} value={'div'} id="divide">/</button>
                <button className="button mult" onClick={this.handleClick} value={'mult'} id="multiply">x</button>
                <button className="button seven" onClick={this.handleClick} value={'7'} id="seven">7</button>
                <button className="button eight" onClick={this.handleClick} value={'8'} id="eight">8</button>
                <button className="button nine" onClick={this.handleClick} value={'9'} id="nine">9</button>
                <button className="button rest" onClick={this.handleClick} value={'rest'} id="substract">-</button>
                <button className="button four" onClick={this.handleClick} value={'4'} id="four">4</button>
                <button className="button five" onClick={this.handleClick} value={'5'} id="five">5</button>
                <button className="button six" onClick={this.handleClick} value={'6'} id="six">6</button>
                <button className="button add" onClick={this.handleClick} value={'add'} id="add">+</button>
                <button className="button one" onClick={this.handleClick} value={'1'} id="one">1</button>
                <button className="button two" onClick={this.handleClick} value={'2'} id="two">2</button>
                <button className="button three" onClick={this.handleClick} value={'3'} id="three">3</button>
                <button className="button equal" onClick={this.handleClick} value={'equal'} id="equals">=</button>
                <button className="button zero" onClick={this.handleClick} value={'0'} id="zero">0</button>
                <button className="button dot" onClick={this.handleClick} value={'dot'} id="decimal">.</button>
            </div>
        )
    }
}

export default Calculator;