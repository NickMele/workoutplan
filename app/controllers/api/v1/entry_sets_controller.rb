class Api::V1::EntrySetsController < ApplicationController
  before_action :set_entry_set, only: [:show, :update, :destroy]
  respond_to :json

  # GET /entry_sets
  def index
    respond_with EntrySet.all
  end

  # GET /entry_sets/1
  def show
    respond_with @entry_set
  end

  # POST /entry_sets
  def create
    @entry_set = EntrySet.new(entry_set_params)

    if @entry_set.save
      respond_with @entry_set, status: :created, location: [:api, :v1, @entry_set]
    else
      render json: { errors: @entry_set.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /entry_sets/1
  def update
    if @entry_set.update(entry_set_params)
      respond_with @entry_set, status: :ok, location: [:api, :v1, @entry_set]
    else
      render json: { errors: @entry_set.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /entry_sets/1
  def destroy
    @entry_set.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_entry_set
    @entry_set = EntrySet.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def entry_set_params
    params.require(:entry_set).permit(:set_number, :weight, :reps)
  end
end
