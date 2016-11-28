require 'sinatra/base'

class DBServer < Sinatra::Base
  
  set :port, 4000

  get '/' do
  end

  get '/get' do
  end

  post '/set' do
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
