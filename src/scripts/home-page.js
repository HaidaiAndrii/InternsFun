import {Index} from "./index";


const app = new Index();

app.init().then( (data) => {
  const mainContent = document.querySelector('.main-content');

  console.log('init Home page');

  mainContent.insertAdjacentHTML('afterbegin', `<h1>Hello world, Prod is ${prod}, endpoint is ${endpoint}</h1>`);
});
