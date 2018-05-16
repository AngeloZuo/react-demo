const initializeState = {};

export default function CustomerSearchReducer(state = initializeState, action) {
    try {
        const newState = Object.assign({}, state);
        switch(action.type) {
            case 'CUSTOMER_SEARCH':
                newState['customersDataResult'] = action.searchList;
                return newState;
            default:
                return state;
        }
    } catch (error) {
        return state;
    }
}