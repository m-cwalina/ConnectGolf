Rails.application.routes.draw do
  get 'users/index'
  devise_for :users
  devise_scope :user do
    get '/user' => 'dashboards#user_dashboard', :as => :user_dashboard
  end
  root to: 'pages#home', as: :home
  resources :users, only: [:index]
end
