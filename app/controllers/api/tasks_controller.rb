class Api::TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]
  
  def index
    render json: Task.all
  end

  def show
    render json: @task
  end

  def create
    task = Task.new(product_params)

    if task.save
      render json: task
    else
      render json: task.errors, status 422
    end
  end

  def update
    if task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status 422
    end
  end

  def destroy
    @task.destroy
  end

  private
    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:name, :done)
    end

  end
end
