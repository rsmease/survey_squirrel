class Api::SurveyResponsesController < ApplicationController
  def create
    @survey_response = SurveyResponse.create(survey_response_params)

    if @survey_response.save
      @survey = Survey.find(survey_response_params[:survey_id])
      render 'api/surveys/show'
    else
      render json: @survey_response.errors.full_messages, status: 422
    end
  end

  private

  def survey_response_params
    params.require(:survey_response).permit(:response, :survey_id)
  end
end
