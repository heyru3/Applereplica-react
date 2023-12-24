import React from 'react'
import ipad from '../../images/icons/new-ipad-logo.png'
function Sectionsix6() {
  return (
    <section className="sixth-heghlight-wrapper bg-white">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 px-1">
          <div className="left-side-wrapper">
            <div className="model">16-inch model</div>
            <div className="product-title-small">MacBook Pro</div>
            <div className="description-wraper">The best for the brightest.</div>
            <div className="links-wrapper">
              <ul>
                <li><a href="">Learn more</a></li>
                <li><a href="">Buy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 px-1">
          <div className="right-side-wrapper">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={ipad} />
              </div>
            </div>
            <div className="description-wraper">
              Like a computer. Unlike any computer.
            </div>
            <div className="links-wrapper">
              <ul>
                <li><a href="">Learn more</a></li>
                <li><a href="">Buy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Sectionsix6
