class Api::AnswersController < ApplicationController

    skip_before_action :verify_authenticity_token
    before_action :require_signed_in!, only: [:create]

    def create
        @answer = Answer.new(answer_params)
        @answer.user_id = current_user.id
        @answer.question_id = params[:question_id]
        question = Question.find_by_id(params[:question_id])

        if !question
            render json: ['question does not exist'], status: 401
        end

        if @answer.save
            @question = Question.find_by_id(params[:question_id])
            render 'api/questions/show'
        else
            render json: @answer.errors.full_messages, status: 401
        end
    end

    def index
        question = Question.find_by_id(params[:question_id])
        @answers = question.answers
        render 'api/answers/index'
    end

    def show
         @answer = Answer.find(params[:id])
    
         render 'api/answers/show'
    end

    private

    def answer_params
        params.require(:answer).permit(:body)
    end
end
