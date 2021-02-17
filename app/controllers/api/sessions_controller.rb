class Api::SessionsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            sign_in!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid signin information'], status: 401
        end
    end

    def destroy
        @user = current_user

        if @user
            sign_out!
            render 'api/users/show'            
        end
    end

end
