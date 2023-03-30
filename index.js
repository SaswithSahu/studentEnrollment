let container = document.getElementById("students-enrollment-container");

let enrollButton = document.getElementById("enroll-button");
let clearButton = document.getElementById("clear-button");

let nameElement = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailElement = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let websiteElement = document.getElementById("website");
let websiteErrMsgEl = document.getElementById("websiteErrMsg");

let imageLinkElement = document.getElementById("imageLink");
let imageLinkErrMsgEl = document.getElementById("imageLinkErrMsg");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

const tableElement = document.getElementById("tableElement");

let htmlEl = document.getElementById("html");
let cssEl = document.getElementById("css");
let jsEl = document.getElementById("js");

let myFormEl = document.getElementById("myForm");

nameElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
});

websiteElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    websiteErrMsgEl.textContent = "Required*";
  } else {
    websiteErrMsgEl.textContent = "";
  }
});

imageLinkElement.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    imageLinkErrMsgEl.textContent = "Required*";
  } else {
    imageLinkErrMsgEl.textContent = "";
  }
});

function validateFormData() {
  if (nameElement.value === "") {
    nameErrMsgEl.textContent = "Required*";
  }
  if (emailElement.value === "") {
    emailErrMsgEl.textContent = "Required*";
  }
  if (websiteElement.value === "") {
    websiteErrMsgEl.textContent = "Required*";
  }
  if (imageLinkElement.value === "") {
    imageLinkErrMsgEl.textContent = "Required*";
  }
}

function enrollStudentData() {
  const tableRow = document.createElement("tr");
  tableElement.appendChild(tableRow);

  const tableData = document.createElement("td");
  tableData.setAttribute("class", "d-flex flex-column justify-content-start");
  tableData.style.border = "0px";
  tableRow.appendChild(tableData);

  const nameEl = document.createElement("p");
  nameEl.textContent = nameElement.value;
  tableData.style.textAlign = "start";
  tableData.style.paddingLeft = "5px";
  tableData.appendChild(nameEl);

  const url = document.createElement("a");
  url.href = websiteElement.textContent;
  url.textContent = websiteElement.value;
  url.target = "_blank";
  tableData.appendChild(url);

  if (genderFemaleEl.checked) {
    const genderEl = document.createElement("p");
    genderEl.textContent = "Female";
    tableData.appendChild(genderEl);
  }

  if (genderMaleEl.checked) {
    const genderEl = document.createElement("p");
    genderEl.textContent = "Male";
    tableData.appendChild(genderEl);
  }

  if (htmlEl.checked) {
    const skill1 = document.createElement("p");
    skill1.textContent = "HTML";
    tableData.appendChild(skill1);
  }
  if (cssEl.checked) {
    const skill2 = document.createElement("p");
    skill2.textContent = "CSS";
    tableData.appendChild(skill2);
  }
  if (jsEl.checked) {
    const skill3 = document.createElement("p");
    skill3.textContent = "Java Script";
    tableData.appendChild(skill3);
  }

  const tableData1 = document.createElement("td");
  tableRow.appendChild(tableData1);

  const photo = document.createElement("img");
  photo.src = imageLinkElement.value;
  photo.style.height = "120px";
  photo.style.width = "120px";
  tableData1.appendChild(photo);
}
myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validateFormData();
  enrollStudentData();
});
