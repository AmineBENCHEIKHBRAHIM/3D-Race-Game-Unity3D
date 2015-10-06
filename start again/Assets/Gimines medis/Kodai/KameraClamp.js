#pragma strict

function Start () {

}

function Update () {
transform.position.x = Mathf.Clamp(transform.position.x,-1763, -1757.054);
transform.position.y = Mathf.Clamp(transform.position.y,387.2997, 392);
}