module Api
class FornecedoresController < ApplicationController
  
  protect_from_forgery with: :null_session
  # GET /fornecedores or /fornecedores.json
  def index
    @fornecedores = Fornecedor.all

   render json: FornecedorSerializer.new(@fornecedores, options).serialized_json
  end

  # GET /fornecedores/1 or /fornecedores/1.json
  def show  
    fornecedor = Fornecedor.find_by(id: params[:id])
    render json: FornecedorSerializer.new(fornecedor, options).serialized_json
  end

  # GET /fornecedores/new
  def new
    @fornecedor = Fornecedor.new
  end


  # POST /fornecedores or /fornecedores.json
  def create
    @fornecedor = Fornecedor.new(fornecedor_params)

    
      if @fornecedor.save
       
        render json: FornecedorSerializer.new(@fornecedores).serialized_json
      else
       
        render json: {error: fornecedor.errors.messages }, status: 422 
      end
    
  end

  # PATCH/PUT /fornecedores/1 or /fornecedores/1.json
  def update
       fornecedor = Fornecedor.find_by(id: params[:id])
      if fornecedor.update(fornecedor_params)
        
        render json: FornecedorSerializer.new(@fornecedores).serialized_json
      else
       
        render json: {error: fornecedor.errors.messages }, status: 422
      end
    
  end

  # DELETE /fornecedores/1 or /fornecedores/1.json
  def destroy
        fornecedor = Fornecedor.find_by(id: params[:id])

      if fornecedor.destroy
        head :no_content 
      else 
        render json: {error: fornecedor.errors.messages }, status: 422
    
  end
end

  

  private
    # Use callbacks to share common setup or constraints between actions.
    

    # Only allow a list of trusted parameters through.
    def fornecedor_params
      params.require(:fornecedor).permit(:nome, :sobrenome, :dataDeNascimento, :dataDeAdmissao, :salario)
    end

    def options 
      @options ||= {include: %i[cargo]}
    end



end
end