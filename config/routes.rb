Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do  
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :videos, only: [:create]
      # likes
    end
    resources :videos, only: [:index, :show]
    # search
  end
end
