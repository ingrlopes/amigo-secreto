document.addEventListener('DOMContentLoaded', () => {
    const friends = [];
    const friendNameInput = document.getElementById('friendName');
    const addFriendBtn = document.getElementById('addFriendBtn');
    const friendsList = document.getElementById('friendsList');
    const drawFriendBtn = document.getElementById('drawFriendBtn');
    const result = document.getElementById('result');

    addFriendBtn.addEventListener('click', () => {
        const friendName = friendNameInput.value.trim();
        if (friendName === '') {
            alert('Por favor, insira um nome.');
            return;
        }
        friends.push(friendName);
        friendNameInput.value = '';
        updateFriendsList();
    });

    drawFriendBtn.addEventListener('click', () => {
        if (friends.length === 0) {
            alert('Nenhum amigo na lista para sortear.');
            return;
        }
        const randomIndex = Math.floor(Math.random() * friends.length);
        const secretFriend = friends[randomIndex];
        result.innerHTML = `Seu amigo secreto é: ${secretFriend}`;
    });

    function updateFriendsList() {
        friendsList.innerHTML = '';
        friends.forEach(friend => {
            const li = document.createElement('li');
            li.textContent = friend;
            friendsList.appendChild(li);
        });
    }
});