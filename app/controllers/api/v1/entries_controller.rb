class Api::V1::EntriesController < ApplicationController
  before_action :set_entry, only: [:show, :update, :destroy]
  respond_to :json

  # GET /entries
  def index
    respond_with Entry.all
  end

  # GET /entries/1
  def show
    respond_with @entry
  end

  # POST /entries
  def create
    @entry = Entry.new(entry_params)

    if @entry.save
      respond_with @entry, status: :created, location: [:api, :v1, @entry]
    else
      render json: { errors: @entry.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /entries/1
  def update
    if @entry.update(entry_params)
      respond_with @entry, status: :ok, location: [:api, :v1, @entry]
    else
      render json: { errors: @entry.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /entries/1
  def destroy
    @entry.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_entry
    @entry = Entry.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def entry_params
    params.require(:entry).permit(:length)
  end
end
