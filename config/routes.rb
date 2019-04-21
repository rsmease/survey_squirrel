Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: JSON} do
    resources :users, only: [:create, :show]

    resource :session, only: [ :new, :create, :destroy ]
  end
end
