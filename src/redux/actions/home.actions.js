export const TEST_ACTION = "TEST ACTION";

export const testAction = () => dispatch => {
    return dispatch({
        type: TEST_ACTION,
        payload: "after test",
    })
}