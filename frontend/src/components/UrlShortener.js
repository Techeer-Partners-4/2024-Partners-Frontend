import React, { useState, useEffect } from 'react';
import axios from '../api/axios'; // Axios 인스턴스를 import 합니다.
import UrlInputForm from './UrlInputForm';
import UrlList from './UrlList';

const UrlShortener = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const response = await axios.get('/short-links');
      console.log('Fetched URLs:', response.data); // Fetch 확인
      setUrls(response.data);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };

  const handleAddUrl = async (originUrl) => {
    try {
      const response = await axios.post('/short-links', { originUrl });
      console.log('Added URL:', response.data); // Add 확인
      setUrls(prevUrls => [response.data, ...prevUrls]);
    } catch (error) {
      console.error('Error adding URL:', error);
    }
  };

  const handleDeleteUrl = async (id) => {
    try {
      await axios.delete(`/short-links/${id}`);
      console.log('Deleted URL ID:', id); // Delete 확인
      setUrls(urls.filter(url => url.id !== id));
    } catch (error) {
      console.error('Error deleting URL:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center py-10">URL Shortener</h1>
      <UrlInputForm onSubmit={handleAddUrl} />
      <UrlList urls={urls} onDelete={handleDeleteUrl} />
    </div>
  );
};

export default UrlShortener;