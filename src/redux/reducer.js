import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const addShopnameReducer=createSlice({
    name:"shopname",
    area:"shopname",
    category:"shopname",
    openingdate:"shopname",
    closingdate:"shopname",
    initialState,
    reducers:{
        addShopname:(state,action) => {
           state.push (action.payload);
           return state;
        },
        //remove shopname
        removeShopname: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
          },
          //update shopname
          updateShopname: (state,action) => {
            return state.map((shopname) => {
                if(shopname.id === action.payload.id){
                    return{
                        ...shopname,
                        item:action.payload.item,
                    };
                }
                    return shopname;
                });
            },
            completeShopname: (state, action) => {
                return state.map((shopname) => {
                  if (shopname.id === action.payload) {
                    return {
                      ...shopname,
                      completed: true,
                    };
                  }
                  return shopname;
                });
              },
            
          
    },
});
export const {addShopname,removeShopname,updateShopname,completeShopname}=addShopnameReducer.actions;
export const reducer=addShopnameReducer.reducer;


