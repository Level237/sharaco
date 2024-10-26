
import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { authService } from "@/services/auth";
import { userService } from "@/services/users";





export const store=
  configureStore({
    reducer:{

        [authService.reducerPath]:authService.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authService.middleware),
    devTools:true,

})

export const persistor=persistStore(store)