"use strict";
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
}
let tester = new Show("Elzero");
console.log(tester.title); // Property 'title' does not exist on type 'Show'
tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester.title); // Property 'title' does not exist on type 'Show'
