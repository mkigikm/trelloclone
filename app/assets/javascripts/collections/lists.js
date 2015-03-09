TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,

  comparator: function (list0, list1) {
    if (list0.get('ord') === list1.get('ord')) return 0;

    return list0.get('ord') < list1.get('ord') ? -1 : 1;
  }
});
