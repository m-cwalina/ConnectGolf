Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/user' => 'pages#user_dashboard', as: :user_dashboard
  end
  root to: 'pages#home', as: :home
  get '/about', to: 'pages#about'
  get '/dashboard', to: 'dashboards#index'
  get '/users/:id', to: 'users#index'

  # All routes for friendships to work with react_router
  get '/friendships/friends', to: 'friendships#index'
  get '/friendships/friends/:id', to: 'friendships#index'
  get '/friendships/pending_friends', to: 'friendships#index'
  get '/friendships/pending_friends/:id', to: 'friendships#index'
  get '/friendships/requested_friends', to: 'friendships#index'
  get '/friendships/requested_friends/:id', to: 'friendships#index'

  # All Routes for dashboard analytics to work with react_router
  get '/dashboard/bookings', to: 'dashboards#index'
  get '/dashboard/bookings/hourly', to: 'dashboards#index'
  get '/dashboard/bookings/daily', to: 'dashboards#index'
  get '/dashboard/bookings/weekly', to: 'dashboards#index'
  get '/dashboard/bookings/monthly', to: 'dashboards#index'
  get '/dashboard/bookings/yearly', to: 'dashboards#index'

  get '/dashboard/teesheet', to: 'dashboards#index'
  get '/dashboard/members', to: 'dashboards#index'

  # Normal routes for rails app
  resources :users, only: %i[index]
  resources :friendships, only: %i[create index update]
  resources :tee_times, only: %i[index show] do
    resources :bookings, only: %i[new create]
  end

  # Routes for my API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tee_times, only: %i[index]
      resources :users, only: %i[index show]
      resources :friendships do
        get 'friends', on: :collection, as: :friends
        get 'friends/:id', on: :collection, action: :friend_show
        get 'pending_friends', on: :collection, as: :pending_friends
        get 'pending_friends/:id', on: :collection, action: :pending_friend_show
        get 'requested_friends', on: :collection, as: :requested_friends
        get 'requested_friends/:id', on: :collection, action: :requested_friend_show
      end
      resources :dashboards do
        get 'bookings', on: :collection, as: :bookings
        get 'hourly', on: :collection, as: :hourly
        get 'daily', on: :collection, as: :daily
        get 'weekly', on: :collection, as: :weekly
        get 'monthly', on: :collection, as: :monthly
        get 'yearly', on: :collection, as: :yearly
      end
    end
  end
end
