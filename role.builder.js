var roleBuilder = {
    run: function(creep) {
        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('Harvesting');
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('Building');
        }
        if (creep.memory.building) {
            var buildSites = creep.room.find(FIND_CONSTRUCTION_SITES);
            //pls work
            if (buildSites.length) {
                if (creep.build(buildSites[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(buildSites[0]);
                }
            }
        }
        else {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }
    }

};

module.exports = roleBuilder;