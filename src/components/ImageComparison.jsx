import React from 'react';
import './ImageComparison.css';

const ImageComparison = () => {
  const pairs = [
    { id: 1, imgB: '/o2.jpeg', imgA: '/o1.jpeg', title: 'Air Duct Vent', type: 'split' },
    { id: 2, imgB: '/03.jpeg', imgA: '/04.jpeg', title: 'Air Filter Grill', type: 'split' },
    { id: 3, imgB: '/vv.jpeg', imgA: '/mm.jpeg', title: 'Dryer Vent Cover', type: 'split' },
  
  ];

  return (
    <section className="results-section">
      <div className="results-container">
        <h2 className="results-header">Real Killeen Results</h2>
        <div className="results-grid">
          {pairs.map((p) => (
            <div key={p.id} className="result-card">
              <div className="image-wrapper">
                {p.type === 'split' ? (
                  <>
                    <div className="image-box">
                      <img src={p.imgB} alt="Before" className="result-img" />
                      <span className="label-tag before-tag">BEFORE</span>
                    </div>
                    <div className="image-box">
                      <img src={p.imgA} alt="After" className="result-img" />
                      <span className="label-tag after-tag">AFTER</span>
                    </div>
                  </>
                ) : (
                  <div className="image-box full-card">
                    <img src={p.imgFull} alt="Full Result" className="result-img" />
                    {/* Agar single image pe bi label chahiye to yahan add kar sakte hain */}
                  </div>
                )}
              </div>
              <div className="card-footer">
                <h3 className="result-title">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageComparison;