// earch the input
const searchUser = document.getElementById('searchUser');

// Search the input event listener
searchUser.addEventListener('keyup' ,(e) => {
    
    const userText = e.target.value;

    if(userText !== ''){
        console.log(userText);
    }
});