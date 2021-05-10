var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        //constantly build roads in order to speed up frequented paths
        
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
                creep.say("harvesting");
            }
        }
        else 
        {
            //for making decisions on whether to bring resources to a spawn or an extension
            var spawnarea = Game.spawns['Spawn1'];
            var extensionArea = creep.room.find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_EXTENSION }});
            if(creep.transfer(spawnarea, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE && spawnarea.store.getFreeCapacity(RESOURCE_ENERGY) > 0)
            {
                creep.say("Depositing to spawn");
                creep.moveTo(spawnarea);
            }
            if(creep.transfer(extensionArea, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
            {
                creep.say("Depositing to extension");
                creep.moveTo(extensionArea);
            }
            
            
        }
	}
};

module.exports = roleHarvester;