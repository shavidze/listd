/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    console.log({ params })
    return {
        post: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        }
    };
}
