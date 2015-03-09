TrelloClone.Views.CardModal = Backbone.View.extend({
  className: 'card-modal',

  template: JST['card_modal'],

  render: function () {
    this.$el.html(this.template({card: this.model}));
    return this;
  }
})
