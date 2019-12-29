class RemoveIndexFromLikesDislikes < ActiveRecord::Migration[5.2]
  def change
    remove_index :dislikes, name: :index_dislikes_on_user_id
    remove_index :likes, name: :index_likes_on_user_id
  end
end
