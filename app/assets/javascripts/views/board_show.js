TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['board_show'],

  events: {
    "click .list-add > a": "toggleAddList",
    "click .list-add .cancel": "toggleAddList",
    "click .list-add .save": "addList"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.render);
  },

  render: function () {
    this.removeLists();
    this.$el.html(this.template({board: this.model}));
    this.$board = this.$el.find('.board-lists');

    this.renderLists();

    return this;
  },

  renderLists: function () {
    var listShow;

    this.model.lists().each(function (list) {
      listShow = new TrelloClone.Views.ListShow({
        model: list
      });

      this.listShows.push(listShow.render());
    }, this);

    this.$board.prepend(_.pluck(this.listShows, '$el'));

    this.makeListsSortable();
  },

  makeListsSortable: function () {
    this.$el.find('.board-lists').sortable({
      stop: this.moveList.bind(this)
    });

    $('.list-cards').sortable({
      connectWith: ".list-cards",
      stop: this.moveCard.bind(this)
    }).disableSelection();
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
  },

  moveList: function (event, ui) {
    console.log('moved a list')
    console.log(ui.position)
  },

  moveCard: function (event, ui) {
    console.log('moved a card')
    console.log(ui.position)
  },

  addListForm: function (event) {
    event.preventDefault();
    // this.$el.
  },

  toggleAddList: function (event) {
    event.preventDefault();
    this.$el.find('.list-add > *').toggleClass("hidden");
  },

  addList: function (event) {
    this.toggleAddList(event);

    var newList = new TrelloClone.Models.List({
      board_id: this.model.id,
      title: this.$el.find('.list-add input').val()
    });

    this.model.lists().add(newList);
    this.makeListsSortable();
    newList.save();
  }
});
