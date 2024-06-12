// export const Env = {
//     // If you set another name in wrangler.toml as the value for 'binding',
//     // replace "AI" with the variable name you defined.
//     AI: AI
// }

export async function onRequest(context) {
    const res = await fetch(
        "https://github.com/Azure-Samples/cognitive-services-speech-sdk/raw/master/samples/cpp/windows/console/samples/enrollment_audio_katie.wav"
    );
    const blob = await res.arrayBuffer();

    const input = {
        audio: [...new Uint8Array(blob)],
    };

    const response = await env.AI.run(
        "@cf/openai/whisper",
        input
    );

    return Response.json({input: {audio: []}, response});
}
