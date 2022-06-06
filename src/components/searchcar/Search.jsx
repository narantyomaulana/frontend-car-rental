import { useEffect, useState } from "react";
import SearchCar from "./SearchCar";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux";


const Search = () => {
  const [typeDriver, setType] = useState("Pilih Tipe Driver");
  const [date, setDate] = useState("Pilih Waktu");
  const [pickupTime, setPickupTime] = useState(null);
  const [passenger, setPassenger] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeDriver !== "Pilih Tipe Driver") {
      const pass = passenger ? passenger : "0";
      const filter = { typeDriver, date, pickupTime, pass };
      dispatch(fetchUser(filter));
    }
  };

  const handleTypeDriver = (event) => {
    setType(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handlePickupTime = (event) => {
    setPickupTime(event.target.value);
  };
  const handlePassenger = (event) => {
    setPassenger(event.target.value);
  };

  useEffect(() => {
    console.log(state.cars);
  }, [state]);

  return (
    <div>
      {/* Search Bar */}
      <div className="container" style={{marginTop: '-65px'}}>
        <div id="searchColumn" className="card-search card p-2">
        <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-box search-bar">
                <div className="col mb-3">
                  <label style={{fontSize: 'small'}}>Tipe Driver</label>
                  <select value={typeDriver} required onChange={handleTypeDriver} name="typeDriver" className="form-select">
                    <option selected>Pilih Tipe Driver</option>
                    <option value= "With Driver">Dengan Sopir</option>
                    <option value= "Keyless Entry">Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col mb-3">
                  <label style={{fontSize: 'small'}}>Tanggal</label>
                  <input onChange={handleDate} required type="date" placeholder="Pilih Waktu" id="date" name="date" className="form-control" />
                </div>
                <div className="col mb-3">
                  <label style={{fontSize: 'small'}}>Waktu Jemput/Ambil</label>
                  <select value={pickupTime} type="date" onChange={handlePickupTime} className="form-select time" name="time" id="time">
                    <option value={null}>--.--</option>
                    <option value="8">08.00 WIB</option>
                    <option value="9">09.00 WIB</option>
                    <option value="10">10.00 WIB</option>
                    <option value="11">11.00 WIB</option>
                    <option value="12">12.00 WIB</option>
                    <option value="13">13.00 WIB</option>
                  </select>
                </div>
                <div className="col mb-3">
                  <label style={{fontSize: 'small'}}>Jumlah Penumpang(optional)</label>
                  <input value={passenger} onChange={handlePassenger} type="text" placeholder="Pilih Penumpang" name="passenger" id="penumpang" className="form-control" />
                </div>
                <div className="col">
                  <button className="btn-rent-car">Cari Mobil</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {state.cars && <SearchCar cars={state.cars} />}
    </div>
  )
}

export default Search

