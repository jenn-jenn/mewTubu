class User < ApplicationRecord
    validates :username, :email, :pw_digest, presence: true
    validates :email, :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    before_validation :ensure_session_token


    # has_many :likes
    # has_many :videos
    # has_many :comments
    
    # SPIRE
    attr_reader :password

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password) 
        @password = password
        self.pw_digest = BCrypt::Password.create(password)
    end

    def is_password?(password) 
        BCrypt::Password.new(self.pw_digest).is_password?(password)
    end 

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
