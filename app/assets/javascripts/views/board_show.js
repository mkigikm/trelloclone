TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['board_show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var listShow;

    this.removeLists();
    this.$el.html(this.template({board: this.model}));

    this.model.lists().each(function (list) {
      listShow = new TrelloClone.Views.ListShow({
        model: list
      });

      this.listShows.push(listShow);
      this.$el.find('.board-lists').append(listShow.render().$el);
    }, this);

    this.$el.find('.board-lists').sortable();
    $('.list-cards').sortable({
      connectWith: ".list-cards"
    }).disableSelection();

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
