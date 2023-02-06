// Define and export
export default function( state = null, action ){
    // Check action type
    switch( action.type ){
        case 'LOAD-POST':
            return state = action.value;

        case 'SINGLE-POST':
            return state = action.value;

        default:
            return state = null;
    }
}