require 'sinatra/base'
require 'json'

class DBServer < Sinatra::Base
  
  set :port, 4000

  get '/' do
  end

  get '/get' do
  	File.open('params.txt', 'r') do |file|
  		@json = file.read
  	end
  	JSON.parse(@json)[params['key']]
  end

  get '/set' do
 		File.write('params.txt', params.to_json)
  	redirect '/'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
