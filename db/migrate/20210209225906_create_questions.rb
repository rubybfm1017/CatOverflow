class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :name, null:false
      t.text :body, null:false
      t.integer :user_id, null:false
      
      t.timestamps
    end
  end
end
