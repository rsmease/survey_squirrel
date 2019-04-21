require 'rails_helper'

RSpec.describe Api::SurveysController, type: :controller do
  describe '#index' do
    before { get :index }
    it { should respond_with(200) }
    it { should render_template('api/surveys/index') }
  end

  describe '#create' do
    context 'when creating a valid survey' do
      before { post :create, params: { survey: attributes_for(:survey) } }
      it { should respond_with(200) }
      it { should render_template('api/surveys/show') }
    end

    context 'when creating an ivalid survey with no question' do
      before do
        post :create, params: {
          survey: attributes_for(:survey, question: '')
        }
      end

      it { should respond_with(422) }
      it { should_not render_template('api/surveys/index') }
    end
  end
end
