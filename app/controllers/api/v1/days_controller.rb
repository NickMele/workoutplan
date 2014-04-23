class Api::V1::DaysController < ApplicationController
  respond_to :json

  # GET /days
  def index
    @days = []
    @routines = Routine.all
    
    # loop through eah day in a year
    (1..365).each do |d|
      d = Date.ordinal(Time.now.year, d.to_i)
      
      # get data for this day
      day = get_day(d)
      
      # push this week into our weeks array
      @days.push(day)
    end
    
    @response = {
      :days => @days
    }
    respond_with merged_response
  end

  # GET /days/1
  def show
    d = Date.ordinal(Time.now.year, params[:id].to_i)
    @routines = Routine.where("'#{d.strftime('%w')}' = ANY (days)")
    @day = get_day(d)
    
    @response = {
      :day => @day
    }
    
    respond_with merged_response
  end

  private
  
  # merges our custom response with the serialized routines data which contains associations
  def merged_response
    @response.merge(@routines.active_model_serializer.new(@routines, {:root=>'routines'}).as_json)
  end

  # gets info for the day
  def get_day(d)
    day = {
      :id => d.strftime('%-j'),
      :date => d.to_s,
      :day_of_week => d.strftime('%w')
    }
    
    # select the routines that will occurr on this day
    routines = @routines.select { |routine| routine.days.include? day[:day_of_week] }
    day[:routines] = routines.map { |x| x[:id] }
    
    # return this hash
    day
  end
end
