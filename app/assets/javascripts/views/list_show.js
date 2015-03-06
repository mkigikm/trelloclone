TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['list_show'],

  render: function () {
    this.$el.html(this.template({list: this.model}));
    return this;
  }
});
