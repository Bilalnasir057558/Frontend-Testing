const { db } = require("./db");

const postService = {
    async getPosts() {
        const posts = await db.fetchPosts();

        // example logic for testing
        return posts.map(post => ({
            id: post.id,
            title: post.title,
        }));
    }
};

module.exports = { postService };