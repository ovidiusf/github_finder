// INIT Github
const github = new Github;

// search the input
const searchUser = document.getElementById('searchUser');

// Search the input event listener
searchUser.addEventListener('keyup', (e) => {

    const userText = e.target.value;

    if (userText !== '') {
        // http call
        console.log(userText);
        github.getUser(userText)
            .then(data => {
                console.log(data);
            })
    }
});