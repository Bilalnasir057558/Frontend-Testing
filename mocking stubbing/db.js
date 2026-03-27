const db = {
    async fetchPosts() {
        const response = await fetch("https://api.example.com/posts");
        return response.json();
    }
};

module.exports = { db }; 