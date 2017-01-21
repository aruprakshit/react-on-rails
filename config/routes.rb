Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, default: { format: :json } do
    namespace :v1 do
      resources :articles
    end
  end

  get '/', to: 'application#layout'
  get "*path", to: "application#layout"
end
