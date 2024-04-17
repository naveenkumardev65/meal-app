/**
 * 
 * Sagas
 * 
 */

import { call, put, all, takeLatest } from 'redux-saga/effects';
import { loadMealCategories, loadFilterMealCategory, mealDetails } from './remotes';
import {
    LOAD_MEAL_CATEGORIES,
    LOAD_MEAL_CATEGORY,
    LOAD_MEAL_DETAILS,
    PLACE_ORDER
} from './constant';
import {
    loadMealCategoriesSuccess,
    loadMealCategoriesError,
    loadMealCategorySuccess,
    loadMealCategoryError,
    loadMealDetailsSuccess,
    loadMealDetailsError,
    placeOrderSuccess,
    placeOrderError
} from './actions';

import { generateAlphanumeric } from '../utils/tools';
import { toast, Bounce } from 'react-toastify';

function* loadMealCategoriesSaga() {
    yield takeLatest(LOAD_MEAL_CATEGORIES, function* updater({ load }) {
        if (load) {
            try {
                const result = yield call(loadMealCategories);
                if (result) {
                    yield put(loadMealCategoriesSuccess(result?.categories));
                }
            } catch (error) {
                yield put(loadMealCategoriesError('Failed to load the meal categories'));
            }
        }
    });
}

function* loadMealCategorySaga() {
    yield takeLatest(LOAD_MEAL_CATEGORY, function* updater({ mealType }) {
        if (mealType) {
            try {
                const result = yield call(loadFilterMealCategory, mealType);
                if (result) {
                    // For price, i used static value, i didn't receive the price from response
                    yield put(loadMealCategorySuccess(result?.meals.map(e => Object.assign({}, e, { price: 3, quantity: 0, category: mealType }))));
                }
            } catch (error) {
                yield put(loadMealCategoryError('Failed to load the meal category'));
            }
        }
    });
}

function* mealDetailsSaga() {
    yield takeLatest(LOAD_MEAL_DETAILS, function* updater({ mealId }) {
        if (mealId) {
            try {
                const result = yield call(mealDetails, mealId);
                if (result) {
                    let submitRecord = result?.meals?.length > 0 ? result?.meals[0] : {};
                    yield put(loadMealDetailsSuccess(Object.assign({}, submitRecord, { price: 3, quantity: 0 })));
                }
            } catch (error) {
                yield put(loadMealDetailsError('Failed to load the meal details'));
            }
        }
    });
}

function* placeOrderSaga() {
    yield takeLatest(PLACE_ORDER, function* updater({ records }) {
        if (records) {
            try {
                yield put(placeOrderSuccess(Object.assign({}, { id: generateAlphanumeric(8).toUpperCase(), items: records }), 'Order Placed Successfully'));
                toast.success('Your Order Placed Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                })
            } catch (error) {
                yield put(placeOrderError('Failed to place the order'));
            }
        }
    });
}


export default function* rootSagas() {
    yield all([
        loadMealCategoriesSaga(),
        loadMealCategorySaga(),
        mealDetailsSaga(),
        placeOrderSaga()
    ])
}
