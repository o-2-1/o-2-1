import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DownloadPDFButton = ({ pdfUrl }) => {
  const downloadPDF = () => {
    // Создаем ссылку и программно кликаем по ней для скачивания файла
    const link = document.createElement('a');
    link.href = pdfUrl; // Путь к вашему PDF-файлу
    link.download = pdfUrl.split('/').pop(); // Имя файла при загрузке
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadPDF} className="button button--download">
      <FontAwesomeIcon icon={faDownload} className="pdf-icon" />
      Скачать PDF
    </button>
  );
};

export default DownloadPDFButton;
