import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const videos = [
  { id: 1, title: 'React Intro', url: 'https://www.youtube.com/embed/Ke90Tje7VS0' },
  { id: 2, title: 'JS Basics', url: 'https://www.youtube.com/embed/W6NZfCO5SIk' },
];

const Media = () => {
  const [images, setImages] = useState([]);

  const fetchImages = useCallback(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(res => setImages(res.data.slice(0, 10)));
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div>
      <h2>Image Gallery</h2>
      <button onClick={fetchImages}>Refresh Gallery</button>
      <div className="gallery">
        {images.map(img => (
          <div key={img.id} className="card">
            <img src={img.download_url} alt={img.author} width={200} />
            <p>{img.author}</p>
          </div>
        ))}
      </div>

      <h2>Videos</h2>
      {videos.map(video => (
        <div key={video.id}>
          <h4>{video.title}</h4>
          <iframe width="300" height="200" src={video.url} frameBorder="0" allowFullScreen></iframe>
        </div>
      ))}
    </div>
  );
};

export default Media;
