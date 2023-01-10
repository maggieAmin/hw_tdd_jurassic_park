const Park = function(name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.numberOfDinosaurs = function (){
    return this.dinosaurs.length
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaurByName = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(indexOfDinosaur, 2)
}

module.exports = Park;
