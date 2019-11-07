class ApplicationController < ActionController::Base
    # CRLLL
    helper_method :current_user, :logged_in?, :require_login

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        unless current_user
            render json: {base: ['Must login to proceed']}, status: 401
        end
    end

    def login(user) 
        @current_user = user
        session[:session_token] = user.session_token
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end
end
