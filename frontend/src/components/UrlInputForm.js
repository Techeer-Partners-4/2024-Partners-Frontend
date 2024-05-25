import React, { useState } from 'react';

const UrlInputForm = ({ onSubmit }) => {
  const [originUrl, setOriginUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(originUrl);
    setOriginUrl('');
  };


  return (
    <form onSubmit={handleSubmit} className="mb-10 flex justify-center items-center space-x-4">
      <input
        type="text"
        value={originUrl}
        onChange={(e) => setOriginUrl(e.target.value)}
        className="border rounded px-4 py-2 w-[40rem] h-[4rem]"
        placeholder="https://example.com"
      />
      <button type="submit" className="bg-pink-400 text-white w-[6rem] h-[4rem] px-4 py-2 rounded">
        Run
      </button>
    </form>
  );
};

export default UrlInputForm;