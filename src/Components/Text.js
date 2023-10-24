import React, {useState} from 'react'

export default function Text(props) {
    const [text,setText]= useState('');
  const ConvertUpClick= ()=>{
    console.log('Button was Clicked')
    let newtext = text.toUpperCase()
    setText(newtext)
    }
    const ConvertlowClick= ()=>{
        console.log('Button was Clicked')
        let newtext = text.toLowerCase()
        setText(newtext)
        }
    const ConvertCamel= ()=>{
            console.log('Button was Clicked')
            let newtext = text.toLowerCase()
            setText(newtext.charAt(0).toUpperCase() + newtext.slice(1))
            }
    const onChange= (event)=>{
    console.log('Text was changed')
    setText(event.target.value)
    }
    const reset= ()=>{
        console.log('Button was Clicked')
        let newtext = ("")
        setText(newtext)
        }
        const Copytoclip = () => {
            navigator.clipboard.writeText(text); 
            props.showAlert("Text Copied to Clipboard","success")
        }
        const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
        }
  return (
    <>
<div className='container'>
<div className="mb-3">
  <h1>{props.heading}</h1>
  
  <textarea className="form-control" onChange={onChange} value={text} id="myBox" rows="10"></textarea>
</div>
 <button className="m-2 btn btn-primary" onClick={ConvertUpClick}>Convert to Upper Case</button>
 <button  className="m-2 btn btn-danger" onClick={ConvertlowClick}>Convert to Lower Case</button>
 <button  className="m-2 btn btn-warning" onClick={ConvertCamel}>Convert to Camel Case</button>
 <button className="m-2 btn btn-success" onClick={Copytoclip}>Copy to Clip Board</button>
 <button className="m-2 btn btn-info" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
 <button  className="m-2 btn btn-dark" onClick={reset}>Reset</button>
 
</div>
<div className='my-2 container'>
<h1>Text Summary</h1>
<p> <strong>Words: </strong> {text.split(" ").length} <strong>Characters: </strong>{text.length} </p>
<p><strong>Read Time: </strong>{0.08*text.length} <strong>Sec</strong> </p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter Something in the textbox above to preview it."}</p>
</div>
</>
)
}
