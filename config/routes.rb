Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home_page#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :show, :create, :update, :destroy] do
      resources :answers, only: [:index, :show, :create]

    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
