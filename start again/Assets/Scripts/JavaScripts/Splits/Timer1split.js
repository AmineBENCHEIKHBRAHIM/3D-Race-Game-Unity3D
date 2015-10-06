var levelToLoad : String;
var pastTime : float;
static var rank2 : int = 0;
var myWC : WheelCollider;
static var isFinished1 : boolean = false;
var guiTime : GUIText;
var highScore : GUIText;
var customSkin : GUISkin;
var showMoreGui = false; 
var isVisible = true; 
var showTextField = true;
var labelEnable = true;
function Update () {
//var hit : WheelHit;
if(CarCheckpoint1split.currentCheckpoint==1 && CarCheckpoint1split.currentLap==2) {
  isFinished1 = true;
}
if(!isFinished1) {
 pastTime += Time.deltaTime;
}
guiTime.text = "Time elapsed\n"+pastTime.ToString();
}


function Awake() {
 highScore.text = "Best Time\nTime: "+ PlayerPrefs.GetFloat("BestTime96")+"\nName: " +PlayerPrefs.GetString("PlayerName") ;
}

function OnGUI() { 
 GUI.skin = customSkin;
 if(isFinished1)  {
  var bestTime : float = 9999.99;
    var bestPlayer : String = "Player";
  if (PlayerPrefs.HasKey("BestTime96")) {
  bestTime = PlayerPrefs.GetFloat("BestTime96");
  }
  if(PlayerPrefs.HasKey("PlayerName")) {
 bestPlayer=PlayerPrefs.GetString("PlayerName");
 }

 /*if (pastTime <= bestTime) {
   PlayerPrefs.SetFloat("BestTime96", pastTime);
   if(labelEnable){
    GUI.Label(new Rect(235,60,1000,50),"Congratulations! You completed the race in " + pastTime +" seconds, which is a new record!");
    GUI.Label(new Rect(500,90,1000,50),"Please enter your name below:");
    }
    if(showTextField == true){
    bestPlayer = GUI.TextField (Rect (600,120, 200, 50), bestPlayer, 25);
    PlayerPrefs.SetString("PlayerName",bestPlayer);   
    if (Event.current.keyCode == KeyCode.Return) {
     showTextField=false;
     //labelEnable = false; 
  }
  }
  }
   else {*/
    if(labelEnable)
    {
    if(isFinished1 && !Timersplit.isFinished)
    {rank2 = 1;Timersplit.rank1 = 2;}
    else if(!isFinished1 && Timersplit.isFinished)
    {rank2 = 2;Timersplit.rank1 = 1;}
     GUI.Label(new Rect(350,60,1000,50),"Congratulations! You completed the race in " + pastTime +" seconds!");
     if( rank2 == 2)
     {GUI.Label(new Rect(350,60,1000,50),"Congratulations! You completed the race in " + pastTime +" seconds!");
     GUI.Label(new Rect(350,90,1000,50)," You finished the race in 2nd position ");}
     else if( rank2 == 1)
     
     {GUI.Label(new Rect(350,60,1000,50),"Congratulations! You completed the race in " + pastTime +" seconds!");
     GUI.Label(new Rect(350,90,1000,50)," You finished the race in 1st position ");}
     }
 // }  

  if(isVisible && Timersplit.isFinished && isFinished1){
  if(GUI.Button(Rect(550,150,300,50),"OK")){
   showMoreGui = true;
   isVisible = false;
   labelEnable = false; 
   }
  }
  if (showMoreGui) { 
   if(GUI.Button(Rect(550,150,300,50),"TO MENU")){
    isFinished = false;
    CarCheckpointsplit.currentCheckpoint=0;
    CarCheckpointsplit.currentLap=0;
    Application.LoadLevel(0);  
    
    }
  /* if(GUI.Button(Rect(550,180,300,50),"PLAY AGAIN")) {
    isFinished = false;
    CarCheckpointsplit.currentCheckpoint=0;
    CarCheckpointsplit.currentLap=0;
    Application.LoadLevel(levelToLoad); }*/
   if(GUI.Button(Rect(550,180,300,50),"EXIT TO WINDOWS"))
    Application.Quit();
  }
 }
}
