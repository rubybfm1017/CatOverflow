class ChangeVotesColumnName < ActiveRecord::Migration[5.2]
  def change
      rename_column :votes, :username, :user_id
  end
end
