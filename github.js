let USER_ID;
let USER_SECRET;

if(typeof config !== "undefined") {
    USER_ID = config.USER_ID;
    USER_SECRET = config.USER_SECRET;
}else{
    USER_ID ='';
    USER_SECRET='';
}

console.log("Testing" + USER_ID);

// ES6 Classes
class Github {
    constructor() {
        this.client_id = USER_ID;
        this.client_secret = USER_SECRET;
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}
