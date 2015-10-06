var guiCountDown : GUIText;
var countMax : int;
private var countDown : int;

function Start(){

	guiCountDown.enabled=true;
	GameStart();
}

function GameStart(){
	var car = gameObject.Find("Car");
	var drivingScript = car.GetComponent("Carsplit");
	drivingScript.enabled=false;
	car.rigidbody.constraints = RigidbodyConstraints.FreezeAll;
	/*var car1 = gameObject.Find("Car1");
	var drivingScript1 = car1.GetComponent("Car1");
	drivingScript1.enabled=false;
	car1.rigidbody.constraints = RigidbodyConstraints.FreezeAll;*/
	//car.rigidbody.constraints = RigidbodyConstraints.FreezePositionZ;
	var timer = GetComponent("Timersplit");
	timer.enabled = false;
	
	
	for (countDown = countMax; countDown>-1;countDown--){
	    if(countDown == 0) {
	    guiCountDown.text = "GO!";
	    } 
	    else
		guiCountDown.text = countDown.ToString();
		yield WaitForSeconds(1);
	}

	car.rigidbody.constraints = RigidbodyConstraints.None;
	//car1.rigidbody.constraints = RigidbodyConstraints.None;
	guiCountDown.enabled=false;
	drivingScript.enabled=true;
	//drivingScript1.enabled=true;
    timer.enabled = true;
}