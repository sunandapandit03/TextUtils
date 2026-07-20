import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleUpClick =()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase!","success"); 
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleLoClick =()=>{
        console.log("lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =()=>{
        let newText='';
        setText(newText);
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'white'}}>
        <h1 >{props.heading}-{text}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox " rows="8 " value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
        </div>
        <button className="btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase </button>
        <button className="btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase </button>
         <button className="btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my= 3" style={{
        backgroundColor:props.mode==='dark'?'grey':'white'
        }}>
        <h1>your text  summary </h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
    </div>
    </>

  )
}
 