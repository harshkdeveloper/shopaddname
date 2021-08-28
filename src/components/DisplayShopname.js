import React,{useState} from 'react'
import { connect } from 'react-redux';
import { addShopname,removeShopname, updateShopname,completeShopname } from '../redux/reducer';
import Shopsale from './Shopsale'
const mapStateToProps=(state)=>{
    return{
        shopname:state,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        shopnam:(obj)=>dispatch(addShopname(obj)),
        removeshopnam:(id)=>dispatch(removeShopname(id)),
        updateshopnam:(obj)=>dispatch(updateShopname(obj)),
        completeshopnam:(id)=>dispatch(completeShopname(id))
    };
} ;
const DisplayShopname = (props) => {
    const [sort, setSort] = useState("active")
    return (
       <div className="displayshopnames">
           <div className="buttons">
               <button onClick={()=>setSort("active")}>Active</button>
               <button onClick={()=>setSort("completed")}>Completed</button>
               <button onClick={()=>setSort("all")}>All</button>
           </div>
           <ul>
               {
                   props.shopname.length > 0 && sort==="active"
                    ?
                   props.shopname.map((item) =>{
                       return(
                        item.completed === false && (
                            <Shopsale
                            key={item.id}
                            item={item}
                            removeshopnam={props.removeshopnam}
                            updateshopnam={props.updateshopnam}
                            completeshopnam={props.completeshopnam}
                            />
                       )
                       ); 
                   })
                   :null}
                         {
                   props.shopname.length > 0 && sort==="completed"
                    ?
                   props.shopname.map((item) =>{
                       return(
                        item.completed === true && (
                            <Shopsale
                            key={item.id}
                            item={item}
                            removeshopnam={props.removeshopnam}
                            updateshopnam={props.updateshopnam}
                            completeshopnam={props.completeshopnam}
                            />
                       )
                       ); 
                   })
                   :null}
                   {/* for all items */}
                   {
                   props.shopname.length > 0 && sort==="all"
                    ?
                   props.shopname.map((item) =>{
                       return(
                        
                            <Shopsale
                            key={item.id}
                            item={item}
                            removeshopnam={props.removeshopnam}
                            updateshopnam={props.updateshopnam}
                            completeshopnam={props.completeshopnam}
                            />
                       
                       ); 
                   })
                   :null}
            
           </ul>
       </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayShopname);
