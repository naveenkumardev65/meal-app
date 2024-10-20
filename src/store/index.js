import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from './reducers';
import rootSagas from "./sagas";
import { reducer as formReducer } from 'redux-form'


import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        mealsReducer: mealsReducer,
        form: formReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

// store.subscribe(() => console.log('store', store.getState()))

sagaMiddleware.run(rootSagas);

// Store watcher
// store.subscribe(() => console.log('store', store.getState()));
export default store;

