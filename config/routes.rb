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
  get '/friendships/members', to: 'friendships#index'
  get '/friendships/members/:id', to: 'friendships#index'
  get '/friendships/friends', to: 'friendships#index'
  get '/friendships/friends/:id', to: 'friendships#index'
  get '/friendships/pending_friends', to: 'friendships#index'
  get '/friendships/pending_friends/:id', to: 'friendships#index'
  get '/friendships/requested_friends', to: 'friendships#index'
  get '/friendships/requested_friends/:id', to: 'friendships#index'

  # All routes for dashboard analytics to work with react_router
  get '/dashboard/bookings', to: 'dashboards#index'
  get '/dashboard/bookings/hourly', to: 'dashboards#index'
  get '/dashboard/bookings/daily', to: 'dashboards#index'
  get '/dashboard/bookings/weekly', to: 'dashboards#index'
  get '/dashboard/bookings/monthly', to: 'dashboards#index'
  get '/dashboard/bookings/yearly', to: 'dashboards#index'

  # All routes for teesheet in dashboard to work with react_router
  get '/dashboard/teesheet', to: 'dashboards#index'
  get '/dashboard/teesheet/:id', to: 'dashboards#index'
  get '/dashboard/teesheet/:id/bookings/admin', to: 'dashboards#index'
  get '/dashboard/members', to: 'dashboards#index'
  get '/dashboard/teesheet/:tee_time_id/bookings/:id', to: 'dashboards#index'

  get '/tee_times/:id/bookings', to: 'tee_times#index'

  # Normal routes for rails app
  resources :users, only: %i[index]
  resources :friendships, only: %i[create index update]
  resources :tee_times, only: %i[index show] do
    resources :bookings, only: %i[new create]
  end

  # Routes for my API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tee_times, only: %i[index update show] do
        resources :bookings, only: %i[new create destroy]
        get 'teesheet', on: :collection, as: :teesheet
        get 'teesheet/:id', on: :collection, action: :teesheet_show
        post 'teesheet/:id/bookings/admin', on: :collection, action: :admin_booking
      end

      resources :users, only: %i[index show] do
        resources :bookings, only: %i[destroy]
      end

      resources :friendships do
        get 'members', on: :collection, as: :members
        get 'members/:id', on: :collection, action: :member_show
        get 'friends', on: :collection, as: :friends
        get 'friends/:id', on: :collection, action: :friend_show
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
