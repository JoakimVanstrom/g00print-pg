import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/galleryView.scss';
import { useSelector } from 'react-redux';

const GalleryView = () => {
  const [gallery, setGallery] = useState([]);
  const user = useSelector((state: any) => state.user.user);

  const isAdmin = user?.role;

  const dev = 'localhost';

  useEffect(() => {
    axios
      .get(`http://${dev}:3333/api/gallery`)
      .then((res) => {
        setGallery(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id: number) => {
    axios
        .delete(`http://${dev}:3333/api/gallery/${id}`)
        .then((res) => {
            console.log(res);
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        });
    };


  return (
    <div className="galleryWrapper">
      <h1>Galleri på vad som har skapats</h1>
      <div className="cardWrapper">
        {gallery.map((item: any) => {
          return (
            <div className="galleryItem" key={item.id}>
                {isAdmin && (
                    <button onClick={() => handleDelete(item.id)}>X</button>
                )}
              <img src={item.renderPath} alt={item.filename} />
              <p>Foto taget av <b><u>{item.creator}</u></b> på instagram</p>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryView;
