# json.extract! @user, :username, :email, :id
json.partial! '/api/users/user', user: @user