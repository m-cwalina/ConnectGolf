Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/user', to: 'pages#user_dashboard', as: :user_dashboard
  end

  # Routes for User Dashboard to work with react_router
  get '/user/profile', to: 'pages#user_dashboard'
  get '/user/stats', to: 'pages#user_dashboard'
  get '/user/teetimes', to: 'pages#user_dashboard'
  get '/user/news', to: 'pages#user_dashboard'
  get '/user/booked', to: 'pages#user_dashboard'
  get '/user/booked/:id', to: 'pages#user_dashboard'
  get '/user/stats', to: 'pages#user_dashboard'
  get '/user/merch', to: 'pages#user_dashboard'

  # Routes for landing page to advertise ConnectGolf
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
  resources :tee_times, only: %i[index show booked_teetimes] do
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
      resources :posts, only: %i[index]
      resources :users, only: %i[index] do
        get 'user', on: :collection
        get 'members', on: :collection, as: :members
        get 'members/:id', on: :collection, action: :member_show
      end
      resources :scores, only: %i[index] do
        get 'rounds_per_month', on: :collection
      end
      resources :bookings, only: %i[show] do
        get 'booked_times', on: :collection
        delete '/:id', on: :collection, action: :user_destroy
      end
      resources :friendships, only: %i[create index show]
      resources :dashboards, only: %i[] do
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
