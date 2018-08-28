export default (state = null, action) => {
    switch(action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
}

// jika user di action index pilih  select library maka -> return action.payload;