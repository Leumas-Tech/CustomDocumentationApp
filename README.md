# Documentation Template Customization Guide 📖

Hello there! 🌟 If you're looking to customize this beautiful documentation template with electric blue accents, a white main body, and a touch of 3D vibe, you've landed in the right place. Let's dive into how you can make this template yours!

## How to Create Your Documentation 🚀

1. **Clone the Repository or Download the Files**: 
   - Use git to clone the repository: 
     ```bash
     git clone https://github.com/Leumas-Tech/CustomDocumentationApp
     ```
   - Alternatively, you can download the files directly from GitHub.

2. **Navigate to the `script.js` file**: This is where you'll find the `information1` array which stores all the documentation data.

3. **Modify the `information1` Array**: Update this array with your documentation details. Below, we'll break down each section of the JSON data for clarity.

## Understanding the JSON Data Structure 🧠

Here's what each part of the `information1` data structure represents:

- **title**: The main title of your documentation entry.
  - **Example**: 
    ```
    "Doc1"
    ```

- **content**: The main content of your documentation. You can add your detailed descriptions here.
  - **Example**: 
    ```
    "Lorem ipsum doc1 content. Here's some **bold** markdown."
    ```

- **sources**: An array of links related to your documentation. They will be rendered as clickable links.
  - **Example**: 
    ```json
    [
        "https://www.example.com/source1",
        "https://www.example.com/source2"
    ]
    ```

- **code**: A block of code that you want to display. Enclosed in backticks to maintain formatting.
  - **Example**: 
    ```javascript
    function helloWorld() {
        console.log('Hello, world!');
    }
    ```

- **example**: Contains a description and usage of your code or function.
  - **description**: A brief overview of the example.
  - **usage**: Demonstrates how to use your code.
  - **Example**: 
    ```json
    {
        "description": "This is an example of how to use the helloWorld function.",
        "usage": "helloWorld();  // outputs: Hello, world!"
    }
    ```

- **additionalNotes**: If you have any other notes or tidbits you'd like to add, this is the place!
  - **Example**: 
    ```
    "This is a place for any other notes or details you might want to include."
    ```

- **apiCall**: If your documentation references an API, you can specify the endpoint here.
  - **Example**: 
    ```
    "/stripe/authentications/users/v1"
    ```

- **type**: Specifies the type of your documentation. It should be one of the following: "function", "api call", or "other".
  - **Example**: 
    ```
    "function"
    ```

Add as many objects (or "docs") to the `information1` array as you need!

## And... That's a Wrap! 🎉

Customizing this template should be a breeze now. If you face any issues or have any suggestions, feel free to raise an issue or send a pull request. Happy documenting!
