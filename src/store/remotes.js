/**
 * 
 * Remotes
 * 
 */


import api from "../utils/api";

function loadMealCategories() {
    return api.get(`/v1/1/categories.php`).then(res => res.data).catch(err => Promise.reject(err));
}


function loadFilterMealCategory(mealType) {
    return api.get(`/v1/1/filter.php?c=${mealType || 'seafood'}`).then(res => res.data).catch(err => Promise.reject(err));
}

function mealDetails(mealId) {
    return api.get(`/v1/1/lookup.php?i=${mealId}`).then(res => res.data).catch(err => Promise.reject(err));
}


export {
    loadMealCategories,
    loadFilterMealCategory,
    mealDetails
}



