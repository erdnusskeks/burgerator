class BurgersController < ApplicationController

  def index
    @burgers = Burger.all   #[:patty, :vegetable, :sauce, :bread]
  end

  def new
    @burger = Burger.new
  end

  def create
    @burger = Burger.new(burger_params)
    if @burger.save
      redirect_to @burger
    else
      render 'new'
    end
  end

  def show
    @burger = Burger.find(params[:id])
  end

private
  def burger_params
    params.require(:burger).permit(:patty, :vegetable, :sauce, :bread)
  end

end