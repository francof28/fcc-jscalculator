import React from 'react';
import './Calculator.css';

function Calculator () {
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(expression);

    /*
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

        }*/

        function display(symbol) {
            setExpression((prevValue) => {
              if (
                /[+*-/]/.test(symbol) &&
                /[+*-/]/.test(prevValue[prevValue.length - 1])
              ) {
                let newValue;
                if (/[-]/.test(symbol)) {
                  newValue = prevValue.slice(0, prevValue.length) + symbol;
                } else {
                  let count = 0;
                  for (let i = 0; i < prevValue.length; i++) {
                    if (isNaN(+prevValue[i])) {
                      count++;
                    } else {
                      count = 0;
                    }
                  }
                  newValue = prevValue.slice(0, prevValue.length - count) + symbol;
                }
        
                setExpression(newValue);
              } else {
                if (prevValue) {
                  prevValue = prevValue + "";
                  let valArr = prevValue.split(/[+/*-]/g);
                  console.log("valArr " + JSON.stringify(valArr));
                  let lastNumber = valArr[valArr.length - 1];
                  if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === ".") {
                    console.log("symbol = empty ");
                    symbol = "";
                  }
                }
        
                setExpression(
                  (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
                );
              }
            });
        
            setAnswer((prevValue) =>
              (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
            );
          }
        
          function calculate() {
            setAnswer(eval(expression));
            setExpression(eval(expression));
          }
          
          function clear() {
            setExpression("");
            setAnswer(0);
          }

    return (
            <div className="calculator">
                <div className="screen">
                    <input className="result" type="text" value={answer} id="display"/>
                </div>
                <button className="button clear" onClick={clear} id="clear">AC</button>
                <button className="button div" onClick={() => display("/")} id="divide">/</button>
                <button className="button mult" onClick={() => display("*")} id="multiply">x</button>
                <button className="button seven" onClick={() => display("7")} id="seven">7</button>
                <button className="button eight" onClick={() => display("8")} id="eight">8</button>
                <button className="button nine" onClick={() => display("9")} id="nine">9</button>
                <button className="button rest" onClick={() => display("-")} id="subtract">-</button>
                <button className="button four" onClick={() => display("4")} id="four">4</button>
                <button className="button five" onClick={() => display("5")} id="five">5</button>
                <button className="button six" onClick={() => display("6")} id="six">6</button>
                <button className="button add" onClick={() => display("+")} id="add">+</button>
                <button className="button one" onClick={() => display("1")} id="one">1</button>
                <button className="button two" onClick={() => display("2")} id="two">2</button>
                <button className="button three" onClick={() => display("3")} id="three">3</button>
                <button className="button equal" onClick={calculate} id="equals">=</button>
                <button className="button zero" onClick={() => display("0")} id="zero">0</button>
                <button className="button dot" onClick={() => display(".")} id="decimal">.</button>
            </div>
    )
}

export default Calculator;