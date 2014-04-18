class Api::V1::LogsController < ApplicationController
  before_action :set_log, only: [:show, :update, :destroy]
  respond_to :json

  # GET /logs
  def index
    respond_with Log.all
  end

  # GET /logs/1
  def show
    respond_with @log
  end

  # POST /logs
  def create
    @log = Log.new(log_params)

    if @log.save
      respond_with @log, status: :created, location: [:api, :v1, @log]
    else
      render json: { errors: @log.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /logs/1
  def update
    if @log.update(log_params)
      respond_with @log, status: :ok, location: [:api, :v1, @log]
    else
      render json: { errors: @log.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /logs/1
  def destroy
    @log.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_log
    @log = Log.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def log_params
    params.require(:log).permit(:date)
  end
end
