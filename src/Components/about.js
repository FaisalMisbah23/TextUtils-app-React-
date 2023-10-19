import React,{useState} from 'react'

export default function About() {
    const [mystyle,setmystyle]=useState({
        background:'white',
        color:'black'})
    const [btntext,setBtnText]=useState("Enable Dark Theme")
  const changetheme=()=>{
    if(mystyle.background==='white'){
      setmystyle({
        background:'black',
        color:'white'
      })
      setBtnText("Enable Light Theme");
    }
    else{
      setmystyle({
        background:'white',
        color:'black'
      })
      setBtnText("Enable Dark Theme");
    }
  }
  return (
    <>
    <div className='container' style={mystyle}>
    <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore at? Optio ducimus aliquam accusantium aut neque vitae! Tempore unde dolor nihil tenetur repellendus ea nulla culpa repellat esse vero suscipit provident facere, expedita iste in aliquid vel id ex officiis at? Veniam recusandae, placeat molestiae itaque alias maxime fuga asperiores libero iste nisi? Perspiciatis ipsum minus dolorem, ut maxime eos error? Ipsam quia quis et illum eligendi, dolorem excepturi incidunt natus voluptatem vitae voluptate totam, tempore iste delectus enim assumenda? Tempora repellat itaque quisquam reiciendis fuga accusantium, alias laboriosam assumenda explicabo aliquid optio doloribus est dicta voluptatum culpa harum!</p>
      <button type="button" className="btn btn-success"  onClick={changetheme}>{btntext}</button>

    </div>
    </>
  )
}
