TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: 'api/cards',

  items: function () {
    this._items || (this._items = new TrelloClone.Collections.Items());
    return this._items;
  },

  initialize: function (options) {
    if (options.items) {
      options.items.forEach(function (item) {
        if (!this.items().get(item.id)) {
          this.items().add(new TrelloClone.Models.Item(item), {merge: true});
        }
      }, this);

      delete options.items;
    }
  }
});
