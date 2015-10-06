var levelToLoad : String;
var pastTime : float;
var myWC : WheelCollider;
static var isFinished : boolean = false;
var guiTime : GUIText;
var highScore : GUIText;
var customSkin : GUISkin;
var showMoreGui = false; 
var isVisible = true; 
var showTextField = true;
var labelEnable = true;
function Update () {
//var hit : WheelHit;
if(CarCheckpoint.currentCheckpoint==1 && CarCheckpoint.currentLap==2) {
  isFinished = true;
}
if(!isFinished) {
 pastTime += Time.deltaTime;
}
guiTime.text = "Time elapsed\n"+pastTime.ToString();
}


function Awake() {
 highScore.text = "Best Time\nTime: "+ PlayerPrefs.GetFloat("BestTime96")+"\nName: " +PlayerPrefs.GetString("PlayerName") ;
}

function OnGUI() { 
 GUI.skin = customSkin;
 if(isFinished)  {
     GUI.Label(new Rect(350,60,1000,50),"Congratulations! You completed the race in " + pastTime +" seconds!");
 /*   if(!Timer1.isFinished1 && !Timer2.isFinished2 && !Timer3.isFinished3 && !Timer4.isFinished4)
     {GUI.Label(new Rect(350,90,1000,50),"Congratulations! You completed the race in 1st position!");}
     else if((Timer1.isFinished1 && !Timer2.isFinished2 && !Timer3.isFinished3 && !Timer4.isFinished4)||
     (!Timer1.isFinished1 && Timer2.isFinished2 && !Timer3.isFinished3 && !Timer4.isFinished4)||
     (!Timer1.isFinished1 && !Timer2.isFinished2 && Timer3.isFinished3 && !Timer4.isFinished4)||
     (!Timer1.isFinished1 && !Timer2.isFinished2 && !Timer3.isFinished3 && Timer4.isFinished4))
     {GUI.Label(new Rect(350,90,1000,50),"Congratulations! You completed the race in 2nd position!");}
     else if((Timer1.isFinished1 && Timer2.isFinished2 && !Timer3.isFinished3 && !Timer4.isFinished4)||
     (!Timer1.isFinished1 && Timer2.isFinished2 && Timer3.isFinished3 && !Timer4.isFinished4)||
     (!Timer1.isFinished1 && !Timer2.isFinished2 && Timer3.isFinished3 && Timer4.isFinished4)||
     (Timer1.isFinished1 && !Timer2.isFinished2 && !Timer3.isFinished3 && Timer4.isFinished4)||
     (Timer1.isFinished1 && !Timer2.isFinished2 && Timer3.isFinished3 && !Timer4.isFinished4)||
     (!Timer1.isFinished1 && Timer2.isFinished2 && !Timer3.isFinished3 && Timer4.isFinished4))
      {GUI.Label(new Rect(350,90,1000,50),"Congratulations! You completed the race in 3rd position!");}
      else if((Timer1.isFinished1 && Timer2.isFinished2 && Timer3.isFinished3 && !Timer4.isFinished4)||
     (Timer1.isFinished1 && !Timer2.isFinished2 && Timer3.isFinished3 && Timer4.isFinished4)||
     (Timer1.isFinished1 && Timer2.isFinished2 && !Timer3.isFinished3 && Timer4.isFinished4)||
     (!Timer1.isFinished1 && Timer2.isFinished2 && Timer3.isFinished3 && Timer4.isFinished4))
     {GUI.Label(new Rect(350,90,1000,50),"Congratulations! You completed the race in 4th position!");}
     else {GUI.Label(new Rect(350,90,1000,50),"Congratulations! You completed the race in 5th position!");}
*/
  if(isVisible){
  if(GUI.Button(Rect(550,150,300,50),"OK")){
   showMoreGui = true;
   isVisible = false;
   labelEnable = false; 
   }
  }
  if (showMoreGui) { 
   if(GUI.Button(Rect(550,150,300,50),"TO MENU")){
    isFinished = false;
    CarCheckpoint.currentCheckpoint=0;
    CarCheckpoint.currentLap=0;
    Application.LoadLevel(0);  
    
    }
  /* if(GUI.Button(Rect(550,180,300,50),"PLAY AGAIN")) {
    isFinished = false;
    CarCheckpoint.currentCheckpoint=0;
    CarCheckpoint.currentLap=0;
    Application.LoadLevel(levelToLoad); }*/
   if(GUI.Button(Rect(550,180,300,50),"EXIT TO WINDOWS"))
    Application.Quit();
  }
 }
}
