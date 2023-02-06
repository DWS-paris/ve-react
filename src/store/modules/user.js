// Define and export
export default function( state = null, action ){
    // Check action type
    switch( action.type ){
        case 'LOGIN-USER':
            return state = action.value;

        case 'LOGOUT-USER':
            return state = null;

        default:
            return state = null;
    }
}