const loggedReducer = (state=true,action) => {
	switch(action.type) {
		case 'SIGN_IN' :
			return state=false ;
		default:
			return state;
		 
	}
}
export default loggedReducer;