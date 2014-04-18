class Api::V1::WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :update, :destroy]
  respond_to :json

  # GET /workouts
  def index
    respond_with Workout.all
  end

  # GET /workouts/1
  def show
    respond_with @workout
  end

  # POST /workouts
  def create
    params = workout_params
    
    # process any entries that were passed
    unless params[:entries].nil?
      params.entries = Workout.find(params[:entries])
    end
    
    @workout = Workout.new(params)

    if @workout.save
      respond_with @workout, status: :created, location: [:api, :v1, @workout]
    else
      render json: { errors: @workout.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /workouts/1
  def update
    params = workout_params
    
    # process any entries that were passed
    unless params[:entries].nil?
      params.entries = Workout.find(params[:entries])
    end
    
    if @workout.update(params)
      respond_with @workout, status: :ok, location: [:api, :v1, @workout]
    else
      render json: { errors: @workout.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /workouts/1
  def destroy
    @workout.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_workout
    @workout = Workout.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def workout_params
    params.require(:workout).permit(:name,
      :entries => [:id, :length])
  end
end
