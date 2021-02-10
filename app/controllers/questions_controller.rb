class QuestionsController < ApplicationController
    def create
        @question = Question.create(question_params)
        if @question.save
            redirect_to questions_url   
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def index
        @questions = Question.all
        render :index 
    end

    def show
        @question = Question.find(params[:id])
        render :show
    end

    def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
            redirect_to questions_url
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def destroy
        @questions = Question.find(params[:id])
        @question.destroy
        redirect_to questions_url
    end

    private
    def question_params
        params.require(:question).permit(:title, :body, :user_id)
    end
end
