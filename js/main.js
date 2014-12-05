var Person = Backbone.Model.extend({
	defaults: {
	name:'firstname mi lastname',
	title:'president',
	phone:'888-888-8100',
	},


	
	
work:function(){
	return this.get('name') + ' is working.';
	}
});


var Firm = Backbone.Model.extend({
	defaults: {
	firm: 'Default Firm',
	id:'1001',
	size:'1',
	address:'100 Main Street',
	city:'Minneapolis',
	state:'MN',
	zip:'55403',	
	foundation_income:'10000',
	foundation_expenses:'10000',
	},
});



var Contact = Backbone.Model.extend({
	defaults: {
		photo: "/img/placeholder.png"
	}
});


var Directory = Backbone.Collection.extend ({
	model: Contact
});


//views model 
var ContactView = Backbone.View.extend({
	tagName: "article",
	className: "contact-container",
	template: $("#contactTemplate").html(),
	
	render: function() {
		var tmpl = _.template(this.template);
		
		this.$el.html(tmpl(this.model.toJSON()));
		return this;
	}
});


var DirectoryView = Backbone.View.extend({
	el: $("#contacts"),
	
	initialize: function () {
		this.collection = new Directory(contacts);
		this.render();
	},
	
	render: function () {
		var that = this; 
		_.each(this.collection.models, function (item) {
			that.renderContact(item);
		}, this);
	},
	
	renderContact: function (item) {
		var contactView = new ContactView({
			model: item
		});
		this.$el.append(contactView.render().el);
	},

});






