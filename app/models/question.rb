class Question < ApplicationRecord
    validates :title, :body, presence: true
    
    belongs_to :user

    has_many :answers

    has_many :votes

end
