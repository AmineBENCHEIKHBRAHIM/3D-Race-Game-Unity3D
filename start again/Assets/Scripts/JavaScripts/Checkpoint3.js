static var playerTransform : Transform; //Store the player transform

function Start () {
	playerTransform = gameObject.Find("Arcade Lambo").transform; //Set the player transform
}

function OnTriggerEnter (other : Collider) {
	//Is it the Player who enters the collider?
	if (!other.CompareTag("Arcade Lambo")) 
		return; //If it's not the player dont continue
		
	//Is this transform equal to the transform of checkpointArrays[currentCheckpoint]?
	if (transform == playerTransform.GetComponent(CarCheckpoint3).checkPointArray[CarCheckpoint3.currentCheckpoint].transform) {
		//Check so we dont exceed our checkpoint quantity
		if (CarCheckpoint3.currentCheckpoint+1 <playerTransform.GetComponent(CarCheckpoint3).checkPointArray.length) {
			//Add to currentLap if currentCheckpoint is 0
			if(CarCheckpoint3.currentCheckpoint == 0)
				CarCheckpoint3.currentLap++;
			CarCheckpoint3.currentCheckpoint++;
		} else {
			//If we dont have any Checkpoints left, go back to 0
			CarCheckpoint3.currentCheckpoint = 0;
		}
		
		
	}
}
