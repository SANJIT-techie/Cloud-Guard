// window.onload = () => {

function generateProgram(e) {
  e.preventDefault();
  let serachValue = document.getElementById("searchBox").value;
  let data = {
    text: serachValue + "",
  };

  axios
    .post(
      "https://urban-chainsaw-9gqp4p59gv729pvx-5000.app.github.dev/askme",
      data
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error making API request:", error);
    });
}
