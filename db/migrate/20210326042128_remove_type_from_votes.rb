class RemoveTypeFromVotes < ActiveRecord::Migration[5.2]
  def change
    remove_column :votes, :type
  end
end
