import React,{useState} from 'react';
import PropTypes from 'prop-types';

export default function TextAnalyzer(props){
    const [text, setText] = useState('');
    let textChange = (event) => {
      setText(event.target.value)
    }
    let lowercase = () =>{
      let newText = text.toLowerCase();
      setText(newText);
    }
    let uppercase = () =>{
      let newText = text.toUpperCase();
      setText(newText);
    }
    let clear1 = () =>{
      let newText = setText('');
    }
    let removeSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
    }
    let copyText = () => {
      let text = document.getElementById('box');
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
       }
  
  return(
      <div className='main' style={{color:props.mode==='dark'?'white':'black'}}>
      
      <div className="mb-3 mx-3">
        <label htmlFor="exampleFormControlTextarea1" className="bold">Enter text</label>
        <textarea style={{backgroundColor:props.mode==='dark'?'#08518b':'white',color:props.mode==='dark'?'white':'black'}} value={text} className="form-control" id="box" rows="8" onChange={textChange}></textarea>
      </div>
      <div className='button mx-3'>
      <button type="button" onClick={lowercase} disabled={text.length===0} className="btn btn-primary mx-1">Lower Case</button>
      <button type="button" onClick={uppercase} disabled={text.length===0} className="btn btn-primary mx-1">Upper Case</button>
      <button type="button" onClick={clear1} disabled={text.length===0} className="btn btn-primary mx-1">Clear</button>
      <button type="button" onClick={removeSpace} disabled={text.length===0} className="btn btn-primary mx-1">Remove Space</button>
      <button type="button" onClick={copyText} disabled={text.length===0} className="btn btn-primary mx-1">Copy Text</button>
      
      </div>
      <div className='mx-3'>
        <h2 className='mt-3 mb-3'>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words {text.length} characters</h2>
        <p>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h4>Description</h4>
        <p>{text.length>0?text:'Enter something in the text box'}</p>
        </div>
      </div>
    )
    
  }
  TextAnalyzer.propTypes={
    mode:PropTypes.string.isRequired
  }
  TextAnalyzer.defaultProps={
    mode:'light'
  }