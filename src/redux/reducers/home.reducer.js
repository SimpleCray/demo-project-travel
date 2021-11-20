import { TEST_ACTION } from "redux/actions/home.actions";

const initialState = {
    test: 'before test',
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                test: action.payload,
            };
        default:
            return state;
    }
};

export default homeReducer;