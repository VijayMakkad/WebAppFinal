import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('descriptionContent');
  const [imgId, setImgId] = useState(1);

  useEffect(() => {
    const defaultTab = document.querySelector('.tab-item.active');
    const defaultContent = document.querySelector('.tab-content.active');
    if (defaultTab) defaultTab.classList.add('active');
    if (defaultContent) defaultContent.style.display = 'block';
    document.getElementById('tabDivider').style.backgroundColor = 'yellow';
  }, []);

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  const slideImage = () => {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
  };

  useEffect(() => {
    window.addEventListener('resize', slideImage);
    slideImage();
    return () => {
      window.removeEventListener('resize', slideImage);
    };
  }, [imgId]);

  return (
    <div className="container tab-section" style={{ marginTop: '2rem' }}>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column align-items-start">
            <div className="d-flex align-items-center gap-3 mb-2">
              {['Description', 'Additional Information', 'Review'].map((tab, index) => (
                <div
                  className={`tab-item ${activeTab === `${tab.toLowerCase().replace(' ', '')}Content` ? 'active' : ''}`}
                  onClick={() => showTab(`${tab.toLowerCase().replace(' ', '')}Content`)}
                  key={index}
                  style={{ cursor: 'pointer', fontSize: '1rem', color: '#ffffff', opacity: '0.7', transition: 'opacity 0.2s ease' }}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="tab-divider active" id="tabDivider" style={{ height: '3px', backgroundColor: '#000', width: '100%', margin: '0.5rem', transition: 'background-color 0.2s ease' }}></div>
            {['descriptionContent', 'additionalInfoContent', 'reviewContent'].map((tabId, index) => (
              <div className={`tab-content ${activeTab === tabId ? 'active' : ''}`} id={tabId} key={index} style={{ display: activeTab === tabId ? 'block' : 'none', padding: '1rem 0', margin: '0.5rem' }}>
                {tabId === 'descriptionContent' && (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
                  </p>
                )}
                {tabId === 'additionalInfoContent' && (
                  <p>Additional information about the product goes here.</p>
                )}
                {tabId === 'reviewContent' && (
                  <p>Reviews from customers will be displayed here.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabSection;
