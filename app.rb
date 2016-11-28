require 'sinatra/base'
require 'json'

class DBServer < Sinatra::Base
  
  set :port, 4000

  get '/' do
  end

  get '/get' do
  	if File.exist? './params.txt'
	  	JSON.parse(File.read('params.txt'))[params['key']]
	  end
  end

  get '/set' do
 		File.write('params.txt', params.to_json)
  	redirect '/'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
