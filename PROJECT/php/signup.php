<?php
    session_start();

    include("dp.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $email =$_POST['email'];
        $password=$_POST['pass'];
        $fullname =$_POST['fname'];
        $username =$_POST['uname'];

        if(!empty($email) && !empty($password) && !is_numeric($email))
        {
            $query ="insert into travel(email,pass,fname,uname) values('$email','$password',' $fullname',' $username')";

            mysqli_query($con,$query);

            echo"<script type='text/javascript'> alert('successfully register')</script>";
        }
        else{
            echo"<script type='text/javascript'> alert('please enter valid information')</script>";
        }
    }
?>