class ContentsView extends BaseView{
	constructor() {
		super();
		this.alphabet = ["Б", "А", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"]
		this.alphabet.sort(this.compareABC);
	}


	compareABC(a,b){
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	}

	formate(data){
		let result = {};
		for(let i = 0; i < this.alphabet.length; i++){
			for(let z = 0; z < data.length; z++){
				if(this.alphabet[i] == data[z][0]){
					if(!result[this.alphabet[i]]) {
						result[this.alphabet[i]] = [];
					}
					result[this.alphabet[i]].push(data[z]);
				} 
			}
		}
		return result;
	}


    update(data) {
		let result = "";
		
		data.sort(this.compareABC);

		let formatedData = this.formate(data);
		let acticlesCount = 0;
		for (const key in formatedData) {
			if (formatedData.hasOwnProperty(key)) {
				result += `${key} <br>`;
				formatedData[key].forEach(element => {
					result += '<a href=#article_' + (++acticlesCount) + '>' + element + '</a></br>';
				});
				
			}
		}

		this.content.innerHTML = result;
	}
}