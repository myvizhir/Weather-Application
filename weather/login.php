<?php
$email=$_POST['email'];
$psw=$_POST['psw'];
$con = new mysqli("localhost","root","","weather");
$sql="select * from sample where email='$email' and psw='$psw'";
if(mysqli_query($con,$sql)->num_rows>0)
    echo "<script>window.location='main.html'</script>";
else{ 
    echo"Email or Password incorrect";
    echo"<h3>Redirecting to login page....";
    echo"<script>
            setInterval(function(){
                window.location='index1.html';
            },3000)
    </script>";
}
 

$con->close();
?>