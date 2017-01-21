class Api::V1::ArticlesController< ApplicationController
  def index
    @articles = Article.all

    render json: @articles
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article
    else
      render json: { message: @article.errors.full_messages }
    end
  end
end
