import {createSlice,nanoid} from"@reduxjs/toolkit"

const initialState={
    tilecolor:[],
    showUi:false,
    showRes:false,
}

export const tileSlice =createSlice(
    {
        name:"tile",
        initialState,
        reducers:{
            addColor :(state,action) =>{
                const tile={
                    id:nanoid(),
                    realColor:action.payload,
                    defcolor:"gray"
                }
                state.tilecolor.push(tile)
            },

            showUi :(state,action) =>{
                state.showUi=action.payload
            },

            showRes :(state,action) =>{
                state.showRes=action.payload
            }
        }
    }
)
export const {addColor,showUi,showRes} = tileSlice.actions
export default tileSlice.reducer