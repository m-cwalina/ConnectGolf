Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/user' => 'dashboards#user_dashboard', as: :user_dashboard
  end
  root to: 'pages#home', as: :home
  get "/about", to: "pages#about"
  resources :users, only: %i[index show]
  resources :friendships, only: %i[create index update]
  resources :tee_times, only: %i[index show] do
    resources :bookings, only: %i[new create]
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tee_times, only: %i[index]
    end
  end
end
