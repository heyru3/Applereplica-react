import React from 'react'
import mac from  '../../images/home/macbookair-new-sm.jpg';
const Sectionone = () => {
  return (
    <>
      <section className="top-50">
      <div className="container-fluid">
        <div className="text-center py-3">
          <div className="model black">16-inch model</div>
          <div className="product-title black">MacBook Pro</div>
          <div className="brief-description black">The best for the brightest.</div>
          <div className="links-wrapper py-3">
            <ul className="list-unstyled">
              <li><a href="">Learn more</a></li>
              <li><a href="">Buy</a></li>
            </ul>
          </div>
          <div className="main-image-wrapper">
            <img src={mac} />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Sectionone
