var Customer = {
	Name:ko.obervable()
};

var Order = {
	Customer:ko.obervable(),
	PizzaList:ko.obervableArray()
};

var Pizza = {
	Size:ko.observable(),
	Type:ko.observable()	 
};
