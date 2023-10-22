let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let r = radius.value;

function volume_sphere() {
    //Write your code here
  return (4/3)*Math.PI*r*r*r;
} 


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

volume.value = volume_sphere();
