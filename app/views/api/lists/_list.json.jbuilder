json.extract! list, :title, :id, :ord

json.cards do
  json.array! list.cards, :title, :id, :list_id, :ord
end
