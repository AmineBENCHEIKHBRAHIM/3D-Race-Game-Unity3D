var levelToLoad : String;
var finish : GUIText ;
static var rank1 : int = 0;
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
if(CarCheckpointsplit.currentCheckpoint==1 && CarCheckpointsplit.currentLap==2) {
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
  var bestTime : float = 9999.99;
    var bestPlayer : String = "Player";
  if (PlayerPrefs.HasKey("BestTime96")) {
  bestTime = PlayerPrefs.GetFloat("BestTime96");
  }
  if(PlayerPrefs.HasKey("PlayerName")) {
 bestPlayer=PlayerPrefs.GetString("PlayerName");
 }

 /* if (pastTime <= bestTime) {
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
    if(Timer1split.isFinished1 && !isFinished)
    {Timer1split.rank2 = 1;rank1 = 2;}
    else if(!Timer1split.isFinished1 && isFinished)
    {Timer1split.rank2 = 2;rank1 = 1;}
     if( rank1 == 2)
     finish.text="Congratulations! You completed the race in " + pastTime.ToString() +" seconds!\n"+" You finished the race in 2nd position ";
     else if( rank1 == 1)
     {finish.text="Congratulations! You completed the race in " + pastTime.ToString() +" seconds!\n"+" You finished the race in 1st position ";}
 // }  

  if(isVisible  && isFinished && Timer1split.isFinished1){
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
