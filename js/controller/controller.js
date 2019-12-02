class Controller {
    constructor() {
        let mainModel = new MainModel();
        let mainView = new MainView(mainModel);
        mainModel.setView(mainView);

        let contentsModel = new ContentsModel();
        let contentsView = new ContentsView(contentsModel);
        contentsModel.setView(contentsView);

        let articleModel = new ArticleModel();
        let articleView = new ArticleView(articleModel);
        articleModel.setView(articleView);

        this.mainModel = mainModel;
		this.contentsModel = contentsModel;
        this.articleModel = articleModel;
        
        this.setupListeners();
		this.switchToStateFromURLHash();
    }

    setupListeners() {
		window.onhashchange = this.switchToStateFromURLHash.bind(this);
	}

	switchToMainPage() {
	    this.switchToState('contents');
	}

	switchToState(newState) {
	    location.hash = newState;
	}

	switchToStateFromURLHash() {
		let URLHash = window.location.hash;
        let stateStr = URLHash.substr(1);
        console.log(stateStr);
        this.getCurrentModel(stateStr);
	}

	getCurrentModel(stateStr) {
		if ( stateStr != "" ) { 
	        let parts = stateStr.split("_");
		    if (parts[0] == 'article') {
                let id = (parts[1] !== undefined) ? parts[1] : 1;
		    	this.articleModel.setId(id);
		        this.articleModel.updateView();
		    } else if (parts[0] == 'contents') {
			    this.contentsModel.updateView();	
		    } else {
                this.mainModel.updateView();	
            }
	    } else {
            this.mainModel.updateView();
        }
	}
}