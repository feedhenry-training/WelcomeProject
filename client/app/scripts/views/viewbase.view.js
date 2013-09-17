/*global App, Backbone*/
App.View.BaseView = Backbone.View.extend({

  render: function(){
    this.navbar = new App.View.NavbarView({title: this.model.get('title'), titleWidth: this.model.get('titleWidth')});
    this.$el.append(this.navbar.render());
    this.$el.append(this.template(this.model.toJSON()));
    return this.$el;
  },

  dataError: function(msg){
    this.$el.find('.response_content').removeClass('alert-success').addClass('alert').addClass('alert-danger').html('Ops, something went wrong (' + msg+ '). Please try again later.');
  }

});