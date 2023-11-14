// src/components/PhotoAlbum.js
import React from 'react';
import './PhotoAlbum.css';

const PhotoAlbum = () => {
  const photos = [
    { id: 1, title: 'Photo1', url: 'https://tse1.mm.bing.net/th?id=OIP.8sFe-UzqF8awaOTBFTQw6QHaGl&pid=Api&P=0&h=180' },
    { id: 2, title: 'Photo2', url: 'https://tse2.mm.bing.net/th?id=OIP.GovUku7mkvUqQ2kLlLlOkAHaF7&pid=Api&P=0&h=180' },
    { id: 3, title: 'Photo3', url: 'https://tse2.mm.bing.net/th?id=OIP.7khpSj_WjfqNOGOmCgoRQwHaIL&pid=Api&P=0&h=180' },
    { id: 4, title: 'Photo4', url: 'https://tse3.mm.bing.net/th?id=OIP.WHMardLKLCxShpiIXIHlLAHaLG&pid=Api&P=0&h=180' },
    { id: 5, title: 'Photo5', url: 'https://tse1.mm.bing.net/th?id=OIP.szEDPuFj_Q3EeoXEMFZPkQHaIy&pid=Api&P=0&h=180' },
    { id: 6, title: 'Photo6', url: 'https://placekitten.com/204/300' },
    { id: 7, title: 'Photo7', url: 'https://wallpapercave.com/wp/wp7530027.jpg' },
    { id: 8, title: 'Phot8', url: 'https://tse3.mm.bing.net/th?id=OIP.M415kO7Ya1HE87zgJCRhyQHaFn&pid=Api&P=0&h=180' },
    { id: 9, title: 'Photo9', url: 'https://wallpapercave.com/wp/wp8536845.jpg' },
    { id: 10, title: 'Photo10', url: 'https://i.pinimg.com/originals/a1/a4/e5/a1a4e578b75a2cad9024571012b17f14.jpg' },
    { id: 11, title: 'Photo11', url: 'https://www.tricksclues.com/wp-content/uploads/2016/12/Awesome-DP-For-Whatsapp-Facebook.jpg' },
    { id: 12, title: 'Photo12', url: 'https://live.staticflickr.com/973/41167705964_0af64f5629_b.jpg' },
    { id: 13, title: 'Photo13', url: 'https://tse4.mm.bing.net/th?id=OIP.MXXcVA3-a55KwAUXCG5HAAHaE8&pid=Api&P=0&h=180' },
    { id: 14, title: 'Photo14', url: 'https://tse2.mm.bing.net/th?id=OIP.unrw5RnVrTYI5bgMqlkpugHaEo&pid=Api&P=0&h=180' },
    { id: 15, title: 'Photo15', url: 'https://placekitten.com/204/300' },
   
    
    
  ];

  return (
    <div className="photo-album">
      {photos.map(photo => (
        <div key={photo.id} className="photo-card">
          <img src={photo.url} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoAlbum;
