//
const playerIdeas = {
    _class: ['Barbarian', 'Bard', 'Cleric','Druid','Fighter','Monk','Paladin','Ranger', 'Rogue', 'Sorcerer','Warlock','Wizzard', 'Artificer'],
    _race: ['DragonBorn','Dwarf','Elf', 'Gnome','Half Elf','Halfling','Human', 'Half Orc', 'Teifling' ],
    _background: ['Acolite','Charlatan','Criminal','Entertainer','Folk Hero','Guild Artisan','Hermit','Noble','Outlander','Sage','Sailor','Soldier','Urchin'],

    _selectFromArray(arr){
        const selection = Math.floor(Math.random() * arr.length);
        return arr[selection];
    },

    get class(){
        return  this._selectFromArray(this._class);
    },
    get race(){
        return  this._selectFromArray(this._race);
    },
    get background(){
        return  this._selectFromArray(this._background);
    },
    generateIdea(){
        console.log(`You should try playing a ${this.race} ${this.class} who started out as a ${this.background}`);
    }
}

playerIdeas.generateIdea();