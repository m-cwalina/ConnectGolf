Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/user' => 'dashboards#user_dashboard', as: :user_dashboard
  end
  root to: 'pages#home', as: :home
  get "/about", to: "pages#about"
  get "/users/:id", to: 'users#index'
  get '/friendships/friends', to: 'friendships#index'
  get '/friendships/friends/:id', to: 'friendships#index'
  get '/friendships/pending_friends', to: 'friendships#index'
  get '/friendships/requested_friends', to: 'friendships#index'
  resources :users, only: %i[index]
  resources :friendships, only: %i[create index update show]
  resources :tee_times, only: %i[index show] do
    resources :bookings, only: %i[new create]
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tee_times, only: %i[index]
      resources :users, only: %i[index show]
      resources :friendships do
        get 'friends', on: :collection, as: :friends
        get 'friends/:id', on: :collection, action: :friend_show
        get 'pending_friends', on: :collection, as: :pending_friends
        get 'requested_friends', on: :collection, as: :requested_friends
      end
    end
  end
end
