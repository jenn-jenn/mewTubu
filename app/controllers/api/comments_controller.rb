class Api::CommentsController < ApplicationController
    before_action :require_login

    def create 
        @comment = Comment.new(comments_params)
        if @comment.save
            render '/api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 422
        end

    end

    def show
        @comment = Comment.includes(:author).includes(:video).find_by(id: params[:id])
        if @comment
            render '/api/comments/show'
        else
            render json: ['Comment not found'], status: 422
        end
    end

    def destroy
        
    end

    private
    def comments_params
        params.require(:comment).permit(:body, :author_id, :video_id)
    end
end
