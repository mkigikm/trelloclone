TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: 'api/items',

  items: function () {
    this._items || (this._items = new TrelloClone.Collections.Items());
    return this._items;
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
