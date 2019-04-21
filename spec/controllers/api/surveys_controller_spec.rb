require 'rails_helper'

RSpec.describe Api::SurveysController, type: :controller do
  describe '#index' do
    before { get :index }
    it { should respond_with(200) }
    it { should render_template('api/surveys/index') }
  end
end
