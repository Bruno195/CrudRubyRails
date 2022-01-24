module Api
  
class CargosController < ApplicationController
  
  protect_from_forgery with: :null_session
  # GET /cargos or /cargos.json
  
  def index 
    cargos = Cargo.all
    render json: CargoSerializer.new(cargos).serialized_json

  end



 def create
    cargo = Cargo.new(cargo_params)

    if cargo.save
      render json: CargoSerializer.new(cargo).serialized_json
    else
      render json: {error: cargo.errors.messages}, status: 422 
    end
  end

  def destroy
    cargo = Cargo.find(params[:id])

    if cargo.destroy
      head :no_content
    else
      render json: {error: cargo.errors.messages}, status: 422 
    end
  end



  private 
    # Use callbacks to share common setup or constraints between actions.
    def set_cargo
      @cargo = Cargo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cargo_params
      params.require(:cargo).permit(:descricao, :atividade, :fornecedor_id)
    end
end
end