// Modules imports
import { combineReducers } from 'redux'
import user from './modules/user'
import posts from './modules/posts'

// Export reducer
export default combineReducers({
    user: user,
    posts: posts,
});