Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'api/surveys#index'

  namespace :api, defaults: { format: JSON } do
    resources :users, only: %i[create show]
    resource :session, only: %i[new create destroy]

    resources :surveys, only: %i[index create show]
    resources :survey_responses, only: %i[create]
  end
end
