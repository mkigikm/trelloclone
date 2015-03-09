json.extract! list, :title, :id, :ord

json.cards do
  json.partial! "api/cards/card", collection: list.cards, as: :card
end
