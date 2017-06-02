class GamesController < ApplicationController

  skip_before_action :verify_authenticity_token, only: :create

  def create
    params = game_params
    @user = current_user
    @game = Game.new(params.merge(user_id: @user.id))
    @user.games << @game
    @game = @game.save
    redirect_to root_path
  end

  private

  def game_params
    params.permit(:current_score, :board)
  end

end
