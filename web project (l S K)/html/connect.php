<?php
 $FULLNAME =$_POST['FULLNAME'];
 $CONTACT =$_POST['CONTACT'];
 $EMAIL =$_POST['EMAIL']
 $MESSAGE =$_POST['MESSAGE'];



//database connection 
  $conn = new mysqli('localhost','root'.'','general');
  if($conn->connect_error){
     die('connection failed : ' $conn->connect_error);
  }else{
    $stmt =$conn->prepare("insert into first(FULLNAME, CONTACT, MAIL,MESSAGE)
    value(?,?,?,?)");
    $stmt->bind_param("siss", $FULLNAME,$CONTACT,$EMAIL,$MESSAGE);
    $stmt->execute();
    echo "registration Successfully....";
    $stmt->close();
    $conn->close();
  }
?>