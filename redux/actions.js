export function ChangeProfile(name, img){
	return {
		type:"CHANGE_PROFILE",
		profile:profile
	}
}

export function ChangePage(page){
	return {
		type:"CHANGE_PAGE",
		page:page
	}
}

export function ChangeItems(items){
	return {
		type:"CHANGE_ITEMS",
		items:items
	}
}