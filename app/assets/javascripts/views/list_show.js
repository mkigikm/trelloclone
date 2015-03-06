TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['list_show'],

  events: {
    "click .card-add > a": "toggleAddCard",
    "click .card-add .cancel": "toggleAddCard",
  },

  tagName: 'li',

  render: function () {
    var cardView;

    this.removeCards();
    this.$el.html(this.template({list: this.model}));

    this.model.cards().each(function (card) {
      cardShow = new TrelloClone.Views.CardShow({
        model: card
      });

      this.cardShows.push(cardShow);
      this.$el.find('.list-cards').append(cardShow.render().$el);
    }, this);

    return this;
  },

  removeCards: function () {
    this.cardShows && this.cardShows.forEach(function (cardShow) {
      cardShow.remove();
    });

    this.cardShows = [];
  },

  remove: function () {
    this.removeCards();
    this.$el.empty();
  },

  toggleAddCard: function (event) {
    event.preventDefault();
    this.$el.find('.card-add > *').toggleClass("hidden");
  }
});
