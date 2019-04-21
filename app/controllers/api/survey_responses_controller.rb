class Api::SurveyResponsesController < ApplicationController
  def create
    @response = SurveyReponse.create(response_params)

    if @response.save
      @survey = Survey.find(response_params[:survey_id])
      render 'api/surveys/show'
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  private

  def survey_response_params
    params.require(:survey_response).permit(:response, :survey_id)
  end
end
