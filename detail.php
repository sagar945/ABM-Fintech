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

<?php
if (isset($_POST['genXml'])) {
    // Retrieve data from the database
    $sql11 = "SELECT * FROM detailspage"; // Replace with your actual table name
    $result = $conn->query($sql11);

    if ($result) {
        // Create a SimpleXMLElement representing the XML structure
        $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><group_details><multi_tab_menu>N</multi_tab_menu></group_details>');

        // Create the 'page_list' element (set page_name once)
        $page_list = $xml->addChild('page_list');
        $page_details = $page_list->addChild('page_details');
        $page_details->addChild('type_of_page', $row['menu_name']); // Set your desired type_of_page
        $page_details->addChild('page_name', $row['menu_name']); // Set your desired page_name

        // Create an array to store field names for JavaScript properties
        $jsFieldNames = [];

        // Loop through the database results to create 'field' elements in 'fieldList'
        while ($row = $result->fetch_assoc()) {
            $field_list = $xml->addChild('field_list');
            $field = $field_list->addChild('field');
            $field_name = $row['field_name'];
            $field->addChild('name', $field_name);
            $field->addChild('datatype', $row['field_type']);
            $field->addChild('mr_field', 'N'); // Set your desired value
            $field->addChild('group_field', 'Y'); // Set your desired value

            // Store the field name for JavaScript properties
            $jsFieldNames[] = $field_name;
        }

        // Generate a unique filename based on a timestamp
        $timestamp = time();
        $xmlFilePath = 'C:\Users\saura\OneDrive\Desktop\xml_save/' . $menu_name . '.js';

        // Save the XML to the generated filename
        $xml->asXML($xmlFilePath);

        // Now, create the JavaScript code
        $jsCode = "var SWSLocObj = {\n";

        // Iterate through the field names and create JavaScript properties
        foreach ($jsFieldNames as $field_name) {
            $jsProperty = "  " . $field_name . "_ENABLED: 'enabled',\n";
            $jsProperty .= "  " . $field_name . "_MANDATORY: 'N',\n";
            $jsCode .= $jsProperty;
        }

        // Close the JavaScript object
        $jsCode .= "};\n";

        // Specify the JavaScript file path
        $jsFilePath = 'C:\Users\saura\OneDrive\Desktop\xml_save/' . $menu_name .  '_' . 'props.js';

        // Save the JavaScript code to the file
        file_put_contents($jsFilePath, $jsCode);

        echo "<script>alert('XML created')</script>";

        // Close the database connection
        $conn->close();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>






<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Page</title>
    <link rel="stylesheet" href="thiis.css">

    <link rel="icon" type="image/x-icon" href="img/Logo.png">

</head>

<body>

    <script>
        function gen() {
            // Your code for generating files goes here
            console.log('Generating files...');
        }

        function saveData() {
            // Your code to save data goes here

            // Assuming the data saving is successful, enable the "GENERATE FILES" button
            document.getElementById('generateButton').disabled = false;
        }

        // Generate XML file code here
    </script>
    <main>

        <div class="split right">
            <div class="main-header">
                <form method="post" action="">
                    <button type="submit" name="genXml" class="gen" id="generateButton" disabled>GENERATE FILES</button>
                <button type="submit" id="sendDataButton1" class="gen" onclick="saveData()">SaveData</button>
                    
                </form>


                <h1 class="mt-3">Detail PAGE</h1>
            </div>
            <div class="back"></div>
            <a href="Criteria.php"><button type="button" class="btnnext">Previous</button></a>
            <!-- <a href="detail.php"><button type="button" class="btnnext">Next</button></a> -->
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
    <script src="all1.js"></script>


</body>

</html>



<?php include 'Common/footer.php' ?>