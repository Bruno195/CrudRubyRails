class FornecedorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :nome, :sobrenome, :dataDeNascimento, :dataDeAdmissao, :salario
  has_one :cargo
end
