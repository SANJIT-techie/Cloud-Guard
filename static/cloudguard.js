allPres = document.getElementsByTagName("pre");
for (let i = 0; i < allPres.length; i++) {
  allPres[i].style.display = "none";
}

function generateProgram(e) {
  e.preventDefault();
  let serachValue = document.getElementById("searchBox").value;
  let data = {
    text: serachValue + "",
  };

  axios
    .post(
      "http://127.0.0.1:5000/askme",
      data
    )
    .then((response) => {
      console.log(response.data.res);

      const portalString = response.data.res.Portal;

      const terminalString = response.data.res.terminal;

      const terraformString = JSON.stringify(
        response.data.res.terraform,
        null,
        2
      );

      const referencesString = JSON.stringify(
        response.data.res.references,
        null,
        2
      );

      document.getElementById("portal").innerHTML = portalString.replace(
        /\n/g,
        "<br>"
      );

      document.getElementById("terminal").innerHTML = terminalString;

      document.getElementById("terraform").innerText = terraformString;

      document.getElementById("references").innerText = referencesString;
    })
    .catch((error) => {
      console.error("Error making API request:", error);
    });

  tabContent = document.getElementsByClassName("tabcontent");
  tabContent[0].style.display = "block";
  tabContent[0].parentElement.style.display = "block";
  tabContent[0].className += " active";
}

function openTab(event, tabName) {
  let i, tabContent, tablinks;
  tabContent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].parentElement.style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).parentElement.style.display = "block";

  event.currentTarget.className += " active";
  console.log(event.currentTarget);
}
