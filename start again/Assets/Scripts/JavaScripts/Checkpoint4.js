static var playerTransform : Transform; //Store the player transform

function Start () {
	playerTransform = gameObject.Find("Charger").transform; //Set the player transform
}

function OnTriggerEnter (other : Collider) {
	//Is it the Player who enters the collider?
	if (!other.CompareTag("Charger")) 
		return; //If it's not the player dont continue
		
	//Is this transform equal to the transform of checkpointArrays[currentCheckpoint]?
	if (transform == playerTransform.GetComponent(CarCheckpoint4).checkPointArray[CarCheckpoint4.currentCheckpoint].transform) {
		//Check so we dont exceed our checkpoint quantity
		if (CarCheckpoint4.currentCheckpoint+1 <playerTransform.GetComponent(CarCheckpoint4).checkPointArray.length) {
			//Add to currentLap if currentCheckpoint is 0
			if(CarCheckpoint4.currentCheckpoint == 0)
				CarCheckpoint4.currentLap++;
			CarCheckpoint4.currentCheckpoint++;
		} else {
			//If we dont have any Checkpoints left, go back to 0
			CarCheckpoint4.currentCheckpoint = 0;
		}
		
		
	}
}
