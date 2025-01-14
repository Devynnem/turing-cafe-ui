 const getData = () => {
    return fetch("http://localhost:3001/api/v1/reservations")
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`)
        } else {
          console.log(response.json)
          return response.json();
        }
      })
  };

  export default getData;
