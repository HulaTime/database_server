require 'sinatra/base'

class DBServer < Sinatra::Base
  
  set :port, 4000

  $h = {}

  get '/' do
  end

  get '/get' do
  	$h[params['key']]
  end

  get '/set' do
  	params.each { |k, v| $h[k] = v }
  	redirect '/'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
