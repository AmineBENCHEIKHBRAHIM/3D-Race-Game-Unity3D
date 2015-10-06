#pragma strict

var soundhover : AudioClip;
var beep : AudioClip;

function Start () {

}

function Update () {
  if (Input.GetKey ("escape")) {
        Application.Quit();
    }

}

function OnMouseEnter(){
audio.PlayOneShot(soundhover);
guiText.material.color = Color.red;
}

function OnMouseExit() {
guiText.material.color = Color.white;
}

function OnMouseUp(){
audio.PlayOneShot(beep);
yield WaitForSeconds(0.3);
Application.Quit();
}

@script RequireComponent(AudioSource)