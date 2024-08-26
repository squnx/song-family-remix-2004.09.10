
const Events = () => {
  return (
    <>
      <h1>Our Events Page</h1>
      <p>Welcome to the Events page!</p>
      {/* Events Section */}
      {/* <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Events</h2>
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="gallery-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-baseball">Baseball</li>
              <li data-filter=".filter-family">Family</li>
              <li data-filter=".filter-friends">Friends</li>
              <li data-filter=".filter-golf">Golf</li>
              <li data-filter=".filter-home">Home</li>
              <li data-filter=".filter-school">School</li>
              <li data-filter=".filter-soccer">Soccer</li>
              <li data-filter=".filter-swimming">Swimming</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {eventsItems.map((item, index) => (
                <div key={index} className={`col-lg-3 col-md-4 col-sm-6 gallery-item isotope-item ${item.filter}`}>
                  <img src={item.src} className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.src} title={item.title} data-gallery={item.gallery} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Events