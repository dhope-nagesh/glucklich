
export default function userProfileReducer(state = false, action) {
    switch(action.type) {
        case 'FETCH_USER_PROFILE':
        return action.data
        case 'EDIT_USER_PROFILE':
        return action.data
        default:
            return state;
    }
 }
 
 