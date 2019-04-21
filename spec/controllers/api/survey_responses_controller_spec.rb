require 'rails_helper'

RSpec.describe Api::SurveyResponsesController, type: :controller do
  describe '#create' do
    context 'when submitting a response' do
      before do
        post :create, params: {
          survey_response: attributes_for(:survey_response)
        }
      end
      it { should respond_with(200) }
      it { should render_template('api/surveys/show') }
    end
  end
end
