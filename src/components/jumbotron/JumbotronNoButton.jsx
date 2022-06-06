import React from 'react'

const JumbotronNoButton = () => {
  return (
    <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="pl-7rem">
                <div className="mt-4 p-5 rouded">
                  <h2 className="fw-bold">Sewa &amp; Rental Mobil Terbaik di kawasan Purwokerto</h2>
                  <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
              </div>
            </div> 
            <div className="col-lg-6">
              <img src="./images/img_car.png" className="img-fluid" alt="mobil" />
            </div>
          </div>
        </div>
      </div> 
  )
}

export default JumbotronNoButton