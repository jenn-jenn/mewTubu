class Api::SessionsController < ApplicationController
    def create # login
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user.nil?
            render json: ['Invalid user/password'], status: 401
        else
            login(@user)
            render '/api/users/show'
        end
    end

    def destroy # logout
        @user = current_user
        if logged_in?
            logout
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end
