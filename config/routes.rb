Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home', as: :home
  devise_scope :user do
    get '/user' => 'dashboards#user_dashboard', :as => :user_dashboard
  end
end
