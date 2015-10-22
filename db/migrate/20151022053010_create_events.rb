class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.datetime :start_date
      t.datetime :end_time
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps null: false
    end
  end
end
