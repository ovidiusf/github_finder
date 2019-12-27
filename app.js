// INIT Github
const github = new Github;

// search the input
const searchUser = document.getElementById('searchUser');

// Search the input event listener
searchUser.addEventListener('keyup', (e) => {

    // get the input
    const userText = e.target.value;

    if (userText !== '') {
        // http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found"){
                    //Alert that user was not found
                }else {
                    //show profile
                }
            })
    } else {
        // clear the profile
    }
});