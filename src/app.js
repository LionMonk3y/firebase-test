import "./../styles/styles.css";

import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUe51lh65D2NW5BiyTs16ul_bqzfqTCy4",
  authDomain: "test-firebase-436436.firebaseapp.com",
  projectId: "test-firebase-436436",
  storageBucket: "test-firebase-436436.appspot.com",
  messagingSenderId: "650372017647",
  appId: "1:650372017647:web:b536c7087e4388dd74da1a",
};

// Inicjalizacja FireBase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// // const mojaPupaJson = fetch().then((pupa123) => pupa123.json());
// // mojaPupaJson.then((data) => console.log(data))

// // fetch()
// // .then((pupa123) => pupa123.json())
// // .then((data) => console.log(data));

// // async function mojAsynchronicznaFunkcja() {
// //   const pupa123 = await fetch();
// //   const data = await pupa123.json();
// //   console.log(data);
// // }

// // Przykład wykorzystania Promise

// // fetch("https://reqres.in/api/users")
// //   .then((daneZPromise) => daneZPromise.json())
// //   .then((daneZJson) => console.log(daneZJson.data));

// //   async function myFunc () {
// //     const data = await fetch("https://reqres.in/api/users")
// //     const users = await data.json();
// //     console.log(users.data);
// //   }

// //   myFunc()

// // Wyświetlić zdjęcie dodane na serwer firebase

// const url =
//   "https://firebasestorage.googleapis.com/v0/b/test-firebase-436436.appspot.com/o/test%2Fdev_wallpaper.png?alt=media&token=9c794ee2-9ee2-4d4f-982d-975e427e6e17";

// const img = document.createElement("img");
// img.src = url;
// img.height = 500;
// document.body.appendChild(img);

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // Dodać input do HTML
// // Pobrać wpisaną nazwę z inputa
// // Przekazac jako argument do funkcji
// // Fallback do domyślnej nazwy pliku
// const fileNameInput = document.getElementById("newName");

// // Dodać input do HTML
// // Dodać przycisk do HTML
// // Do przycisku doddac obsluge kliknięcia
// // Jako callback wywołać upload pliku na serwer

// const myButton = document.getElementById("button");
// const headerInfo = document.getElementById("myHeader");

// myButton.addEventListener("click", () => {
//   const file = document.getElementById("myFile").files[0];

//   //Zmiana nazwy pliku na podaną nazwę z input
//   let fileName = file.name;
//   if (fileNameInput.value) {
//     fileName = fileNameInput.value;
//   }

//   // // Ustawiam używanie oryginalnej nazwy pliku
//   const imageRef = ref(storage, fileName);

//   //Pokazuje tekst "Przesyłam" przed wykonaniem funkcji
//   headerInfo.innerText = "Przesyłam!";

//   uploadBytes(imageRef, file).then(() => {
//     //Pokazuje tekst "Przesyłanie zakońcozne" po wykonaniu funkcji
//     headerInfo.innerText = "Przesyłanie zakończone!";
//   });
// });

// //Po przesłaniu zdjęcia wyświetlamy je

// getDownloadURL(imageRef).then((url) => {
//   const img = document.getElementById("myPhoto");
//   img.src = url;
//   img.style.width = "500px";
// });

// // // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // // Pobieranie dynamiczne z firebase storage

// // // Doda input do podawania nazwy obrazka
// // // Dodac przycisk do wyswietlania obrazka
// // // Przekaza nazwe do refa
// // // Wyswietlic blad w headerInfo

// // const myShowFileNameInput = document.getElementById("myShowFileName");
// // const showFileBtn = document.getElementById("showPhotoBtn");

// // showFileBtn.addEventListener("click", () => {
// //   const imageRef = ref(storage, myShowFileNameInput.value);

// //   getDownloadURL(imageRef)
// //     .then((url) => {
// //       const img = document.createElement("img");
// //       img.src = url;
// //       img.style.width = "500px";
// //       document.body.appendChild(img);
// //     })
// //     .catch((ex) => {
// //       headerInfo.innerText = "Stop, yelling! I DONT HAVE PHOTO FOR YOU!";
// //     });
// // });

const storageRef = ref(storage);
listAll(storageRef).then((res) => {
  const myOl = document.getElementById("photoList");
  for (let i = 0; i < res.items.length; i++) {
    const myLi = document.createElement("li");
    const myBtn = document.createElement("button");

    myBtn.innerText = "Show photo!";
    myLi.innerText = res.items[i].name;
    myLi.appendChild(myBtn);

    myOl.appendChild(myLi);

    console.log(res.items[i].name);
  }
});
