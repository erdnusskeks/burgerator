class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :bread
      t.string :beef
      t.string :sauce
      t.string :vegetable

      t.timestamps
    end
  end
end
