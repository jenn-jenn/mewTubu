require 'aws-sdk-s3'

class Video < ApplicationRecord
    # for Windows with SSL certification problems
    Aws.use_bundled_cert!
    
    validates :title, :description, :author_id, presence: true

    belongs_to :author, 
        foreign_key: :author_id,
        class_name: :User
        
    # has_many :likes
    # has_many :comments

    has_one_attached :clip

    
end
