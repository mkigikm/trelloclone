window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    window.router = new TrelloClone.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
