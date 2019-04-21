require "rails_helper"

RSpec.describe User, type: :model do
  before(:all) do
    @user = create(:user)
  end

  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_length_of(:password) }
  it { is_expected.to validate_presence_of(:password_digest) }
  it { is_expected.to validate_presence_of(:session_token) }

  it { is_expected.to validate_uniqueness_of(:email) }
end
