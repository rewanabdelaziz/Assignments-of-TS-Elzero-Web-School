// class Shorten {
//     public id: number;
//     public username: string;
//     protected title: string;
//     constructor (id: number, username: string, title: string) {
//         this.id = id;
//         this.username = username;
//         this.title = title;
//     }
// }
class Shorten {
    constructor (public id: number, public username: string, protected title: string) {}
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);