class CreateBurgers < ActiveRecord::Migration
  def change
    create_table :burgers do |t|
      t.string :patty
      t.string :vegetable
      t.string :sauce
      t.string :bread

      t.timestamps
    end
  end
end
