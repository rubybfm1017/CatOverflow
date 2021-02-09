class Vote < ApplicationRecord
    validates :username, presence:true
    validates :type, inclusion: {in: [true, false]}

    belongs_to :answer 

    belongs_to :user
end
