TrelloClone.Views.BoardNew = Backbone.View.extend({
  template: JST['board_new'],

  events: {
    "click button.create": "createBoard",
    "click button.cancel": "cancel"
  },

  tagName: 'form',

  render: function () {
    this.$el.html(this.template({board: this.model}));

    return this;
  },

  createBoard: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();

    this.model.save(data, {
      success:function () {
        this.collection.add(this.model);
        Backbone.history.navigate(
          '#/boards/' + this.model.id,
          {trigger: true}
        );
      }.bind(this)
    });
  },

  cancel: function (event) {
    event.preventDefault();
    Backbone.history.navigate(
      '#',
      {trigger: true}
    );
  }
});
