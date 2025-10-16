var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var sites = JSON.parse(localStorage.getItem("Sites")) || [];
displaySites();

function addSite() {
  //$ -----------------------------Check Validation----------------------

  let errors = validation();
  if (Object.keys(errors).length) {
    var alertError = Object.values(errors);
    var sweetAlerts = alertError
      .map(function (err) {
        return `<p class="fw-bolder text-danger">- ${err} !!</p>`;
      })
      .join("");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html: `${sweetAlerts}`,
      footer: "Please Enter Valid Inputs And Try Again .",
    });
    return;
  }

  //# ----------------------------Check Url------------------------------------------
  if (
    !siteUrl.value.startsWith("http://") &&
    !siteUrl.value.startsWith("https://")
  ) {
    siteUrl.value = `https://${siteUrl.value}`;
  }

  var site = {
    name: siteName.value,
    url: siteUrl.value,
  };
  sites.push(site);
  displaySites();
  updateLocalStoage();
  clearForm();
  console.log(site.url, `Url`);
}
function displaySites(arr = sites) {
  var htmlMarkup = ``;
  for (let i = 0; i < arr.length; i++) {
    htmlMarkup += `
              <tr>
                <td><span class="index-badge">${i + 1}</span></td>
                <td>${arr[i].name}</td>
                <td>
                  <a
                    href="${arr[i].url}"
                    target="_blank"
                    class="btn btn-visit text-decoration-none text-white"
                  >
                    <i class="fas fa-eye pe-1"></i> Visit
                  </a>
                </td>

                <td>
                  <button class="btn btn-delete" onclick="deleteSite(${i})">
                    <i class="fas fa-trash pe-1"></i> Delete
                  </button>
                </td>
              </tr>
              `;
  }

  document.getElementById("table-row").innerHTML = htmlMarkup;
}

function clearForm() {
  siteName.value = null;
  siteUrl.value = null;
}

function updateLocalStoage() {
  localStorage.setItem("Sites", JSON.stringify(sites));
}

function deleteSite(index) {
  sites.splice(index, 1);
  updateLocalStoage();
  displaySites();
}

function validation() {
  var errors = {};
  var regex = {
    name: /^\w{1}.{2,15}$/,
    url: /^(https?:\/\/)?(www\.)?\w+\.com$/i,
  };
  if (!regex.name.test(siteName.value.trim())) {
    errors.name = "Name must be at least 3 characters";
  }
  if (!regex.url.test(siteUrl.value.trim())) {
    errors.url = `Url Invalid`;
  }
  return errors;
}
