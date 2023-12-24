import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import  '../../../css/style.css'
const Message = ({text}) => {
    return (
      <div>
      <section className="internal-page-wrapper top-400 bottom-100 ">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">{text}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
export default Message
