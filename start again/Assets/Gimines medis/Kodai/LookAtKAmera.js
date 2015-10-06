    var cameraToLookAt: Camera;
     
    function Update()
    {
          var v: Vector3 = cameraToLookAt.transform.position - transform.position;
          v.z = v.x = 0.0;
          transform.LookAt(cameraToLookAt.transform.position - v);
    }