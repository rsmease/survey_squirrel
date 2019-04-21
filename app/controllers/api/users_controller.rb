class Api::UsersController < ApplicationController
  def index
    render status: 404
  end

  def create
    @user = User.create(user_params)

    if @user.save
      login(@user)
      #not sure what this should be just yet
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def delete
    render status: 404
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
