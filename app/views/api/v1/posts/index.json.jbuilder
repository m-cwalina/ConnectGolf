json.array! @posts do |post|
  json.extract! post, :id, :content, :picture
end
