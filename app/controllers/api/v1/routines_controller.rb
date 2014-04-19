class Api::V1::RoutinesController < ApplicationController
  before_action :set_routine, only: [:show, :update, :destroy]
  respond_to :json

  # GET /routines
  def index
    respond_with Routine.all
  end

  # GET /routines/1
  def show
    respond_with @routine
  end

  # POST /routines
  def create
    params = routine_params
    
    # process any workouts that were passed
    unless params[:workouts].nil?
      params[:workouts] = Workout.find(params[:workouts])
    end
    
    # make a new routine
    @routine = Routine.new(params)
    
    if @routine.save
      respond_with @routine, status: :created, location: [:api, :v1, @routine]
    else
      render json: { errors: @routine.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /routines/1
  def update
    params = routine_params
    
    # process any workouts that were passed
    unless params[:workouts].nil?
      params[:workouts] = Workout.find(params[:workouts])
    end
    
    if @routine.update(params)
      respond_with @routine, status: :ok, location: [:api, :v1, @routine]
    else
      render json: { errors: @routine.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /routines/1
  def destroy
    @routine.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_routine
    @routine = Routine.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def routine_params
    params.require(:routine).permit(:name, :days => [], :workouts => [], :logs => [])
  end
end
