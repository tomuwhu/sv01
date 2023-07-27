import adapter from '@sveltejs/adapter-static';
export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            precompress: false,
            strict: false
        }),
        paths: {
            base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : ""
        }
    }
}
