import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from './reducers';
import rootSagas from "./sagas";


import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        mealsReducer: mealsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSagas);

store.subscribe(() => console.log('store', store.getState()));
export default store;

