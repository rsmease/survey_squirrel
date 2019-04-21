require 'rails_helper'

RSpec.describe SurveyResponse, type: :model do
  before(:all) do
    @survey_response = create(:survey_response)
  end

  it { is_expected.to validate_presence_of(:survey_id) }
  it { should validate_inclusion_of(:response).in_array([true, false]) }
  it { should belong_to(:survey).dependent(:destroy) }
end
