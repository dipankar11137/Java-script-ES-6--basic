document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid blue';
    container.style.padding = '10px';
});

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'goldenrod';
        friend.style.padding = '10px';
        friend.style.margin = '10px';
    }
};

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New friend</h3>
    <p>Ex omnis voluptatum dolorem aliquid quam repudiandae voluptates, in cum, ad illo inventore?</p>
    `
    container.appendChild(friendDiv);
    console.log(friendDiv);
});

