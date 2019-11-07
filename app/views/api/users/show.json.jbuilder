# json.extract! @user, :username, :email, :id
json.partial! '/api/users/user', current_user: @user