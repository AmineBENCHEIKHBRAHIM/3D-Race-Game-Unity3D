var countMax : int;
private var countDown : int;

function Start(){

	GameStart();
}

function GameStart(){
	var car = gameObject.Find("Arcade Lambo");
	var drivingScript = car.GetComponent("AICar_Script");
	drivingScript.enabled=false;
	car.rigidbody.constraints = RigidbodyConstraints.FreezeAll;
	//car.rigidbody.constraints = RigidbodyConstraints.FreezePositionZ;
	var timer = GetComponent("Timer3");
	timer.enabled = false;
	
	for (countDown = countMax; countDown>-1;countDown--){
	    if(countDown == 0) {
	    
	    } 
	    else
		yield WaitForSeconds(1);
	}

	car.rigidbody.constraints = RigidbodyConstraints.None;
	drivingScript.enabled=true;
    timer.enabled = true;
}