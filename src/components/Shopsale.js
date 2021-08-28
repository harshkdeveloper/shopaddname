import React,{useRef}  from 'react'
import { motion } from "framer-motion";

import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose, } from "react-icons/io5";


const Shopsale = (props) => {
    const {item,updateShopname,removeShopname,completeshopnam,removeshopnam,completeShopname}=props;
    const inputref = useRef(true)
const inputdef = useRef(true)
const inputpef = useRef(true)
const inputsef = useRef(true)
const inputkef = useRef(true)
const changeFocus=()=>{
    inputref.current.disabled=false;
    inputref.current.focus();
    inputdef.current.disabled=false;
    inputdef.current.focus();
    inputpef.current.disabled=false;
    inputpef.current.focus();
    inputsef.current.disabled=false;
    inputsef.current.focus();
    inputkef.current.disabled=false;
    inputkef.current.focus();
}
const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateShopname({ id, item: value });
      inputref.current.disabled = true;
    }
    if (e.which === 13) {
        //here 13 is key code for enter key
        updateShopname({ id, item: value });
        inputdef.current.disabled = true;
    }
    if (e.which === 13) {
        //here 13 is key code for enter key
        updateShopname({ id, item: value });
        inputkef.current.disabled = true;

    }
    if (e.which === 13) {
        //here 13 is key code for enter key
        updateShopname({ id, item: value });
        inputpef.current.disabled = true;
    }
    if (e.which === 13) {
        //here 13 is key code for enter key
        updateShopname({ id, item: value });
        inputsef.current.disabled = true;
    }
  };
    return (
        <>
        {/* console.log("hye"shopname); */}
       <li key={item.id}className="card">
       Shop Name  <input type="text" ref={inputref}disabled={inputref} defaultValue ={item.item.name}  onKeyPress={(e) => update(item.id, inputref.current.value, e)}/>
    <br/>SHOP AREA   <select ref={inputkef} disabled={inputkef}defaultValue ={item.item.area}onKeyPress={(e) => update(item.id, inputkef.current.value, e)}>
    {/* <option>   {item.item.area} */}
        {/* </option> */}
        <option value="Thane" >Thane</option>
<option value="Pune">Pune</option>

<option value="Nashik">Nashik</option>
<option value="Nagpur">Nagpur</option>
<option value="Ahmednagar">Ahmednagar</option>
        </select>
   <br/>  Shop Category   <select ref={inputsef} disabled={inputsef}defaultValue ={item.item.category} onKeyPress={(e) => update(item.id, inputsef.current.value, e)}>
    <option>   {item.item.category}
        </option>
        <option value="Grocery" >Grocery</option>
<option value="Butcher">Butcher</option>
<option value="Bakery">Bakery</option>
<option value="Chemistry">Chemist</option>
<option value="5tationary Shop">Stationary shop</option></select>
     Open date  <input type="date" ref={inputdef} disabled={inputdef}defaultValue ={item.item.opendate} onKeyPress={(e) => update(item.id, inputdef.current.value, e)}/>
       
    Close Date <input type="date" ref={inputpef} disabled={inputpef}defaultValue ={item.item.closedate}onKeyPress={(e) => update(item.id, inputpef.current.value, e)}/>
      <div className="btns">
       <motion.button onClick={()=>changeFocus()}> <AiFillEdit /></motion.button>
       <motion.button onClick={()=>completeshopnam(item.id)}><IoCheckmarkDoneSharp/></motion.button>
       <motion.button onClick={()=>removeshopnam(item.id)}><IoClose/></motion.button>
       </div>  
       {item.completed && <span className="completed">done</span>}
        </li>
        </>
    )
}

export default Shopsale
