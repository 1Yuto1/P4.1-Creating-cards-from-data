
fetch("./heroes.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
  })
  .catch((e) => {
    console.log(e);
  });