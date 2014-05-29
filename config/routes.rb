Spree::Core::Engine.add_routes do
  get '/cart_size', :to => 'store#cart_size', :as => :cart_size
end