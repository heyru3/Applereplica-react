import React from 'react'
import appleTv from '../../images/icons/apple-tv-logo.png'
import servant from  '../../images/icons/servant-logo.png'
const SectionFive = () => {
  return (
    <section className="fifth-heghlight-wrapper bg-white">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-1">
            <div className="left-side-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={appleTv} />
                </div>
              </div>
              <div className="tvshow-logo-wraper">
                <img src={servant} />
              </div>
              <div className="watch-more-wrapper">
                <a href="#">Watch the trailer</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 px-1">
            <div className="right-side-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">AirPods Pro</div>
              </div>
              <div className="description-wraper">
                Magic like you’ve never heard.
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
export default SectionFive
