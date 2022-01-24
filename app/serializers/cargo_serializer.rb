class CargoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :descricao, :atividade, :fornecedor_id
end
