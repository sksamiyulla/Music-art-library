// Get the modal element
var modal = document.getElementById("albumDetailsModal");


function showAlbumDetails(albumName) {
    // Display the modal with album details
    modal.style.display = "block";

    // Replace the modal content with album information
    modal.innerHTML = "<h2>" + albumName + "</h2><p>Additional details about the album go here.</p>";

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}
