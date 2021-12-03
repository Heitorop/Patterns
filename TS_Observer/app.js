var AutoNews = /** @class */ (function () {
    function AutoNews() {
        this.news = "";
        this.actions = [];
    }
    AutoNews.prototype.setNews = function (text) {
        this.news = text;
        this.notifyAll();
    };
    AutoNews.prototype.notifyAll = function () {
        var _this = this;
        return this.actions.forEach(function (subs) { return subs.inform(_this); });
    };
    AutoNews.prototype.register = function (observer) {
        this.actions.push(observer);
    };
    AutoNews.prototype.unregester = function (observer) {
        var _this = this;
        var observerIndex = this.actions.indexOf(observer);
        this.actions = this.actions.filter(function (el) { return _this.actions.indexOf(el) != observerIndex; });
    };
    return AutoNews;
}());
var Arthur = /** @class */ (function () {
    function Arthur() {
    }
    Arthur.prototype.inform = function (message) {
        console.log("Arthur has been informed about: " + message.news);
    };
    return Arthur;
}());
var Vlad = /** @class */ (function () {
    function Vlad() {
    }
    Vlad.prototype.inform = function (message) {
        console.log("Vlad has been informed about: " + message.news);
    };
    return Vlad;
}());
var autoNews = new AutoNews();
var arch = new Arthur();
var vlad = new Vlad();
autoNews.register(arch);
autoNews.register(vlad);
autoNews.setNews("New Tesla price is 40 000$");
autoNews.unregester(vlad);
autoNews.setNews("hi");
