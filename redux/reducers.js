const initialSettings = {
	page: 0,
	name: "",
	img: "",
	items: []
}

export function Settings(state=initialSettings, action){
	var obj = Object.assign({}, state);
	
	switch(action.type){
		case "CHANGE_PROFILE":
			obj.name = action.name;
			obj.img = action.img;
			return obj;
		
		case "CHANGE_PAGE":
			obj.page = action.page;
			return obj;
			
		case "CHANGE_ITEMS":
			obj.items = action.items;
			return obj;
			
		default:
			return state;
	}
}