Spree::StoreController.class_eval do
  def cart_size
    render :text => simple_current_order.item_count
  end
end