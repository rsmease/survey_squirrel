require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'POST #create' do
    context 'with a normal user' do
      before { post :create, params: { user: attributes_for(:user) } }
      it { should respond_with(404) }
    end
  end
end
