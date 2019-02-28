class Api::ChildrenController < ApplicationController
  before_action :set_child, only: [:show, :update, :destroy]

  def index
    render json: Child.all
  end

  def show
    render json: @child
  end

  def create
    child = Child.new(child_params)
    
    if child.save
      render json: child
    else
      render json: child.errors, status: 422
    end
  end

  def update
    if @child.update(child_params)
      render json: @child
    else
      render json: @child.errors, status: 422
    end
  end

  def destroy
    @child.destroy
  end

  private
    def set_child
      @child = Child.find(params[:id])
    end

    def child_params
      params.require(:child).permit(:name)
    end
  end

end
