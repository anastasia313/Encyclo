class ArticleView extends BaseView{
    update() {
		this.content.innerHTML = 'article id = ' + this.model.getId();
	}
}