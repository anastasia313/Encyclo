class BaseModel {
    constructor() {
        this.view = null;
        this.data = null;
    }

    setView(view){
        this.view = view;
    }

    updateView(){
        this.view.update(this.data);
    }

}