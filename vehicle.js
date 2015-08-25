function vehicle()
{
	this.speed = 0;
	this.aceleration = 0;
	this.acelerate = function(){};
}

function landVehicle(radiusWheel)
{
	var vehicle = new vehicle();
	vehicle.radius = radiusWheel || 10;
	vehicle.acelerate = function(){
		return (2 * Math.PI * radius)*4;
	};

	return vehicle;
}

function airVehicle(power, afterburner)
{
	var vehicle = new vehicle();;
	vehicle.power = power || 1;
	vehicle.afterburner = afterburner || 0;
	vehicle.acelerate = function(){
		if(switchBurner)
		{
			return power*2;
		}
		else
		{
			return power;
		}
	}

	return vehicle;
}

function waterVehicle(fins, propellers, direction)
{
	var vehicle = new vehicle();
	vehicle.direction = direction || 'left';
	vehicle.fins = fins || 1;
	vehicle.propellers = propellers || 1;

	vehicle.acelerate = function ()
	{
		if(direction=='left')
			return propellers-fins;
		if(direction=='right')
			return propellers*fins;
	}
}

function hybridVehicle(wheelsRadius, fins, propellers, direction, switchType)
{
	var vehicle = new vehicle();
	vehicle.type = switchType || 'land';
	vehicle.radius = wheelsRadius || 10;
	vehicle.fins = fins || 1;
	vehicle.propellers = propellers || 1;
	vehicle.direction = direction || 'left';
	
	vehicle.acelerate = function()
	{
		if(vehicle.type =='land')
		{
			return (2 * Math.PI * radius)*4;
		}
		else
		{
			if(direction=='left')
				return -fins*propellers;
			if(direction=='right')
				return propellers*fins;
		}
	}
}
