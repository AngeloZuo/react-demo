const initializeState = {};

export default function CustomerSearchReducer(state = initializeState, action) {
    try {
        const newState = Object.assign({}, state);
        switch(action.type) {
            case 'test':
                newState[action.containerKey] = action.state;
                return newState;
            default:
                return state;
        }
    } catch (error) {
        return state;
    }
}