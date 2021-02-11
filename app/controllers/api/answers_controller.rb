class Api::AnswersController < ApplicationController

    skip_before_action :verify_authenticity_token
    before_action :require_signed_in!

    def create
        @answer = Answer.new(answer_params)
        @answer.user_id = current_user.id
        @answer.question_id = params[:question_id]

        if @answer.save
            render :show
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def destroy
        @answer = Answer.find(params[:id])

        if @answer.destroy
            render :show
        else 
            render json: @answer.errors.full_messages, status: 422
        end
    end

    private

    def answer_params
        params.require(:answer).permit(:body)
    end
end
