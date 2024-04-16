/**
 * 
 * Actions
 * 
 */

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
    PLACE_ORDER,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_ERROR
} from './constant';


/**
 * 
 * @param {boolean} load 
 * @returns 
 */
function loadMealCategories(load) {
    return {
        type: LOAD_MEAL_CATEGORIES,
        load
    }
}

/**
 * 
 * @param {Array} categories 
 * @param {string} success 
 * @returns 
 */
function loadMealCategoriesSuccess(categories, success) {
    return {
        type: LOAD_MEAL_CATEGORIES_SUCCESS,
        categories,
        success
    }
}

/**
 * 
 * @param {string} error 
 * @returns 
 */
function loadMealCategoriesError(error) {
    return {
        type: LOAD_MEAL_CATEGORIES_ERROR,
        error
    }
}

/**
 * 
 * @param {string} mealType 
 * @returns 
 */
function loadMealCategory(mealType) {
    return {
        type: LOAD_MEAL_CATEGORY,
        mealType
    }
}

/**
 * 
 * @param {Array} records 
 * @returns 
 */
function loadMealCategorySuccess(records) {
    return {
        type: LOAD_MEAL_CATEGORY_SUCCESS,
        records
    }
}


/**
 * 
 * @param {error} error 
 * @returns 
 */
function loadMealCategoryError(error) {
    return {
        type: LOAD_MEAL_CATEGORY_ERROR,
        error
    }
}


/**
 * 
 * @param {string} mealId 
 * @returns 
 */
function loadMealDetails(mealId) {
    return {
        type: LOAD_MEAL_DETAILS,
        mealId
    }
}

/**
 * 
 * @param {object} record 
 * @returns 
 */
function loadMealDetailsSuccess(record) {
    return {
        type: LOAD_MEAL_DETAILS_SUCCESS,
        record
    }
}

/**
 * 
 * @param {string} error 
 * @returns 
 */
function loadMealDetailsError(error) {
    return {
        type: LOAD_MEAL_DETAILS_ERROR,
        error
    }
}


/**
 * 
 * @param {object} record
 * @returns 
 */
function addMealToCart(record) {
    return {
        type: ADD_MEAL_TO_CART,
        record
    }
}


/**
 * 
 * @param {object} record
 * @returns 
 */
function removeMealFromCart(record) {
    return {
        type: REMOVE_MEAL_FROM_CART,
        record
    }
}


/**
 * 
 * @param {Array} records
 * @returns 
 */
function placeOrder(records) {
    return {
        type: PLACE_ORDER,
        records
    }
}

/**
 * 
 * @param {object} record
 * @param {string} success
 * @returns 
 */
function placeOrderSuccess(record, success) {
    return {
        type: PLACE_ORDER_SUCCESS,
        record,
        success
    }
}

/**
 * 
 * @param {string} error
 * @returns 
 */
function placeOrderError(error) {
    return {
        type: PLACE_ORDER_SUCCESS,
        error
    }
}



export {
    loadMealCategories,
    loadMealCategoriesSuccess,
    loadMealCategoriesError,
    loadMealCategory,
    loadMealCategorySuccess,
    loadMealCategoryError,
    loadMealDetails,
    loadMealDetailsSuccess,
    loadMealDetailsError,
    addMealToCart,
    removeMealFromCart,
    placeOrder,
    placeOrderSuccess,
    placeOrderError
}