class CreateFornecedores < ActiveRecord::Migration[6.1]
  def change
    create_table :fornecedores do |t|
      t.string :nome
      t.string :sobrenome
      t.string :dataDeNascimento
      t.string :dataDeAdmissao
      t.decimal :salario

      t.timestamps
    end
  end
end
