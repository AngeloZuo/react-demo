const initializeState = {};

export default function CustomerSearchReducer(state = initializeState, action) {
    try {
        const newState = Object.assign({}, state);
        switch(action.type) {
            case 'CUSTOMER_SEARCH':
                newState['customerSearchType'] = action.type;
                newState['customersDataResult'] = action.searchList;
                return newState;
            case 'CUSTOMER_DETAIL_SEARCH':
                newState['customerSearchType'] = action.type;
                newState['customersDetailResult'] = action.searchList;
                return newState;
            default:
                return state;
        }
    } catch (error) {
        return state;
    }
}