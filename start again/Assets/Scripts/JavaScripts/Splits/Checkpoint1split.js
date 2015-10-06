static var playerTransform : Transform; //Store the player transform
var lapCheckpoint : GUIText;
function Start () {
	playerTransform = gameObject.Find("Car1").transform; //Set the player transform
}

function OnTriggerEnter (other : Collider) {
	//Is it the Player who enters the collider?
	if (!other.CompareTag("Player1")) 
		return; //If it's not the player dont continue
		
	//Is this transform equal to the transform of checkpointArrays[currentCheckpoint]?
	if (transform == playerTransform.GetComponent(CarCheckpoint1split).checkPointArray[CarCheckpoint1split.currentCheckpoint].transform) {
		//Check so we dont exceed our checkpoint quantity
		if (CarCheckpoint1split.currentCheckpoint+1 <playerTransform.GetComponent(CarCheckpoint1split).checkPointArray.length) {
			//Add to currentLap if currentCheckpoint is 0
			if(CarCheckpoint1split.currentCheckpoint == 0)
				CarCheckpoint1split.currentLap++;
			CarCheckpoint1split.currentCheckpoint++;
		} else {
			//If we dont have any Checkpoints left, go back to 0
			CarCheckpoint1split.currentCheckpoint = 0;
		}
		visualAid(); //Run a coroutine to update the visual aid of our Checkpoints
		
		lapCheckpoint.text = "Checkpoint: "+(CarCheckpoint1split.currentCheckpoint)+" Lap: "+(CarCheckpoint1split.currentLap);
		
	}
}

function visualAid () {
	//Set a simple visual aid for the Checkpoints
	for (objAlpha in playerTransform.GetComponent(CarCheckpoint1split).checkPointArray) {
		objAlpha.renderer.material.color.a = 0.2;
	}
	playerTransform.GetComponent(CarCheckpoint1split).checkPointArray[CarCheckpoint1split.currentCheckpoint].renderer.material.color.a = 0.8;
}