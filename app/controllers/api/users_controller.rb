class Api::UsersController < ApplicationController
    # def new # signup
    #     @user = User.new
    #     render :new
    # end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    # def show # profile page=
    #     @user = User.find_by(id: params[:id])
    #     if @user
    #         render :show
    #     else
    #         render json: @user.errors.full_messages, status: 404
    #     end
    # end

    private
    
    def user_params 
        params.require(:user).permit(:username, :password, :email)
    end
end
