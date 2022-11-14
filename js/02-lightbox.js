import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryContainerItems = createGalleryContainerItems(galleryItems);

function createGalleryContainerItems(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `<ul class="gallery">
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </ul>`;
    })
    .join("");
};

galleryContainer.insertAdjacentHTML("beforeend", galleryContainerItems);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
  });