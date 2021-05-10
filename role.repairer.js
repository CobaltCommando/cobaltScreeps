/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.repairer');
 * mod.thing == 'a thing'; // true
 */

var roleRepairer = {
    
    run: function(creep) 
    {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        } else
        {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_ROAD || structure.structureType == STRUCTURE_WALL) &&
                            structure.hits < structure.hitsMax;
                    }
            });
            if(targets.length > 0) {
                if(creep.repair(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
        }
        
        
    }
    
    
    
}
};


module.exports = roleRepairer;