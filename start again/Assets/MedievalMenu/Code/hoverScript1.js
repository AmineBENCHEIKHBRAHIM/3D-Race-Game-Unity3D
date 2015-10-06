
var soundhover : AudioClip;
var beep : AudioClip;
var levelToLoad : String;


function OnMouseEnter(){
audio.PlayOneShot(soundhover);
guiText.material.color = Color.red;
}

function OnMouseExit() {
guiText.material.color = Color.white;
}

function OnMouseUp(){
audio.PlayOneShot(beep);

Application.LoadLevel(levelToLoad);

}


@script RequireComponent(AudioSource)