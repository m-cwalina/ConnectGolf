Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/user' => 'dashboards#user_dashboard', as: :user_dashboard
  end
  root to: 'pages#home', as: :home
  resources :users, only: %i[index show]
  resources :friendships, only: %i[create index update]
  resources :tee_times, only: %i[index show]
end
