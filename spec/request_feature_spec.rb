describe 'Get request', :type => :feature do
  it 'set a key, value pair and access it' do
    visit('/set?name=max')
    visit('/get?key=name')
    expect(page).to have_content 'max'
  end
end