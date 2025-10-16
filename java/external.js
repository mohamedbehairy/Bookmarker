// standard For Api GetData

// let allData = [];

// async function getData(type) {
//   let res = await fetch(`https://ecommerce.routemisr.com/api/v1/${type}`);
//   let all = await res.json();
//   allData = all.data;
//   let p = ``;
//   for (let i = 0; i < allData.length; i++) {
//     p += `
//                  <div class="col-sm-12 col-md-4 col-lg-3">
//                     <h2>${allData[i].title}</h2>
//                     <img src="${allData[i].imageCover}" alt="${allData[i].title}" class="img-thumbnail">
//                     <p>${allData[i].description}</p>
//                     <p>Price: ${allData[i].price} EGP</p>
//                 </div>
//          `;
//   }

//   document.querySelector(".row").innerHTML = p;
// }

// // (async function () {
// //   await getData("products");
// // })();

// (async function () {
//   await getData("products")
//     .then(() => console.log("OK"))
//     .catch(() => console.log("Error"));
// })();


// --------------------------------------------------------------------------------------------------------------



// let allData = [];
// let data = {
//   userId: 1,
//   title: "omar",
//   body: "This is fantastic",
// };

// async function sendData(type) {
//   let res = await fetch(`https://jsonplaceholder.typicode.com/${type}`, {
//     method: "POST",
//     headers: { "Content-Type": "Application/json" },
//     body: JSON.stringify(data),
//   });
//   let finalRes = await res.json();
//   console.log(finalRes);
// }

// (async function () {
//   await sendData("posts")
//     .then(() => console.log("OK"))
//     .catch(() => console.log("Error"));
// })();
