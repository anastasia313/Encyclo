class ContentsModel extends BaseModel{
    static get urls() {
		return {
			'contents': 'list.json' // TO DO: указать сылку на json
		}
	}

	async getContent() {
		let response = await fetch(ContentsModel.urls.contents, {
			method: 'get', mode: 'no-cors'
		});
        let result = await response.json();

		return result;
	}
    // constructor() {
    //     super();
    //     this.data = [
    //         "Массивы", "Объекты", "Переменные", "Инкапсуляция", "Библиотеки", "Фреймворки", "Протокол"
    //     ];
	// }
}