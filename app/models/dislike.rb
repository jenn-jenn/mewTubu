class Dislike < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video
end
