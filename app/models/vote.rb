class Vote < ApplicationRecord
    validates :user_id, presence:true
    validates :answer_id, presence:true

    belongs_to :answer 

    belongs_to :user
end
