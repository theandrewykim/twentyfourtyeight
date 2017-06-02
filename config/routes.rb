Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  get 'users/new'
  resources :games

  root 'welcome#index'
  resources :users, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
