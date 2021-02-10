class ChangeColunmName < ActiveRecord::Migration[5.2]
  def change
    rename_column :questions, :name, :title
  end
end
