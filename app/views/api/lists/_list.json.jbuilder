json.extract! list, :title, :id

json.cards do
  json.array! list.cards, :title, :id, :list_id
end
