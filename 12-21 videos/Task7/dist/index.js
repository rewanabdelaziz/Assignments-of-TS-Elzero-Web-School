"use strict";
// Create Enums + Function Here
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = calculateInsane(10)] = "Insane";
})(Game || (Game = {}));
function calculateInsane(num) {
    return Game.Hard - num;
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
