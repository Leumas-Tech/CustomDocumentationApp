import { information1 } from './CustomJSON/Information.js';
import { information2 } from './CustomJSON/Information2.js';
import { information3 } from './CustomJSON/Information3.js';
import { headerData } from './CustomJSON/Header.js';



const documentations = {
    'Documentation 1': information1,
    'Documentation 2': information2,
    'Documentation 3': information3
};

let currentDocumentation = documentations['Documentation 1'];  // Default documentation

function loadDocumentationSelector() {
    const selector = document.getElementById('documentation-selector');
    for (let doc in documentations) {
        const option = document.createElement('option');
        option.value = doc;
        option.textContent = doc;
        selector.appendChild(option);
    }

    selector.addEventListener('change', (e) => {
        currentDocumentation = documentations[e.target.value];
        loadCards();
        // You might also want to clear the rendered content area here
        document.getElementById('render-content-area').innerHTML = '';
    });
}


// Load header links
function loadHeaderLinks() {
    const header = document.getElementById('header');
    headerData.forEach(link => {
        const a = document.createElement('a');
        a.textContent = link.title;
        a.href = link.url;
        header.appendChild(a);
    });
}

// Load cards from documentation JSON
const CARDS_PER_PAGE = 12; 
let currentPage = 1; // Initial page

function getTotalPages() {
    return Math.ceil(currentDocumentation.length / CARDS_PER_PAGE);
}

function loadCards() {
    const cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';
    cardsDiv.classList.add('horizontal-scroll');

    let startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    let endIndex = Math.min(startIndex + CARDS_PER_PAGE, currentDocumentation.length);

    for (let i = startIndex; i < endIndex; i++) {
        const doc = currentDocumentation[i];
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = doc.title || "Undefined";
        card.appendChild(title);

        const content = document.createElement('p');
        content.textContent = doc.content || "Undefined";
        card.appendChild(content);

        const apiCall = document.createElement('p');
        apiCall.textContent = doc.apiCall || "Undefined";
        card.appendChild(apiCall);

        card.addEventListener('click', () => renderContentArea(i));
        cardsDiv.appendChild(card);
    }
    loadPagination(); // Load pagination every time cards are loaded
}

function loadPagination() {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = ''; // Clear previous pagination links

    let totalPages = getTotalPages();

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('button');
        pageLink.textContent = i;
        pageLink.classList.add('pagination-link');
        if (i === currentPage) pageLink.classList.add('active'); // Highlight current page

        pageLink.addEventListener('click', () => {
            currentPage = i;
            loadCards();
        });

        paginationDiv.appendChild(pageLink);
    }
}

//... rest of your code


// Render selected documentation content
// Render selected documentation content
function renderContentArea(index) {
    const contentArea = document.getElementById('render-content-area');
    const doc = currentDocumentation[index];
    
    // Clear out the current content.
    contentArea.innerHTML = '';

    // API Call (electric blue underlined text in the top-left)
    const apiEl = document.createElement('p');
    apiEl.style.color = 'electricblue';
    apiEl.style.textDecoration = 'underline';
    apiEl.textContent = `{YOUR_URL}${doc.apiCall}`;
    contentArea.appendChild(apiEl);

    // Title (bold black text)
    const titleEl = document.createElement('h2');
    titleEl.style.fontWeight = 'bold';
    titleEl.textContent = doc.title;
    contentArea.appendChild(titleEl);

    // Type (small text to the right of the title)
    const typeEl = document.createElement('span');
    typeEl.style.fontSize = 'small';
    typeEl.textContent = doc.type;
    titleEl.appendChild(typeEl); // appending it to the title element makes it to the right of the title

    // Code (in a code area)
    const codeArea = document.createElement('pre'); // Use a <pre> tag for code
    codeArea.textContent = doc.code;
    contentArea.appendChild(codeArea);

    // Button to copy code
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Code';
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(doc.code);
        alert('Code copied to clipboard!');
    });
    contentArea.appendChild(copyButton);

    // Example
    const exampleEl = document.createElement('p');
    exampleEl.textContent = doc.example.description + '\n\n' + doc.example.usage;
    contentArea.appendChild(exampleEl);

    // Additional Notes
    const notesEl = document.createElement('p');
    notesEl.textContent = doc.additionalNotes;
    contentArea.appendChild(notesEl);

    // Sources (as actual links)
    const sourcesList = document.createElement('ul');
    doc.sources.forEach(source => {
        const sourceEl = document.createElement('li');
        const linkEl = document.createElement('a');
        linkEl.href = source;
        linkEl.textContent = source;
        linkEl.target = '_blank'; // Opens the link in a new tab
        sourceEl.appendChild(linkEl);
        sourcesList.appendChild(sourceEl);
    });
    contentArea.appendChild(sourcesList);
}



document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    if (searchTerm === '') {
        loadCards(); // If the search bar is cleared, load all cards
    } else {
        searchCards(searchTerm);
    }
});

function searchCards(query) {
    const cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';
    cardsDiv.classList.add('horizontal-scroll');

    const matchedDocs = currentDocumentation.filter(doc => 
        (doc.title ? doc.title.toLowerCase().includes(query) : false) || 
        (doc.content ? doc.content.toLowerCase().includes(query) : false) ||
        (doc.apiCall ? doc.apiCall.toLowerCase().includes(query) : false)
    );
    

    matchedDocs.forEach((doc, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = doc.title || "Undefined";
        card.appendChild(title);

        const content = document.createElement('p');
        content.textContent = doc.content || "Undefined";
        card.appendChild(content);

        const apiCall = document.createElement('p');
        apiCall.textContent = doc.apiCall || "Undefined";
        card.appendChild(apiCall);

        card.addEventListener('click', () => renderContentArea(index));
        cardsDiv.appendChild(card);
    });

    // Hide the pagination when search is active
    document.getElementById('pagination').style.display = matchedDocs.length > 0 ? 'none' : '';
}


// Initial function to set up everything
function init() {
    loadDocumentationSelector();
    loadHeaderLinks();
    loadCards();
    // TODO: Add pagination and search functionality
}

init();
