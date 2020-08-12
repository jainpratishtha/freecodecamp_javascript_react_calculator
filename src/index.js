import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const num=[7,8,9,4,5,6,1,2,3,0,'.'];
const ops_row1=['C','/','*','-','+','='];
// const ops_col=[];

const Display = () => {
  return (
    <div id="display" className="display" style={{ width: '240px' }}>
      123456
    </div>
  );
};


const Buttons=()=>{
  return <div><button className="btn btn-dark light-grey " id="clear">
  C
</button>

<button className="btn btn-dark light-grey " id="divide">
  /
</button>

<button className="btn btn-dark light-grey " id="multiply">
  *
</button>

<button className="btn btn-dark orange" id="subtract">
  -
</button>

<button className="btn btn-dark dark-grey" id="seven">
  7
</button>

<button className="btn btn-dark dark-grey" id="eight">
  8
</button>

<button className="btn btn-dark dark-grey" id="nine">
  9
</button>

<button className="btn btn-dark orange equals" id="add">
  +
</button>

<button className="btn btn-dark dark-grey" id="four">
  4
</button>

<button className="btn btn-dark dark-grey" id="five">
  5
</button>

<button className="btn btn-dark dark-grey" id="six">
  6
</button>

<button className="btn btn-dark dark-grey" id="one">
  1
</button>

<button className="btn btn-dark dark-grey" id="two">
  2
</button>

<button className="btn btn-dark dark-grey" id="three">
  3
</button>
<button className="btn btn-dark dark-grey zero" id="zero">
  0
</button>

<button className="btn btn-dark dark-grey" id="decimal">
  .
</button>
<button className="btn btn-dark orange equals" id="equals">
  =
</button></div>;
}

class App extends React.Component {
  render() {
    return (
      <div id="calculator">
        <Display />
        
        {ops_row1.map((key,id)=>(
        <button className={`btn btn-dark ops orange ${key==='C' && 'light-grey'}  ${(key==='=') && 'equals'}  ${(key==='+') && 'plus'}`} key={id}>{key}</button>
        ))}
        <div className="num-container">
        {num.map((n,id)=>(
<button className={`btn btn-dark dark-grey ${n===0 && 'zero'}`} key={id}>{n}</button>
        ))}
        </div>

      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
