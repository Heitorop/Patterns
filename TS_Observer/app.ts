class AutoNews{
    news : string;
    actions : Array<Sub>;

    constructor(){
        this.news ="";
        this.actions = [];
    }
    
    setNews(text : string) :void{
        this.news = text;
        this.notifyAll();
    }

    notifyAll(){
        return this.actions.forEach(subs => subs.inform(this));
    }
    
    register(observer : Sub) : void{
        this.actions.push(observer);
    }

    unregester(observer : any) : void{
        const observerIndex = this.actions.indexOf(observer);
        this.actions = this.actions.filter(el => this.actions.indexOf(el) != observerIndex);
    }
}


interface Sub{
    inform(message : AutoNews) : void;
}


class Arthur implements Sub{
    inform(message : AutoNews){
        console.log(`Arthur has been informed about: ${message.news}`);
    }
}

class Vlad implements Sub{
    inform(message : AutoNews){
        console.log(`Vlad has been informed about: ${message.news}`);
    }
}

const autoNews = new AutoNews();
const arch = new Arthur();
const vlad = new Vlad();

autoNews.register(arch);
autoNews.register(vlad);

autoNews.setNews("New Tesla price is 40 000$");

autoNews.unregester(vlad);

autoNews.setNews("hi");
