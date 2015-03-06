TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['board_show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var listView;

    this.removeLists();
    this.$el.html(this.template({board: this.model}));

    this.model.lists().each(function (list) {
      listShow = new TrelloClone.Views.ListShow({model: list});
      this.listShows.push(listShow);
      this.$el.find('.board-lists').append(listShow.render().$el);
    }, this);

    return this;
  },

  removeLists: function () {
    this.listShows && this.listShows.forEach(function (listShow) {
      listShow.remove();
    });

    this.listShows = [];
  },

  remove: function () {
    this.removeLists();
    this.$el.empty();
  }
});
