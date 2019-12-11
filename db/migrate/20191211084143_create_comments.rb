class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :comments, :video_id
  end
end
