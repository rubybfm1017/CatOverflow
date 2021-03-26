class Api::VotesController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :require_signed_in!

    def create
        @vote = Vote.new()
        @vote.user_id = current_user.id
        @vote.answer_id = params[:answer_id]
        if Vote.exists?(user_id: @vote.user_id, answer_id: @vote.answer_id)
            render json: ['User already voted'], status: 200
            return
        end
        if @vote.save
            @answer = Answer.find(@vote.answer_id)
    
            render 'api/answers/show'
        else
            render json: @vote.errors.full_messages, status: 501
        end
    end

    def destroy
        @vote = Vote.find_by(user_id: current_user.id, answer_id: params[:answer_id])
        if @vote != nil
            if !@vote.destroy
                render json: @vote.errors.full_messages, status: 501
                return
            end
        end

        @answer = Answer.find(params[:answer_id])
        render 'api/answers/show'
    end
end
