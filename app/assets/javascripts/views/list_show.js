TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['list_show'],

  tagName: 'li',

  render: function () {
    this.$el.html(this.template({list: this.model}));
    return this;
  }
});
