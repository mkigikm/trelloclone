# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.extract! @board, :title, :id

json.lists do
  json.partial! "api/lists/list", collection: @board.lists, as: :list
end
