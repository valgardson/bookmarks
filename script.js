@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

:root {
  --primary-color: rgb(61,25,100);
  --background-div-color: rgb(192, 33, 216, 0.1);
  --background-div-hover-color: rgba(0, 0, 0, 0.2);
  --background-overlay: rgb(0,0,0,.2);
  --border-radius: 5px;
}

html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Karla, sans-serif;
  font-size: .85rem;
  min-height: 100vh;
  background-image: url('./planets.png');
  background: linear-gradient(to top, var(--background-overlay),
   var(--background-overlay)),
   url('./planets.png') no-repeat top center;
  background-size: cover;
  position: relative;
}

.bookmark-grid {
  justify-content: center;
  align-items: center;
  flex-flow: row wrap; 
  max-width: 700px;
  /* margin: auto auto; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: red solid 5px; */
}

.add-bookmark-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  /* background: var(--background-div-color); */
  border-radius: var(--border-radius);
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  height: 20px;
  width: 100px;
  margin: 20px auto;
  user-select: none;
}

.add-bookmark-container:hover {
  background: var(--background-div-hover-color);
}

/* Bookmars */
.container {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  
}

.bookmark-container {
  height: 4.75rem;
  width: 5.25rem;
  border-radius: 5px;
  padding: 5px 5px;
  cursor: pointer;
  /* background: var(--background-div-color); */
}

.bookmark-container:hover {
  background-color: var(--background-div-hover-color);
}

.item {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center; 
  margin: auto;
  z-index: -2;
  margin-top:-.625rem;
}



.x-container {
  display: flex;
  justify-content: right;
  margin: 5px 5px -5px 0px;
}

.fa-xmark {
  cursor: pointer;
  color:rgb(222, 222, 222, 0);
  z-index: 2;
  transition: .5s ease-in-out;
}

.bookmark-container:hover .fa-xmark {
  color:rgb(222, 222, 222, .7);
}

.fa-xmark:hover {
  z-index: 5;
  /* TODO: change when hover directly over x? */
  /* transform: rotate(90deg); */
}

a:link,
a:visited {
  color: white;
  text-decoration: none;
}

.fav-circle {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: whitesmoke;
  margin: 0px auto 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fav-circle img {
  height: 1.2rem;

}

.name {
  /* margin: auto; */
  white-space:nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* modal */
.modal-container {
  background: rgb(0, 0, 0, .3);
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.show-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  max-width: 95%;
  width: 500px;
  animation: modalopen 1.5s;
}

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* close-icon effects all the x on modal and bookmark items
I should rename them or specify closer what these are. 
That is why I used the id close-modal to fix up the modal close-icon */
.close-icon {
  float: right;
  font-size: .8rem;
  position: relative;
  top: -.3rem;
  right: -0.1rem;
  cursor: pointer;
}

.bookmark-container .close-icon:hover {
  /* filter: brightness(130%);  */
  color: white;
}

#close-modal {
  float: right;
  font-size: 1rem;
  position: relative;
  top: 0.3rem;
  right: 0.5rem;
  cursor: pointer; 
}

.modal-header {
  background: var(--primary-color);
  color: white;
  padding: .9rem 1.25rem;
}

h3 {
  margin: 0;
}

.modal-content {
  padding: 1.25rem;
  background: whitesmoke;
}

/* Form */
.form-group {
  height: 55px;
}

.form-input {
  width: 97%;
  padding: 5px;
  border: 2px solid var(--primary-color);
  display: block;
  outline: none;
}

.form-label {
  color: var(--primary-color);
  display: block;
}

button {
  cursor: pointer;
  color: white;
  background: var(--primary-color);
  height: 1.875rem;
  width: 6.25rem;
  border: none;
  border-radius: var(--border-radius);
  margin-top: 10px;
}

button:hover {
  filter: brightness(115%);
}

button:focus {
  outline: none;
}
