import { useEffect } from 'react';
import unitedstatesItems from './unitedstatesItems.json';

function useScript(src) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
}

const UnitedStates = () => {
  useScript('/assets/js/main-useScript.js');

  const handleFilterClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top
    });
  };
  
  return (
    <>
      {/* UnitedStates Section */}
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <h2>USA</h2>
          {/* <p>Discovering New Horizons</p> */}
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter=".filter-california" data-layout="masonry" data-sort="original-order">
            <ul className="gallery-filters isotope-filters sticky-filters" data-aos="fade-up" data-aos-delay="100">
              {/* <li data-filter="*" className="filter-active">All</li> */}
              <li data-filter=".filter-arizona" onClick={handleFilterClick}>Arizona</li>
              <li data-filter=".filter-california" onClick={handleFilterClick} className="filter-active">California</li>
              <li data-filter=".filter-georgia" onClick={handleFilterClick}>Georgia</li>
              <li data-filter=".filter-hawaii" onClick={handleFilterClick}>Hawaii</li>
              <li data-filter=".filter-nevada" onClick={handleFilterClick}>Nevada</li>
              <li data-filter=".filter-utah" onClick={handleFilterClick}>Utah</li>
              <li data-filter=".filter-washington" onClick={handleFilterClick}>Washington</li>
              <li data-filter=".filter-wyoming" onClick={handleFilterClick}>Wyoming</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {unitedstatesItems.map((item, index) => (
                <div key={index} className={`col-lg-3 col-md-4 col-sm-6 gallery-item isotope-item ${item.filter}`}>
                {/* <div key={index} className={`col-lg-2 col-md-3 col-sm-4 gallery-item isotope-item ${item.filter}`}> */}
                  {/* Lazy load the image */}
                  <img src={item.src} loading="lazy" className="img-fluid" alt={item.title} />
                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.src} title={item.title} data-gallery={item.gallery} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    {/* <a href="gallery-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UnitedStates;