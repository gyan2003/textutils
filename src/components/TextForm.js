import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was Clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick=()=>{
     let newText=text.toLowerCase();
     setText(newText);
    }
    const handleClearClick=()=>{
      let newText='';
      setText(newText);
     }
     const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
     }
     const handleExtraSpaces=()=>{
      let newText=text.charAt(0).toUpperCase()+text.slice(1);
      setText(newText);
    }
    const handleOnChange=(event)=>{
      
        setText(event.target.value);
    }

    
const [text, setText] = useState('Enter text here ');
// text="new text"; wrong way to change the state 
// setText("new text"); Correct way to change the state
return (
<>
<div className="container" style={{color:props.mode==='dark'?'white':'#121212'}}>
  <h2>{props.heading}</h2>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label"></label>
    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#121212':'white',color:props.mode==='dark'?'white':'#121212'}} value={text} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Upper Case</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
  <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary my-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#121212'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
     <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
     <h2>Preview</h2>
     <p>{text}</p>
</div>
</>
  )
}

