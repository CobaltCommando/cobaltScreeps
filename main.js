var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
// var harvesterNeccessary = Game.room.pos.findInRange();
/*objectives
make all roles be able to find the resource that others are not harvesting
function for harvesting?(since all of them harvest it may be more efficient)
?fix? upgraders so that they make roads as they go along to upgrade the room controller
better spawning mechanics
guard code that patrol near the sides and attack anything it comes near
add comments to explain everything(you're really stupid)
*/
//Test

//var currentController = Room.find(FIND_STRUCTURES, { filter: {structureType: STRUCTURE_CONTROLLER} });

module.exports.loop = function () {
    //this happens every game tick

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existent creep memory:'+name);
        }
    }
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

    if (repairers.length < 4)
    {
        if (harvesters.length < 4) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role : 'harvester'});
        }
        if (upgraders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role : 'upgrader'});
        }
        if (builders.length < 2) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role : 'builder'});
        }
        if (repairers.length < 1) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role : 'repairer'});
        }
    }
    else
    {
        console.log("Advanced section reached");
        if (harvesters.length < 6) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role : 'harvester'});
        }
        if (upgraders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role : 'upgrader'});
        }
        if (builders.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role : 'builder'});
        }
        if (repairers.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role : 'repairer'});
        }
    }


//hi


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        creep.createConstructionSite
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
    }
}
