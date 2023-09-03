export const information1 = [
    {
        title: "Doc1",
        content: "Lorem ipsum doc1 content. Here's some **bold** markdown.",
        sources: [
            "https://www.example.com/source1",
            "https://www.example.com/source2",
        ],
        code: `
function helloWorld() {
    console.log('Hello, world!');
}
        `,
        example: {
            description: "This is an example of how to use the helloWorld function.",
            usage: `
helloWorld();  // outputs: Hello, world!
            `
        },
        additionalNotes: "This is a place for any other notes or details you might want to include.",
        apiCall: "/stripe/authentications/users/v1",
        type: "function" // Should be one of: "function", "api call", "other"
    },
    
    // ... more docs
];
