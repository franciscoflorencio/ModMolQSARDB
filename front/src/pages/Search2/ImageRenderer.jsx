import React from 'react';

const ImageRenderer = (props) => {
  // Get the SMILES string from the row data
  const smiles = props.data.smiles;
  
  if (!smiles) return <div>No Structure</div>;

  // URL-encode the SMILES and create the image URL
  const encodedSmiles = encodeURIComponent(smiles);

  // Use the PubChem REST API to generate the image
  //const imageUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${encodedSmiles}/PNG?record_type=2d`;

  // Use the CACTUS API to generate the image
  const imageUrl = `https://cactus.nci.nih.gov/chemical/structure/${encodedSmiles}/image`;

  return (
    <div className="molecule-image">
      <img 
        src={imageUrl} 
        alt={`Chemical structure of ${smiles}`}
        style={{ maxWidth: '100px', maxHeight: '100px' }}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = 'fallback-image.png'; // Optional fallback image
        }}
      />
    </div>
  );
};

export default ImageRenderer;
