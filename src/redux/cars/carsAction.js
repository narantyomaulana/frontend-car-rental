const fetchCarsSuccess = (cars) => {
  return {
    type: "FETCH_CARS_SUCCESS",
    payload: cars,
  };
};
const fetchCarsRequest = () => {
  return {
    type: "FETCH_CARS_REQUEST",
  };
};
const fetchCarsFailure = (error) => {
  return {
    type: "FETCH_CARS_FAILURE",
    payload: error,
  };
};

const fetchUser = (filter) => {
  return (dispatch) => {
    dispatch(fetchCarsRequest);
    fetch("http://localhost:8080/api/v1/filter", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(filter),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw Error("Fetch Error");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(fetchCarsSuccess(data));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchCarsFailure(errorMsg));
      });
  };
};

export default fetchUser;
