import { useState } from "react"
let RadioCalc = () =>
{
    var [a,setA]=useState(null);
    var [b,setB]=useState(null);
    var [c,setC]=useState(null);

    let text1 = (e) =>
    {
        setA(e.target.value);
    }
    let text2 = (e) =>
    {
        setB(e.target.value);
    }
    let Add = (e) =>
    { 
       c=parseInt(a)+parseInt(b);
       setA(a);
       setB(b);
       setC(c);
    }
    let Sub = (e) =>
    {
        c=a-b;
        setA(a);
        setB(b);
        setC(c);
    }
    let Multi = (e) =>
    {
        
       c=a*b;
       setA(a);
       setB(b);
       setC(c);
    }
    let Divid = (e) =>
    {
        
        c=a/b;
        setA(a);
        setB(b);
        setC(c);
    }
   return(
<div>
            <input type="text" onChange= { (e) => text1 (e) } /><br/>
            <input type="text" onChange= { (e) => text2 (e) } /><br/>


            <input type="radio" value="+" name="course" onClick={ (e) => Add (e) } />+
            <br/>
            <input type="radio" value="-" name="course" onClick={ (e) => Sub (e) } />-
            <br/>
            <input type="radio" value="*" name="course" onClick={ (e) => Multi (e) } />*
            <br/>
            <input type="radio" value="/" name="course" onClick={ (e) => Divid (e) } />/
            <br/>
            
            <p>{c}</p>
            </div>
   ) 
}
export default RadioCalc;