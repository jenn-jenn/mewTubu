class SessionsController < ApplicationController
    def create
        # get the right user
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
    end

    def destroy
        logout
        # redirect_to new_session_url
    end
end
