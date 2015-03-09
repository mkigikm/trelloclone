json.extract! card, :title, :id, :list_id, :ord, :description

json.items do
  json.array! card.items, :title
end
