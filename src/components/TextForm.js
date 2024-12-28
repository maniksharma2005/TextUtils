import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");

    }
    const handleLoClick=()=>{
      console.log("Lowercase was clicked");
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase", "success");


  }
    const handleOnChange=(event)=>{
        console.log("On Changed");
        setText(event.target.value)
    }
    const[text,setText] = useState('')
  return (
   <>
    <div class = "container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'
, color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
 
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length}Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in textbox to preview it here"}</p>
    </div>
    </>
  )
}
