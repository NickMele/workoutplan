class Api::V1::WeeksController < ApplicationController
  # before_action :set_week, only: [:show, :update, :destroy]
  respond_to :json

  # GET /weeks
  def index
    @weeks = []
    @days = []
    @routines = Routine.all
    
    # loop through eah week in a year
    (1..52).each do |w|
      # get data for this week
      week = get_week(w)
      
      # push this week into our weeks array
      @weeks.push(week)
    end
    
    @response = {
      :weeks => @weeks,
      :days => @days
    }
    respond_with merged_response
  end

  # GET /weeks/1
  def show
    @days = []
    @routines = Routine.all
    @week = get_week(params[:id])
    
    @response = {
      :week => @week,
      :days => @days
    }
    
    respond_with merged_response
  end

  private
  
  # merges our custom response with the serialized routines data which contains associations
  def merged_response
    @response.merge(@routines.active_model_serializer.new(@routines, {:root=>'routines'}).as_json)
  end

  # gets info for the week including start,end,days
  def get_week(w)
    week = {
      :id => w.to_s,
      :start_date => Date.commercial(Time.now.year, w.to_i, 1),
      :end_date => Date.commercial(Time.now.year, w.to_i, 7),
      :days => []
    }
    
    # get the days for this week
    get_days_of_week(week)
    
    # return this hash
    week
  end
  
  def get_days_of_week(week)
    # loop through the days in this week
    (week[:start_date]..week[:end_date]).each do |d|
      # create hash for this day
      day = {
        :id => d.strftime('%-j'),
        :date => d.to_s,
        :day_of_week => d.strftime('%w')
      }
      # select the routines that will occurr on this day
      routines = @routines.select { |routine| routine.days.include? day[:day_of_week] }
      day[:routines] = routines.map { |x| x[:id] }
      
      # add this hash to the array of days for the year
      @days.push(day)
      
      # add this day to the array of days in this week
      week[:days].push(day[:id])
    end
  end
end
