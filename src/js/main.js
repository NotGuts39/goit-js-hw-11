import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";




const loader = document.getElementById('loader');

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

function searchImages() {
    const searchInput = document.getElementById('searchInput').value;
    const imageGallery = document.getElementById('imageGallery');

    function clearGallery() {
        imageGallery.innerHTML = '';
    }

    const apiKey = '41282731-c9c58555d497b62011b46ee39';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&image_type=photo&orientation=horizontal&safesearch=true`;

    clearGallery();
    
    

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            hideLoader();

            if (data.hits.length > 0) {
                const imageCardsHTML = data.hits.map(image => `
                    <a href="${image.largeImageURL}" data-lightbox="image-gallery" class="image-card">
                        <img src="${image.webformatURL}" alt="${image.tags}">
                        <div class="image-details">
                            <p><strong>Likes:</strong> ${image.likes}</p>
                            <p><strong>Views:</strong> ${image.views}</p>
                            <p><strong>Comments:</strong> ${image.comments}</p>
                            <p><strong>Downloads:</strong> ${image.downloads}</p>
                        </div>
                    </a>
                `).join('');

                imageGallery.innerHTML = imageCardsHTML;

               

                
                const simpleLightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250,
                });
                
                  simpleLightbox.refresh();
                  
            } else {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again.',
                    position: 'topCenter',
                });
            }
        })
        .catch(error => {
            console.error('error', error);
        });
}

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    showLoader(); 
    searchImages();
});