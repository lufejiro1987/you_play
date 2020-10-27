class SalesController < ApplicationController
  def index
    if params[:q]
      @sales = Sale.where('title LIKE ?', "%#{params[:q]}%")
    else
      @sales = Sale.all
    end
    @month_sales = Sale.group("strftime('%m/%Y', date_sale)").order(date_sale: :asc).sum(:total)
    @quant_sales = Sale.group(:title).count()
  end
end
