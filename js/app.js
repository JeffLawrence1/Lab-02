'use strict';
//global array to hold pictures
Animal.holdingArray =[];

// constructor
function Animal(animal){
  this.title = animal.title;
  this.imageUrl = animal.image_url;
  this.description = animal.description;
  this.horns = animal.horns;
  this.keyword = animal.keyword;
}


// render prototype




// read json
Animal.readJson = () => {
  $.get('./data/page-1.json')
    .then(animalData => {
      animalData.forEach(animal => {
        Animal.holdingArray.push(new Animal(animal));
      });
    })
    .then(Animal.loadAnimals);
};



//read global array activate render function



//start it off
$(() => Animal.readJson());
