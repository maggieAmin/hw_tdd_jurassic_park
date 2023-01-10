const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park

  beforeEach(function () {

    park = new Park("Daino Park", 20)
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50)
    


  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, "Daino Park")
  })


  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 20)
  })

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 0)

  })

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur("T-rex")
    park.addDinosaur("Veloceraptor")
    park.addDinosaur("Dilyphosaurus")
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 3)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur("T-rex")
    park.addDinosaur("Veloceraptor")
    park.addDinosaur("Dilyphosaurus")
    park.removeDinosaurByName("Dilyphosaurus")
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const dinosaur = new Dinosaur('t-rex', 'carnivore', 50)
    const dinosaur2 = new Dinosaur('diploducus', 'veggie', 100)
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    const actual = park.getMostAttractiveDinosaur()
    assert.strictEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
