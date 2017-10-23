class WelcomeController < ApplicationController
  def index
     intercom_custom_data.user[:language_override] = 'fr'
  end
end
