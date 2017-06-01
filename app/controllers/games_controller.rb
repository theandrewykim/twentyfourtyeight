class GamesController < ApplicationController

  skip_before_action :verify_authenticity_token, only: :create

  def create
    params = game_params
    @user = current_user
    @game = Game.new(params.merge(users_id: @user.id))
    @game.save
  end

  private

  def game_params
    params.permit(:current_score, :board)
  end

end
