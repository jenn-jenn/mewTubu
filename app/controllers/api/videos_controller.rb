class Api::VideosController < ApplicationController

    before_action :require_login, only: [:new, :create]

    def index # .includes(:user, comments, likes)
        @videos = Video.all.includes(:user)
        render :index
    end

    def create 
        @video = Video.new(vid_params)
        if @video.save
            render :index
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def show # .includes(:user, comments, likes)
        @video = Video.includes(:user).find_by(id: params[:id])
        if @video
            render :show
        else
            render json: ['video is not found'], status: 422
        end
    end

    private
    
    def vid_params
        params.require(:video).permit(:title, :description, :author_id)
    end
end
