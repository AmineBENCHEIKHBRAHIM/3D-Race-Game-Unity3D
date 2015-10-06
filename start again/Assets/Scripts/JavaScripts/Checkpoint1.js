static var playerTransform : Transform; //Store the player transform

function Start () {
	playerTransform = gameObject.Find("AICar").transform; //Set the player transform
}

function OnTriggerEnter (other : Collider) {
	//Is it the Player who enters the collider?
	if (!other.CompareTag("AICar")) 
		return; //If it's not the player dont continue
		
	//Is this transform equal to the transform of checkpointArrays[currentCheckpoint]?
	if (transform == playerTransform.GetComponent(CarCheckpoint1).checkPointArray[CarCheckpoint1.currentCheckpoint].transform) {
		//Check so we dont exceed our checkpoint quantity
		if (CarCheckpoint1.currentCheckpoint+1 <playerTransform.GetComponent(CarCheckpoint1).checkPointArray.length) {
			//Add to currentLap if currentCheckpoint is 0
			if(CarCheckpoint1.currentCheckpoint == 0)
				CarCheckpoint1.currentLap++;
			CarCheckpoint1.currentCheckpoint++;
		} else {
			//If we dont have any Checkpoints left, go back to 0
			CarCheckpoint1.currentCheckpoint = 0;
		}
		
		
	}
}
