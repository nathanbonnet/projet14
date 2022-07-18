export const reducer = (state = "", action) => {
    if (action.type === "CREATE_USER") {
      return {
        ...state = action
      };
    }
    if (action.type === "CANCEL") {
        return {
          ...state = action
        };
    }
    return state
}