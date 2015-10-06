static var playerTransform : Transform; //Store the player transform
var lapCheckpoint : GUIText;
function Start () {
	playerTransform = gameObject.Find("Car").transform; //Set the player transform
}

function OnTriggerEnter (other : Collider) {
	//Is it the Player who enters the collider?
	if (!other.CompareTag("Player")) 
		return; //If it's not the player dont continue
		
	//Is this transform equal to the transform of checkpointArrays[currentCheckpoint]?
	if (transform == playerTransform.GetComponent(CarCheckpoint).checkPointArray[CarCheckpoint.currentCheckpoint].transform) {
		//Check so we dont exceed our checkpoint quantity
		if (CarCheckpoint.currentCheckpoint+1 <playerTransform.GetComponent(CarCheckpoint).checkPointArray.length) {
			//Add to currentLap if currentCheckpoint is 0
			if(CarCheckpoint.currentCheckpoint == 0)
				CarCheckpoint.currentLap++;
			CarCheckpoint.currentCheckpoint++;
		} else {
			//If we dont have any Checkpoints left, go back to 0
			CarCheckpoint.currentCheckpoint = 0;
		}
		visualAid(); //Run a coroutine to update the visual aid of our Checkpoints
		
		lapCheckpoint.text = "Checkpoint: "+(CarCheckpoint.currentCheckpoint)+" Lap: "+(CarCheckpoint.currentLap);
		
	}
}

function visualAid () {
	//Set a simple visual aid for the Checkpoints
	for (objAlpha in playerTransform.GetComponent(CarCheckpoint).checkPointArray) {
		objAlpha.renderer.material.color.a = 0.2;
	}
	playerTransform.GetComponent(CarCheckpoint).checkPointArray[CarCheckpoint.currentCheckpoint].renderer.material.color.a = 0.8;
}