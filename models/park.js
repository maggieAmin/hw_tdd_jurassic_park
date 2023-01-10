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

Park.prototype.getMostAttractiveDinosaur = function(){
    let mostAttractiveDinosaur = this.dinosaurs[0]
    for (const dinosaur in this.dinosaurs){
        if (this.dinosaurs[dinosaur].guestsAttractedPerDay > mostAttractiveDinosaur.guestsAttractedPerDay){
            mostAttractiveDinosaur = this.dinosaurs[dinosaur]
        }
    }
    return mostAttractiveDinosaur
}

Park.prototype.getAllDinosaurOfParticularSpecies = function(species){
    let allDinosaurOfParticularSpecies = []
    for (const dinosaur in this.dinosaurs){
        if (this.dinosaurs[dinosaur].species == species){
            allDinosaurOfParticularSpecies.push(this.dinosaurs[dinosaur])
        }

    }
    return allDinosaurOfParticularSpecies
}

Park.prototype.getTotalGuestsAttractedPerDay = function(){
    let totalGuestsAttractedPerDay = 0
    for (const dinosaur in this.dinosaurs){
        totalGuestsAttractedPerDay += this.dinosaurs[dinosaur].guestsAttractedPerDay

    }
    return totalGuestsAttractedPerDay
}

Park.prototype.getTotalGuestsAttractedPerYear = function(){
    return this.getTotalGuestsAttractedPerDay () * 365

}

Park.prototype.getTotalRevenuePerYear = function() {
    return this.getTotalGuestsAttractedPerYear () * this.ticketPrice
}

module.exports = Park;
