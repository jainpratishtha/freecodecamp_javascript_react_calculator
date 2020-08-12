import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const num=[7,8,9,4,5,6,1,2,3,0,'.'];
const ops_row1=['C','/','*','-','+','='];
// const ops_col=[];

const Display = (props) => {
  return (
    <div id="display" className="display" style={{ width: '240px' }}>
      <div id="input">{props.input}</div>
      <div id="ouput">{props.output}</div>
    </div>
  );
};
class App extends React.Component {
  state={
    input:'0',
    output:'0'
  }
handleClick=(event)=>{
  if(event.target.value==='*'||event.target.value==='/'){
var x=this.state.input.length;
if(this.state.input[x-1]==='+'||this.state.input[x-1]==='-'){
  var new1=this.state.input;
new1=new1.slice(0,x-1)+event.target.value;
this.setState({
  input:new1
})
return;}
  }
  if(event.target.value==='.'){
if(this.state.input.includes('.')){
  return ;
}
  }
if(event.target.value==='='){
this.setState({
  input:this.state.input+event.target.value,
  output:eval(this.state.input).toPrecision(14)
})
}
else if(event.target.value==='C'){
this.setState({
  input:'0',
  output:'0'
})
}
else{
  if(this.state.input.includes('=')){
    this.setState({
        input:event.target.value
    })
  }
else{
if(this.state.input.length>=15){
return ;
}
  if(this.state.input!=='0'){
  this.setState({
    input: this.state.input+event.target.value
  })
}
  else {
    this.setState({
      input: event.target.value
    })
  }
}

}}
  render() {
    return (
      <div id="calculator">
        <Display input={this.state.input} output={this.state.output}/>
        
        {ops_row1.map((key,id)=>(
        <button className={`btn btn-dark ops orange ${key==='C' && 'light-grey'}  ${(key==='=') && 'equals'}  ${(key==='+') && 'plus'}`} key={id} value={key} onClick={this.handleClick}>{key}</button>
        ))}
        <div className="num-container">
        {num.map((n,id)=>(
        <button className={`btn btn-dark dark-grey ${n===0 && 'zero'}`}key={id} value={n} onClick={this.handleClick}>{n}</button>
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
