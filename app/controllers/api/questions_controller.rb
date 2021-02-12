class Api::QuestionsController < ApplicationController

    skip_before_action :verify_authenticity_token
    before_action  :require_signed_in!, only: [:create, :update, :destroy]

    def create
        @question = Question.create(question_params)
        @question.user_id = current_user.id 
        if @question.save 
            render 'api/questions/show'  
        else
            render json: @question.errors.full_messages, status: 401
        end
    end

    def index
        @questions = Question.all
        render 'api/questions/index' 
    end

    def show
        @question = Question.find(params[:id])
        render 'api/questions/show'
    end

    def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
            render 'api/questins/show'
        else
            render json: @question.errors.full_messages, status: 401
        end
    end

    def destroy
        @questions = Question.find(params[:id])
        @question.destroy
        render 'api/questions/index'
    end

    private
    def question_params
        params.require(:question).permit(:title, :body, :user_id)
    end
end
