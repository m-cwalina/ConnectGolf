Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/user' => 'dashboards#user_dashboard', :as => :user_dashboard
  end
  root to: 'pages#home', as: :home
  resources :users, only: [:index]
  resources :map_user_to_friends, only: [:create]
end
