<?php

$to = "kavya.adimoolam@yahoo.com";
$data = "Name: " . $_POST['Name'] . " \n\n Phone Number: " . $_POST['Phone'] . " \n\n Email: " . $_POST['Email'] . " \n\n Message: " . $_POST['Message'];

$retval = mail("kavya.adimoolam@yahoo.com", "Online Inquiry From Your Website", $data, "FROM: " . $_POST['Email']);

if ($retval == true) {
    echo "Success";
} else {
    echo "Failed";
}
?>
