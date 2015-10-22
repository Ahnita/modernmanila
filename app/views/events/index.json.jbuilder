json.array!(@events) do |event|
  json.extract! event, :id, :title, :description, :start_date, :end_time, :created_at, :updated_at
  json.url event_url(event, format: :json)
end
