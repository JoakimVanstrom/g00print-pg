import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/uploadView.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadView: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [desc, setDesc] = useState('');
  const [creator, setCreator] = useState('');
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token')



  const prod = '68.183.32.241';
  const dev = 'localhost';

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleDescChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };

  const handleCreatorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCreator(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      return alert('Please select a file');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('desc', desc);
    formData.append('creator', creator);

    axios
      .post(`http://${prod}:3333/api/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate('/gallery');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="upload-wrapper">
      <h1>File upload</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="file" onChange={handleFileChange} />
        <label htmlFor="desc">Beskrivning</label>
        <input
          type="text"
          name="desc"
          placeholder="Add description"
          value={desc}
          onChange={handleDescChange}
        />
        <label htmlFor="creator">Skapare</label>
        <input
          type="text"
          name="creator"
          placeholder="Add creator"
          value={creator}
          onChange={handleCreatorChange}
        />
        <button className="upload-btn" type="submit">Upload</button>
      </form>
    </div>
  );
  };





export default UploadView;