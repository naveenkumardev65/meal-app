/**
 * 
 * Reducers
 * 
 */

import { produce } from 'immer';
import {
    LOAD_MEAL_CATEGORIES,
    LOAD_MEAL_CATEGORIES_SUCCESS,
    LOAD_MEAL_CATEGORIES_ERROR,
    LOAD_MEAL_CATEGORY,
    LOAD_MEAL_CATEGORY_SUCCESS,
    LOAD_MEAL_CATEGORY_ERROR,
    LOAD_MEAL_DETAILS,
    LOAD_MEAL_DETAILS_SUCCESS,
    LOAD_MEAL_DETAILS_ERROR,
    ADD_MEAL_TO_CART,
    REMOVE_MEAL_FROM_CART,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_ERROR
} from './constant';


const initialState = {
    loading: false,
    error: false,
    success: false,
    record: {},
    records: [],
    categories: [],
    cart: [],
    orders: []
}

const reducers = (state = initialState, { type, success, error, record, records, categories }) => {
    return produce(state, draft => {
        switch (type) {
            case LOAD_MEAL_CATEGORIES:
            case LOAD_MEAL_CATEGORY:
            case LOAD_MEAL_DETAILS:
                draft.loading = true;
                draft.error = false;
                draft.success = false;
                break;
            case LOAD_MEAL_CATEGORIES_SUCCESS:
                draft.loading = false;
                draft.error = false;
                draft.success = success;
                draft.categories = categories;
                break;
            case LOAD_MEAL_CATEGORIES_ERROR:
            case LOAD_MEAL_CATEGORY_ERROR:
            case LOAD_MEAL_DETAILS_ERROR:
                draft.loading = false;
                draft.error = error;
                draft.success = false;
                break;
            case LOAD_MEAL_CATEGORY_SUCCESS:
                draft.loading = false;
                draft.error = false;
                draft.success = success;
                draft.records = records;
                break;
            case LOAD_MEAL_DETAILS_SUCCESS:
                draft.loading = false;
                draft.error = false;
                draft.success = success;
                draft.record = record;
                break;
            case ADD_MEAL_TO_CART:
                draft.loading = false;
                draft.error = false;
                draft.success = success;
                draft.cart = draft?.cart?.length > 0 ? draft.cart?.find(e => e.idMeal && e.idMeal === record?.idMeal) ? draft.cart.map(r => r.idMeal && r.idMeal === record?.idMeal ? Object.assign({}, r, { quantity: r.quantity + 1 }) : r) : draft.cart.concat(Object.assign({}, record, { quantity: 1 })) : draft.cart.concat(Object.assign({}, record, { quantity: 1 }));
                break;
            case REMOVE_MEAL_FROM_CART:
                draft.loading = false;
                draft.error = false;
                draft.success = false;
                draft.cart = draft?.cart?.length > 0 ? draft.cart?.find(e => e.idMeal && e.idMeal === record?.idMeal && e.quantity > 1) ? draft.cart.map(r => r.idMeal && r.idMeal === record?.idMeal ? Object.assign({}, r, { quantity: r.quantity - 1 }) : r) : draft.cart.filter(e => e.idMeal !== record.idMeal) : draft.cart;
                break;
            case PLACE_ORDER_SUCCESS:
                draft.loading = false;
                draft.error = false;
                draft.success = success;
                draft.cart = [];
                draft.orders = draft.orders.concat(record);
                break;
        }
    })

}

export default reducers;