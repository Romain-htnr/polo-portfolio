Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'graphisme', to: 'pages#graphisme'
  get 'troisd', to: 'pages#troisd'
  get 'animation', to: 'pages#animation'
  get 'design', to: 'pages#design'
  get 'apropos', to: 'pages#apropos'
  get 'architecture', to: 'pages#architecture'
  resources :skills do
    resources :projects, only: [:new, :create, :show]
  end
  # get "skills", to: "skills#index"
end
