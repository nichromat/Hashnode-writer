// Name: Create content from template
// Desc: Create a content from existing template
// Input:
// Output:

function createContentFromTemplate() {

    // Let variable 'content' as DOMElement with selector '#hashnode-content'
    let content = document.querySelector('#hashnode-content');

    // Let 'body' as DOMElement with value 'body'
    let body = document.querySelector('.hashnode-writer');

    // Let 'nodeImport' as DOMElement with value 'importNode' -> content.content, true
    let nodeImport = document.importNode(content.content, true);

    // 'body' -> 'appendChild' -> nodeImport
    body.appendChild(nodeImport)
}


let addContentBottom = document.querySelector('.add-content-to-bottom');

addContentBottom.addEventListener('click', createContentFromTemplate);