TrelloClone.Views.CardShow = Backbone.View.extend({
  tagName: 'li',

  template: JST['card_show'],

  render: function () {
    this.$el.html(this.template({card: this.model}));
    return this;
  }
});
