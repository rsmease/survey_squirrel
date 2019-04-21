require 'rails_helper'

RSpec.describe Survey, type: :model do
  before(:all) do
    @survey = create(:survey_with_responses)
  end

  it { is_expected.to validate_presence_of(:question) }
  it { is_expected.not_to validate_presence_of(:surveyor_id) }
  it { should belong_to(:surveyor).dependent(:destroy) }
  it { should have_many(:responses) }
end
