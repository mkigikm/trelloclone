TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['list_show'],

  events: {
    "click .card-add > a": "toggleAddCard",
    "click .card-add .cancel": "toggleAddCard",
    "click .card-add .save": "addCard"
  },

  initialize: function () {
    this.listenTo(this.model.cards(), "add", this.render);
  },

  tagName: 'li',

  className: 'board-list',

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
    this.$el.data('list', this.model);
    this.$el.find('.list-cards').data('list', this.model);

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
  },

  addCard: function (event) {
    this.toggleAddCard(event);

    var newCard = new TrelloClone.Models.Card({
      list_id: this.model.id,
      title: this.$el.find('.card-add input').val(),
      ord: _.max(this.model.cards().pluck('ord')) + 1
    });

    this.model.cards().add(newCard);
    newCard.save();
  }
});
