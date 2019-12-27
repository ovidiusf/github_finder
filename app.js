// INIT Github
const github = new Github;
// init UI class
const ui = new UI;

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
                if(data.profile.message === "Not Found" && userText !==''){
                    //Alert that user was not found
                    ui.showAlert('User was not found' ,'alert alert-danger');
                }else {
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // clear the profile
        ui.clearProfile();
    }
});