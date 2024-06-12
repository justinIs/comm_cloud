// export const Env = {
//     // If you set another name in wrangler.toml as the value for 'binding',
//     // replace "AI" with the variable name you defined.
//     AI: AI
// }

export async function onRequestGet(context) {
    const id = context.env.track_id.newUniqueId();
    const stub = context.env.track_id.get(id);

    // Pass the request down to the durable object
    return stub.fetch(context.request);
}
