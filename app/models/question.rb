class Question < ApplicationRecord
    validates :name, :body, presence: true
    
    belongs_to :user

    has_many :answers

    has_many :votes

end
