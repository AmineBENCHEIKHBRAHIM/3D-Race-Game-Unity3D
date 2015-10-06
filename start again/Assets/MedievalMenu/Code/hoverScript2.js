
var soundhover : AudioClip;
var beep : AudioClip;



function OnMouseEnter(){
audio.PlayOneShot(soundhover);
renderer.material.color = Color.red;
}

function OnMouseExit() {
renderer.material.color = Color.white;
}

function OnMouseUp(){
audio.PlayOneShot(beep);



}


@script RequireComponent(AudioSource)