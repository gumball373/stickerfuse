<?php
//stop any incoming requests from outside the server
header("Access-Control-Allow-Origin: https://stickerfuse.com", true, 403);

$data = file_get_contents('php://input');
//get the string
if(!empty($data)){
    http_response_code(200);

    //do something here
    //write base64 encoded data into the orders folder 

    exit;
}

echo 'Insufficient Data';
http_response_code(400);
exit;

?>