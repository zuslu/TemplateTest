Rails.application.routes.draw do

  get 'contacts/new'

  get 'contacts/create'

	root 'resume#index'
    get 'resume/index'

    match '/contacts',     to: 'contacts#new',             via: 'get'
	resources :contacts, only: [:new, :create]


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
