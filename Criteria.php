<?php include 'Common/header.php' ?>

<?php include 'Common/connection.php' ?>


<?php


// Assume you have a user ID that you want to fetch from the database
$id = $_GET['lastid']; // Replace with the actual user ID

// Retrieve user data from the database
$sql = "SELECT * FROM menudetails WHERE id = $id";
$result = mysqli_query($conn, $sql);

$menu_name = "";
$menu_description = "";

if ($result) { // Check if the query was successful
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        // Populate form fields with retrieved data
        $menu_name = $row['menu_name'];
        $menu_description = $row['menu_description'];
    } else {
        // Handle the case where the user does not exist
        echo "User not found.";
    }
} else {
    // Handle query execution errors
    echo "Query failed: " . mysqli_error($conn);
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criteria Page</title>
    <link rel="stylesheet" href="thiis.css">

    <link rel="icon" type="image/x-icon" href="img/Logo.png">

</head>

<body>

    <main>

        <div class="split right">
            <div class="main-header">
                <!--   <button onclick="gen()" class="gen">GENERATE FILES</button>
                <button class="gen">Save</button> -->
                <h1 class="mt-3">Criteria PAGE</h1>
            </div>
            <div class="back"></div>
            <a href="menudetails.php"><button type="button" class="btnnext">Previous</button></a>
            <a href="detail.php?lastid=<?php echo $_SESSION['lastid'] ?>"><button type="button" class="btnnext">Next</button></a>
            <button type="button" id="sendDataButton" class="btnnext">SaveData</button>

            <!-- <button type="submit" name="submit" class="btnnext">Save</button> -->
        </div>
        <div class="split left">
            <div class="container">
                <img src="img/Logo.png" width="180" class="img">
                <h2>Menu Name <p>*</p>
                </h2>
                <input type="text" id="mname" maxlength="8" disabled value="<?php echo $menu_name; ?>" <?php if ($menu_name == 'menu_name') echo 'disabled'; ?>>
            </div>
            <div class="container">
                <h2>Menu Discription :<p>*</p>
                </h2>
                <input type="text" id="mdisc" maxlength="100" disabled value="<?php echo $menu_description; ?>" <?php if ($menu_description == 'menu_description') echo 'disabled'; ?>>
            </div>

            <div class="container">
                <div class="left-t">
                    <h2>LABEL</h2>
                </div>
                <div class="right-t">
                    <button id="myElement" data-custom-value="1" onclick="createLabel()" name="label" class="bttn">ADD</button>
                </div>
            </div>
            <!-- <div class="container">
                <h2>CHECK-LABEL</h2>
                <button id="myElement" data-custom-value="1" onclick="createcheckLabel()" class="bttn">ADD</button>
            </div> -->
            <!-- <div class="container">
                <h2>RADIO-LABEL</h2>
                <button id="myElement" data-custom-value="1" onclick="createradioLabel()" class="bttn">ADD</button>
            </div> -->
            <div class="container">
                <h2>TEXT-BOX</h2>
                <button id="myElement" data-custom-value="1" onclick="createTextbox()" class="bttn">ADD</button>
            </div>
            <div class="container">
                <h2>CHECK-BOX</h2>
                <button id="myElement" data-custom-value="1" onclick="createCheckbox()" class="bttn">ADD</button>
            </div>
            <div class="container">
                <h2>RADIO</h2>
                <button id="myElement" data-custom-value="1" onclick="createradio()" class="bttn">ADD</button>
            </div>
            <div class="container">
                <h2>DROP-DOWN</h2>
                <button id="myElement" data-custom-value="1" onclick="createDropdown()" class="bttn">ADD</button>
            </div>
            <div class="container">
                <h2>SUBMIT</h2>
                <button id="myElement" data-custom-value="1" onclick="createSubmit()" name="submit" class="bttn">ADD</button>
            </div>
            <div class="container">
                <h2>CLEAR</h2>
                <button id="myElement" data-custom-value="1" type="reset" name="clear" onclick="createClear()" class="bttn">ADD</button>
            </div>
            <div class="container">
                <h2>VALIDATE</h2>
                <button id="myElement" data-custom-value="1" onclick="createValidate()" name="validate" class="bttn">ADD</button>
            </div>
            <div class="container">
                <h2>GO</h2>
                <button id="myElement" data-custom-value="1" onclick="createGo()" name="go" class="bttn">ADD</button>
            </div>
            <div class="container">
                <h2>HELP-ICON</h2>
                <button id="myElement" data-custom-value="1" id="addHelpIcon" class="bttn">ADD</button>
            </div>
            <div class="container">
                <h2>SEARCH-ICON</h2>
                <button id="myElement" data-custom-value="1" onclick="search()" class="bttn">ADD</button>
            </div>
            <button onclick="rst()" class="btn">RESET</button>
        </div>
    </main>
    <div id="hello">
        <form method="post" id="criteria_form">

        </form>
    </div>
    <script src="all.js"></script>

    <script>
        // Include your JavaScript code here
        // document.querySelector('#sendDataButton').addEventListener('click', function() {
           
        //     // Send the records to the PHP script using fetch
        //     fetch('criteria_php.php', {
        //             method: 'POST',
        //             body: JSON.stringify(records),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         })
        //         .then(response => response.text())
        //         .then(data => {
        //             // Handle the response from the PHP script here
        //             console.log(data);
        //         })
        //         .catch(error => {
        //             console.error('Error:', error);
        //         });
        // });

        
    </script>

</body>

</html>



<?php include 'Common/footer.php' ?>