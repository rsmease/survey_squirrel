class Api::SurveysController < ApplicationController
  def index
    @surveys = Survey.all
    render 'api/surveys/index'
  end

  def create
    @survey = Survey.create(survey_params)
    @current_user && @survey[:surveyor_id] = @current_user.id

    if @survey.save
      render 'api/surveys/show'
    else
      render json: @survey.errors.full_messages, status: 422
    end
  end

  def show
    @survey = Survey.find(params[:id])
    render 'api/surveys/show'
  end

  private

  def survey_params
    params.require(:survey).permit(:question)
  end
end
