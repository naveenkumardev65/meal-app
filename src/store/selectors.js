function selectors(state) {
    const stateReducer = state && state?.mealsReducer || false;
    return {
        selectMealCategories: () => {
            return stateReducer?.categories || [];
        },
        selectLoading: () => {
            return stateReducer?.loading || false;
        },
        selectError: () => {
            return stateReducer?.error || false;
        },
        selectSuccess: () => {
            return stateReducer?.success || false;
        },
        selectMealCategory: () => {
            return stateReducer?.records || [];
        },
        selectMealDetails: () => {
            return stateReducer?.record || {};
        },
        selectCart: () => {
            return stateReducer?.cart || [];
        },
        selectOrders: () => {
            return stateReducer?.orders || [];
        },
    }
}

export default selectors;

