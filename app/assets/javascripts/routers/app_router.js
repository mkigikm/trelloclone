TrelloClone.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "boards/new": "new",
    "boards/:id": "show"
  },

  initialize: function () {
    this.boards = new TrelloClone.Collections.Boards();
  },

  index: function () {
    var indexView;

    this.boards.fetch();
    indexView = new TrelloClone.Views.BoardIndex({
      collection: this.boards
    });

    this._swapViews(indexView);
  },

  show: function (id) {
    var showView, board;

    board = this.boards.getOrFetch(id);
    board.fetch();
    showView = new TrelloClone.Views.BoardShow({
      model: board
    });

    this._swapViews(showView);
  },

  new: function () {
    var newView, board;

    board = new TrelloClone.Models.Board();
    newView = new TrelloClone.Views.BoardNew({
      model: board, collection: this.boards
    });

    this._swapViews(newView);
  },

  _swapViews: function (newView) {
    this._view && this._view.remove();
    this._view = newView;
    $('#main').html(this._view.render().$el);
  }
});
