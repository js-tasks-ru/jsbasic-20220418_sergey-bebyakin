function makeFriendsList(friends) {
    let ul = document.createElement('ul');
    for (let key of friends) {
        let li = document.createElement('li');
        li.innerHTML = `${key.lastName} ${key.firstName}`;
        ul.append(li);
    }
    return ul;
    // document.body.append(ul);
}
makeFriendsList();