

// Type your code below this line!

function FriendList(num) {

    this.friends = [];

    for (let i = 0; i < num; i++) {
        this.friends.push(process.argv[i + 3])
    }

}

const number = Number(process.argv[2]);
const listFriends = new FriendList(number);
console.log(listFriends.friends);


// Type your code above this line!

