import React from 'react';


const photos = [
  { src: 'path_to_photo1.jpg', caption: 'Memory 1' },
  { src: 'path_to_photo2.jpg', caption: 'Memory 2' },
  // Add more photos here
];

const Gallery = () => {
  return (
    <div className="gallery container text-center">
      <div className="row">
        {photos.map((photo, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="photo card">
              <img src={photo.src} alt={`Memory ${index + 1}`} className="card-img-top" />
              <div className="card-body">
                <p className="card-text">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
