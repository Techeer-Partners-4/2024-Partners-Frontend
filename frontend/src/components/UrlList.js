import React from 'react';
import UrlItem from './UrlItem';

const UrlList = ({ urls, onDelete }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      {urls.map((url) => (
        <UrlItem key={url.id} url={url} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UrlList;