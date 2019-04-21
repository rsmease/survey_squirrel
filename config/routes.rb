Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root_to "api/surveys/index"

  namespace :api, defaults: {format: JSON} do
    resources :users, only: [:create, :show]
    resource :session, only: [ :new, :create, :destroy ]

    resources :surveys, only: [:index, :create, :show]
  end
end
