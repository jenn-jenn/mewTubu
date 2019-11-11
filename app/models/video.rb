class Video < ApplicationRecord
    validates :title, :description, :author_id, presence: true

    belongs_to :author, 
        foreign_key: :author_id,
        class_name: :User
        
    # has_many :likes
    # has_many :comments

    has_one_attached :clip
end
