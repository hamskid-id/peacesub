import { configureStore } from "@reduxjs/toolkit";
import auth_Slice from "./authSlice";
import edu_Slice from "./eduSlice";
import electricity_Slice from "./electricitySlice";
import cable_Slice from "./cableSlice";
import purchaseAirtime_Slice from "./airtimeSlice";
import purchaseData_Slice from "./dataSlice";

const store = configureStore({
    reducer:{
        auth: auth_Slice.reducer,
        edu:edu_Slice.reducer,
        electricity:electricity_Slice.reducer,
        cable:cable_Slice.reducer,
        data: purchaseData_Slice.reducer,
        airtime:purchaseAirtime_Slice.reducer
    }
});

export default store;