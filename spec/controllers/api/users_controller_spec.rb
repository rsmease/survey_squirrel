require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe '#create' do
    context 'with a normal user' do
      before { post :create, params: { user: attributes_for(:user) } }
      it { should respond_with(200) }
      it { should set_session }
    end

    context 'with a user that has no password' do
      before { post :create, params: { user: attributes_for(:user, password: "") } }
      it { should respond_with(422) }
      it { should_not set_session }
    end
  end
end
