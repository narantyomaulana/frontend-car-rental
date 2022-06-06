import React from 'react'

const Faq = () => {
  return (
    <div className="container" id="faq">
        <div className="row mt-5" >
          <div className="col-md-6 col-sm-12">
            <h4><strong>Frequently Asked Question</strong></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="accordion" id="accordionFlushExample">
              <div className=" accordion-item mb-3">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veniam
                    sequi aliquam dignissimos modi ut! Accusamus culpa libero tenetur qui maiores. Ullam suscipit
                    officia mollitia ratione cupiditate autem pariatur quae.</div>
                </div>
              </div>
              <div className="accordion-item mb-3 border">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    voluptatibus quo eum distinctio sint, similique labore nesciunt obcaecati praesentium assumenda iste
                    accusamus, fugit animi, debitis perferendis? Tempore rerum dignissimos recusandae!</div>
                </div>
              </div>
              <div className="accordion-item mb-3 border">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
                    assumenda! Enim molestias porro exercitationem? Fuga, laboriosam vero sunt blanditiis eius
                    laudantium. Non debitis officiis eveniet dolorem dolorum beatae delectus consectetur!</div>
                </div>
              </div>
              <div className="accordion-item mb-3 border">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illo nihil,
                    explicabo commodi, autem officiis cumque doloremque earum amet quos ullam veniam molestiae
                    consequatur iure quo voluptate similique aspernatur cum!</div>
                </div>
              </div>
              <div className="accordion-item mb-3 border">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, dolorem.
                    Laborum, necessitatibus voluptas. Eum ipsam eaque amet praesentium quia commodi aspernatur inventore
                    voluptates et, distinctio velit, obcaecati quidem, quis deserunt!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Faq
