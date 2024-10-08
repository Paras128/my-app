import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () =>{
    settext(text.toUpperCase());
    props.showAlert("Converted to UpperCase!","success")
  }

  const handleLowClick = () =>{
    settext(text.toLowerCase());
    props.showAlert("Converted to LowerCase!","success")
  }

  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to ClipBoard!","success")
  }

  const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ''
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    settext(uppercaseword.trim())
    props.showAlert("Capitalize First Lettor!","success")
  }

  const handleClearClick = () =>{
    settext("");
    props.showAlert("Cleared!","success")
  }


  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Listen!","success")
  }  

  const handleOnChange = (event) =>{
    settext(event.target.value);
  }

  const [text , settext] = useState("");
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#B0E0E6':'white' , color : props.mode==='dark'?'#2F4F4F':'#042743'}}rows="8"></textarea>
        <button className = "btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className = "btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className = "btn btn-primary my-2 mx-2" onClick={capitalFirstLetter}>Capital First Letter</button>
        <button className = "btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className = "btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear</button>

        </div>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summery</h2>
      <p><b>{text.length === 0? "0" : text.split(" ").length}</b> words, <b>{text.length}</b> Characters</p>
      <p><b>{text.length === 0? "0" : 0.008 * text.split(" ").length}</b> minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter Your Text to Preview'}</p>
    </div>
    </>
  )
}
