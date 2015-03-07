TrelloClone.Views.ListNew = Backbone.View.extend({
  template: JST['title_new'],

  class: 'list',

  events: {
    "a": "addListForm"
  },

  initialize: function () {
    this.adding = false;
  },

  render: function () {
    if (this.adding) {
      this.$el.html(this.template());
    } else {
      this.$el.html('<a href="#" id="add">Add a list...</a>');
    }

    return this;
  },

  addListForm: function () {
    this.adding = true;
    this.render();
  }
});
