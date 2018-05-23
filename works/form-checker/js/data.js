var	data = {
	register_name: "^[A-Z][a-z]{1,50}( [A-Z][a-z]{1,50})?( [A-Z]\\.{1,3})?( [A-Z][a-z]{1,50})?$",
	register_username: "^[\\w]{3,20}$",
	register_email: "^[a-z0-9\\._\\-]{1,255}@[a-z0-9\\-]{1,64}(\\.[a-z]{2,20}){1,2}$",
	register_password: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$"
};