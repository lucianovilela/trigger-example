function applyExtraSetup(sequelize) {
	 const { listener, trigger, trigger_listener, user } = sequelize.models;
	 listener.hasMany(trigger_listener);
	 trigger.hasMany(trigger_listener);
	 user.hasMany(listener);

}

module.exports = { applyExtraSetup };
