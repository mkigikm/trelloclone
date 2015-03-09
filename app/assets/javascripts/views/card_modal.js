TrelloClone.Views.CardModal = Backbone.View.extend({
  className: 'card-modal',

  events: {
    "click .card-model-close": "removeModal",
    "click .item-add > a": "toggleAddItem",
    "click .item-add .cancel": "toggleAddItem",
    "click .item-add .save": "addItem",
  },

  template: JST['card_modal'],

  initialize: function () {
    this.listenTo(this.model.items(), "add", this.render);
  },

  render: function () {
    var itemShow;

    this.removeItems();
    this.$el.html(this.template({card: this.model}));
    this.model.items().each(function (item) {
      itemShow = new TrelloClone.Views.ItemShow({model: item});

      this.itemShows.push(itemShow.render());
    }, this);
    this.$items = this.$el.find('.items');
    this.$items.prepend(_.pluck(this.itemShows, '$el'));

    return this;
  },

  removeItems: function () {
    this.itemShows && this.itemShows.forEach(function (itemShow) {
      itemShow.remove();
    });

    this.itemShows = [];
  },

  removeModal: function (event) {
    event.preventDefault();
    this.$el.detach();
    $('.overlay').toggleClass('hidden');
    this.remove();
  },

  toggleAddItem: function (event) {
    event.preventDefault();
    this.$el.find('.item-add > *').toggleClass("hidden");
  },

  addItem: function (event) {
    this.toggleAddItem(event);

    var newItem = new TrelloClone.Models.Item({
      card_id: this.model.id,
      title: this.$el.find('.item-add input').val()
    });

    this.model.items().add(newItem);
    newItem.save();
  }
})
