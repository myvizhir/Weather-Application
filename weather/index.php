<html>
<body>
<?php
$name=$_GET['name'];
$email=$_GET['email'];
$psw=$_GET['psw'];
$mobile=$_GET['mobile'];
$con = new mysqli("localhost","root","","weather");
$sql="insert into sample(name,email,psw,mobile)
values('$name','$email','$psw','$mobile')";
if(mysqli_query($con,$sql)===TRUE){
    echo"Registration Successfull!!";
    echo"<h3>Redirecting to login page....";
        echo"<script>
                setInterval(function(){
                    window.location='index1.html';
                },3000)
        </script>";
}
else
echo"Error".$con->error;
$con->close();
?>
</body>
</html>