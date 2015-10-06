#pragma strict
var count:int = 0;
function Start () {
count =0;
}

function Update () {
if(count==0)
{
if(transform.position.y>110)
{
transform.Translate(Vector3(6,-10,-5) * Time.deltaTime,Space.World);
}
else {count++;}
}
if(count==1)
 {
 if(transform.position.y<300)
 {
 transform.Translate(Vector3(5,5,-5) * Time.deltaTime,Space.World);
 }
 else{count++;}
 }
if(count==2)
 {
 if(transform.rotation.y<140)
 {
 transform.Rotate(Vector3.up * Time.deltaTime,Space.World);
 }
 else{count++;}
 }




}
