json.extract! card, :title, :id, :list_id, :ord, :description

json.items do
  json.partial! "api/cards/card", collection: @board.lists, as: :list
  json.array! card.items, :title
end
