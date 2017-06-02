class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :current_score
      t.string :board
      t.references :user, index: true

      t.timestamps
    end
  end
end
