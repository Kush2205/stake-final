import {configureStore} from"@reduxjs/toolkit"
import tileSlice from "../Features/tileSlice"

export const store=configureStore({reducer:tileSlice})