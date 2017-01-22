class Api::V1::ArticlesController< ApplicationController
  def index
    @articles = Article.all
    sleep 1;

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

  def show
    @article = Article.find params[:id]
    render json: @article
  end

  private

    def article_params
      params.require(:article).permit(:title, :body)
    end
end
