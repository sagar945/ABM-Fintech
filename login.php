<?php include 'Common/header.php' ?>

<?php include 'Common/connection.php' ?>



<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $password = $_POST['password'];
  $bankid = isset($_POST['bankid']) ? $_POST['bankid'] : "";

  // Your database connection setup here

  if (empty($bankid)) {
    $sql = "SELECT * FROM user WHERE name = ? AND password = ?";
    $stmt = mysqli_prepare($conn, $sql);

    mysqli_stmt_bind_param($stmt, "ss", $name, $password);

    // Execute the statement
    mysqli_stmt_execute($stmt);

    // Get the result
    $result = mysqli_stmt_get_result($stmt);

    // Check if there is a matching user
    if (mysqli_num_rows($result) > 0) {
      // Fetch user data
      $row = mysqli_fetch_assoc($result);
      $user_id = $row['uid'];
      $user_name = $row['name'];
      $bankid = $row['bankid'];

      // Start a session and store user data
      
      $_SESSION['user_id'] = $user_id;
      $_SESSION['user_name'] = $user_name;
      $_SESSION['bankid'] = $bankid;
      
      
      // Authentication successful, redirect to the menu page
      echo '<script>
              alert("Login Successfully!");
              window.location.href = "menudetails.php";
            </script>';
      exit();
    } else {
      // Authentication failed, display an error message and redirect back to the login page
      echo '<script>
              alert("Login failed. Invalid username or password!");
              window.location.href = "login.php";
            </script>';
    }
  } else {
    $sql = "SELECT uid, name FROM user WHERE bankid = ?";
    $stmt = mysqli_prepare($conn, $sql);

    mysqli_stmt_bind_param($stmt, "s", $bankid);

    // Execute the statement
    mysqli_stmt_execute($stmt);

    // Get the result
    $result = mysqli_stmt_get_result($stmt);

    // Check if there is a matching user
    if (mysqli_num_rows($result) > 0) {
      // Fetch user data
      $row = mysqli_fetch_assoc($result);
      $user_id = $row['uid'];
      $user_name = $row['name'];
      $bankid = $row['bankid'];

      // Start a session and store user data
      
      $_SESSION['user_id'] = $user_id;
      $_SESSION['user_name'] = $user_name;
      $_SESSION['bankid'] = $bankid;

      // Authentication successful, redirect to the menu page
      echo '<script>
              alert("Login Successfully!");
              window.location.href = "menudetails.php";
            </script>';
      exit();
    } else {
      // Authentication failed, display an error message and redirect back to the login page
      echo '<script>
              alert("Login failed. Invalid Bank ID!");
              window.location.href = "login.php";
            </script>';
    }
  }

  // Close the database connection
  mysqli_close($conn);
}

?>




<div class="wrapper">
  <form class="login" method="post">
    <img src="img/Logo.png" width="230" class="ml-3">
    <input type="text" name="name" placeholder="Username" autofocus />
    <i class="fas fa-user"></i>
    <input type="password" name="password" placeholder="Password" />
    <i class="fas fa-key"></i>
    <input type="text" name="bankid" placeholder="Bank Id" />
    <a href="#">Forgot your password?</a>
    <button type="submit" name="submit">Login</button>

  </form>
  </p>
</div>




<div class="wrapper">
  <form class="login" method="post">
    <img src="img/Logo.png" width="230" class="ml-3">
    <input type="text" name="name" placeholder="Username" autofocus />
    <i class="fas fa-user"></i>
    <input type="password" name="password" placeholder="Password" />
    <i class="fas fa-key"></i>
    <input type="text" name="bankid" placeholder="Bank Id" />
    <a href="#">Forgot your password?</a>
    <button type="submit" name="submit">Login</button>

  </form>
  </p>
</div>


<?php include 'Common/header.php' ?>