class Comment < ApplicationRecord
    validates :body, :author_id, :video_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video
end
