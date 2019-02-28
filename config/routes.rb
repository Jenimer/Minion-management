Rails.application.routes.draw do
  # get 'task/index'
  # get 'task/show'
  # get 'task/create'
  # get 'task/update'
  # get 'task/destroy'
  namespace :api do
    resources :tasks
  end

  #Do not place any routes below this one
  if Rails.env.production?
    get '*other', to: 'static#index'
  end
end
