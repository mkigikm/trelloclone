TrelloClone.Views.CardModal = Backbone.View.extend({
  className: 'card-modal',

  events: {
    "click .card-model-close": "removeModal"
  },

  template: JST['card_modal'],

  render: function () {
    this.$el.html(this.template({card: this.model}));
    return this;
  },

  removeModal: function (event) {
    event.preventDefault();
    this.$el.detach();
    $('.overlay').toggleClass('hidden');
    this.remove();
  }
})
