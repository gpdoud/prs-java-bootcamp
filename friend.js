var Friend = (function () {
    function Friend(fn, ln, p, a, bff) {
        this.firstName = fn;
        this.lastName = ln;
        this.phone = p;
        this.age = a;
        this.bestFriendsForever = bff;
    }
    Friend.prototype.clog = function () {
        console.log(this.firstName + ' ' + this.lastName);
    };
    return Friend;
}());
var greg = new Friend('Greg', 'Doud', '555-1212', 59, true);
var sean = new Friend('Sean', 'Blessing', '555-2121', 45, false);
var eric = new Friend('Eric', 'Anspach', '555-1212', 29, true);
var phuc = new Friend('Phuc', 'Dao', '555-2121', 29, true);
var friends = [greg, sean, eric, phuc];
for (var idx = 0; idx < friends.length; idx++) {
    var friend = friends[idx];
    friend.clog();
}
