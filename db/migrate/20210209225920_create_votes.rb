class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.boolean :type, null:false
      t.integer :username, null:false
      t.integer :answer_id, null:false
      
      t.timestamps
    end
  end
end
