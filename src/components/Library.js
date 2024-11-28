import React, { useState, useEffect } from 'react';

function Library() {
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    const storedPdfs = JSON.parse(localStorage.getItem('pdfs')) || [];
    setPdfs(storedPdfs);
  }, []);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPdf = { name: file.name, data: reader.result };
        const updatedPdfs = [...pdfs, newPdf];
        setPdfs(updatedPdfs);
        localStorage.setItem('pdfs', JSON.stringify(updatedPdfs));
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, carregue um arquivo PDF.');
    }
  };

  const handleSelectPdf = (pdf) => {
    setSelectedPdf(pdf);
  };

  const handleDownload = (pdf) => {
    const link = document.createElement('a');
    link.href = pdf.data;
    link.download = pdf.name;
    link.click();
  };

  return (
    <div className="library-container">
      <h2>Biblioteca Digital</h2>
      <input type="file" accept="application/pdf" onChange={handleUpload} />
      <div className="pdf-list">
        {pdfs.map((pdf, index) => (
          <div key={index} className="pdf-item">
            <span onClick={() => handleSelectPdf(pdf)}>{pdf.name}</span>
            <button onClick={() => handleDownload(pdf)}>Download</button>
          </div>
        ))}
      </div>
      {selectedPdf && (
        <div className="pdf-viewer">
          <h3>Visualizando: {selectedPdf.name}</h3>
          <iframe src={selectedPdf.data} title={selectedPdf.name} width="100%" height="500px" />
        </div>
      )}
    </div>
  );
}

export default Library;
