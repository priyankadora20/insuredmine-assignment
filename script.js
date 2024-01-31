    function openPage(page) {
            // Add logic to navigate to the corresponding page
            if (page === 'contact') {
                 alert('You are at ' + page + ' only.');
                  window.location.href = '/contact.html';
            }
            else if (page === 'get-started') {
                 window.location.href = '/index.html';
            }
            else if (page === 'work-email') {
                 window.location.href = '/work-email.html';
            }    
            else {
                alert('Navigating to ' + page + ' page.');
                alert('Sorry this ' + page + ' page is underconstruction');
            }
        }