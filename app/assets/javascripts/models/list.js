TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: 'api/lists',
  
  cards: function () {
    this._cards || (this._cards = new TrelloClone.Collections.Cards());
    return this._cards;
  },

  initialize: function (options) {
    if (options.cards) {
      options.cards.forEach(function (card) {
        if (!this.cards().get(card.id)) {
          this.cards().add(new TrelloClone.Models.Card(card), {merge: true});
        }
      }, this);

      delete options.cards;
    }
  }
});
