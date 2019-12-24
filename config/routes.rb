Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do  
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index] do
      resources :videos, only: [:create]
      
      # likes 
    end
    resources :videos, only: [:index, :show] do 
      resources :comments, only: [:create, :destroy, :show, :index]
      resources :likes, only: [:create, :destroy]
      resources :dislikes, only: [:create, :destroy]
    end
    # search
  end
end
