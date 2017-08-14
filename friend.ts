class Friend {
	firstName: string;
	lastName: string;
	phone: string;
	age: number;
	bestFriendsForever: boolean;
	constructor(fn:string, ln:string, p:string, 
					a: number, bff: boolean) {
		this.firstName = fn;
		this.lastName = ln;
		this.phone = p;
		this.age = a;
		this.bestFriendsForever = bff;
	}
	clog() {
		console.log(this.firstName + ' ' + this.lastName);
	}
}

let greg = new Friend('Greg','Doud','555-1212',59,true);
let sean = new Friend('Sean','Blessing','555-2121',45,false);
let eric = new Friend('Eric','Anspach', '555-1212',29,true);
let phuc = new Friend('Phuc','Dao','555-2121',29,true);

let friends: Friend[] = [greg, sean, eric, phuc];

for(var idx = 0; idx < friends.length; idx++) {
	var friend = friends[idx];
	friend.clog();
}