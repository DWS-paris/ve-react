// Modules imports
import { combineReducers } from 'redux'
import posts from './modules/posts'

// Export reducer
export default combineReducers({
    posts: posts
});