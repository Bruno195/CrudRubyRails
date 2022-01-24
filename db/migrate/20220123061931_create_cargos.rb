class CreateCargos < ActiveRecord::Migration[6.1]
  def change
    create_table :cargos do |t|
      t.string :descricao
      t.string :atividade
      t.belongs_to :fornecedor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
