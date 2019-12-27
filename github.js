const USER_ID = config.USER_ID;
const USER_SECRET = config.USER_SECRET;

// ES6 Classes
class Github {
    constructor() {
        this.client_id = USER_ID;
        this.client_secret = USER_SECRET;
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id="${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
