static var playerTransform : Transform; //Store the player transform

function Start () {
	playerTransform = gameObject.Find("AICARPeugeot").transform; //Set the player transform
}

function OnTriggerEnter (other : Collider) {
	//Is it the Player who enters the collider?
	if (!other.CompareTag("AICARPeugeot")) 
		return; //If it's not the player dont continue
		
	//Is this transform equal to the transform of checkpointArrays[currentCheckpoint]?
	if (transform == playerTransform.GetComponent(CarCheckpoint2).checkPointArray[CarCheckpoint2.currentCheckpoint].transform) {
		//Check so we dont exceed our checkpoint quantity
		if (CarCheckpoint2.currentCheckpoint+1 <playerTransform.GetComponent(CarCheckpoint2).checkPointArray.length) {
			//Add to currentLap if currentCheckpoint is 0
			if(CarCheckpoint2.currentCheckpoint == 0)
				CarCheckpoint2.currentLap++;
			CarCheckpoint2.currentCheckpoint++;
		} else {
			//If we dont have any Checkpoints left, go back to 0
			CarCheckpoint2.currentCheckpoint = 0;
		}
		
		
	}
}
