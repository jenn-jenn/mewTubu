class Api::DislikesController < ApplicationController
    before_action :require_login
    
    def create 
        if already_disliked?
            self.destroy
        else
            @dislike = Dislike.new
            @dislike.user_id = current_user.id
            @dislike.video_id = params[:video_id]
            if @dislike.save
                @video = @dislike.video
                render 'api/videos/show'
            else
                render json: @dislike.errors.full_messages, status: 422
            end
        end
       
    end

    def destroy
        @dislike = Dislike.find_by(user_id: current_user.id, video_id: params[:video_id])
        if @dislike
            @dislike.destroy
            @video = @dislike.video
            render 'api/videos/show'
        else
            render json: @dislike.errors.full_messages, status: 422
        end
    end

    def already_disliked?
        Dislike.where(user_id: current_user.id, video_id: params[:video_id]).exists?
    end
end
