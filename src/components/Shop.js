import React,{useState,useRef}from 'react'
import { connect } from 'react-redux'
import { addShopname,removeShopname, updateShopname,completeShopname } from '../redux/reducer';
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps=(state)=>{
    return{
        shopname:state,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        shopnam:(obj)=>dispatch(addShopname(obj)),
//         removeshopnam:(id)=>dispatch(removeShopname(id)),
//         updateshopnam:(obj)=>dispatch(updateShopname(obj)),
//         completeshopnam:(id)=>dispatch(completeShopname(id))
    }
} 
const Shop = (props) => {
    const [shopname, SetShopname]=useState({
    name:'',
    area:'',
    category:'',
    opendate:'',
    closedate:''
});

console.log("props from store",props)
const handleChange = e =>{
        
    const{name,value}=e.target
    // console.log(name,value);
    SetShopname({
        ...shopname,
        [name]:value
    })
}
    return (
        <div className="addshopnames">
            {   console.log("shopname",shopname)}
           <input pattern="[a-zA-Z]+"className="shop-input"name="name" onChange={handleChange}value={shopname.name} oninvalid="setCustomValidity('Please enter on alphabets only. ')" type="text"  placeholder="Shopname"/>
            <select name="area" value={shopname.area} onChange={handleChange}className="shop-input">
                <option value="0">Select a shop area</option>
            <option value="Thane" >Thane</option>
<option value="Pune">Pune</option>
<option value="Mumbai Suburban">Mumbai Suburban</option>
<option value="Nashik">Nashik</option>
<option value="Nagpur">Nagpur</option>
<option value="Ahmednagar">Ahmednagar</option>
            </select>
            <select className="selectareacat" name="category" value={shopname.category} onChange={handleChange}className="shop-input">
                <option value="0">Select a shop category</option>
            <option value="Grocery" >Grocery</option>
<option value="Butcher">Butcher</option>
<option value="Bakery">Bakery</option>
<option value="Chemistry">Chemist</option>
<option value="5tationary Shop">Stationary shop</option>

            </select>
            <input type="date" name="opendate" value={shopname.opendate}onChange={handleChange}className="shop-input"/>
            <input type="date"onChange={handleChange}name="closedate"value={shopname.closedate}className="shop-input"/>
            <motion.button className="add-btn" onClick={()=>props.shopnam({
id: Math.floor(Math.random() * 1000),
item: shopname,
completed: false,
            })
            }
            >
                 <GoPlus />
            </motion.button>
            <br/>
          
     

        </div>
    )
}

// export default Shop;
export default connect(mapStateToProps,mapDispatchToProps)(Shop);

