// Get input element
let filterInput = document.getElementById('filterInput');

// Add event listener for 'keyup'
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get value of input
    let filterInputNameValue = document.getElementById('filterInput').value.toUpperCase();

    // Get ul names
    let ul = document.getElementById('names');
    // Get li list from ul
    let li = ul.querySelectorAll('li.collection-item');

    // loop through collection-item lis
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        // if matched
        if (a.innerHTML.toUpperCase().indexOf(filterInputNameValue) > -1) {
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
}

