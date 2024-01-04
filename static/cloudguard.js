window.onload = () => {
  console.log("Page loaded");
    const serachValue = document.getElementById("searchBox").value;
    const data = {
            "text":serachValue+""
        }
  const generateProgram = (data) => {
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
  };
};
