TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',

  lists: function () {
    this._lists || (this._lists = new TrelloClone.Collections.Lists());
    return this._lists;
  },

  parse: function (payload) {
    if (payload.lists) {
      payload.lists.forEach(function (list) {
        if (!this.lists().get(list.id)) {
          this.lists().add(new TrelloClone.Models.List(list), {merge: true});
        }
      }, this);

      delete payload.lists;
    }

    return payload;
  }
});
