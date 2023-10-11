export function updateModalCopy(params) {
       // Select all open modal buttons and marker info elements
       const openModalButtons = document.querySelectorAll('[fs-modal-element="open"]');
       const markerInfos = document.querySelectorAll('[data-element="marker-info"]');
       const modalBody = document.querySelector('[data-element="modal-body"]');

       // Add click event listener to each open modal button
       openModalButtons.forEach(function(button, index) {
           button.addEventListener('click', function() {
               const markerInfo = markerInfos[index];
               // Check if markerInfo element exists
               if (markerInfo) {
                   // Clear the content of modal body and insert markerInfo content
                   modalBody.innerHTML = ''; // Clear existing content
                   modalBody.appendChild(markerInfo.cloneNode(true)); // Insert markerInfo content
               }
           });
       });
    
}