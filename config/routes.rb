Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :show, :create, :update, :destroy] do
      resources :votes
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
