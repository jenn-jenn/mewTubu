class Api::LikesController < ApplicationController

    before_action :require_login
    
    def create 
        if already_liked?
            self.destroy
        else
            @like = Like.new
            @like.user_id = current_user.id
            @like.video_id = params[:video_id]
            if @like.save
                @video = @like.video
                render 'api/videos/show'
            else
                render json: @like.errors.full_messages, status: 422
            end
        end
       
    end

    def destroy
        @like = Like.find_by(user_id: current_user.id, video_id: params[:video_id])
        if @like
            @like.destroy
            @video = @like.video
            render 'api/videos/show'
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def already_liked?
        Like.where(user_id: current_user.id, video_id: params[:video_id]).exists?
    end
end
