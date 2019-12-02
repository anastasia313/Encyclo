class MainView extends BaseView{
    update() {
		let html = '<h1>Энциклопедия</h1>';
		html += '<a href=#contents>список статей</a>';
		this.content.innerHTML = html;
	}
}