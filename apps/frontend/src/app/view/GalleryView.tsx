import axios from "axios";
import { useState, useEffect } from "react";

const GalleryView = () => {

    const [gallery, setGallery] = useState([]);

    const dev = 'localhost';

    useEffect(() => {
        axios.get(`http://${dev}:3333/api/gallery`)
        .then(res => {
            setGallery(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    console.log(gallery)


    return (
        <div>
            <h1>Gallery</h1>
            <div className="galleryWrapper">
                {gallery.map((item: any) => {
                    return (
                        <div className="galleryItem" key={item.id}>
                            <img src={item.renderPath} alt={item.filename} />
                            <p>{item.desc}</p>
                            <p>{item.creator}</p>
                            </div>
                    )
                })}
        </div>
        </div>
    );
}

export default GalleryView;