import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copyIcon from '../assets/copy.png';


const UrlItem = ({ url, onDelete }) => {
  return (
    <div className="flex flex-col justify-center w-[50rem] h-[10rem] p-6 rounded bg-white relative">
      <p className='font-bold py-2'>longUrl</p>
      <p><a href={url.originUrl} target="_blank" rel="noopener noreferrer" className="max-w-[40rem] text-blue-600 underline truncate block">{url.originUrl}</a></p>
      <p className='font-bold py-2'>shortUrl</p>
      <div className='flex flex-row'>
      <p><a href={url.shortUrl} target="_blank" rel="noopener noreferrer" className="max-w-[40rem] text-blue-600 underline truncate block">{url.shortUrl}</a></p>
      <CopyToClipboard text={url.shortUrl}>
          <button className="flex justify-center items-center w-6 h-6 ml-2 bg-gray-200 rounded">
            <img src={copyIcon} alt="Copy" className="w-4 h-4 inline" />
          </button>
        </CopyToClipboard>
      </div>
     
      <button
        onClick={() => onDelete(url.id)}
        className="absolute w-[2rem] h-[2rem] rounded-md bg-pink-400 top-4 right-4 text-white"
      >
        X
      </button>
    </div>
  );
};

export default UrlItem;