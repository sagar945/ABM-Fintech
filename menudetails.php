<?php include 'Common/header.php' ?>

<?php include 'Common/connection.php'?>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $menu_name = $_POST["menu_name"];
    $menu_description = $_POST["menu_description"];
    
    $isCriteriaPage = isset($_POST["criteria"]) ? "Y" : "N";
    $isDetailPage = isset($_POST["detail"]) ? "Y" : "N";
    $isResultPage = isset($_POST["result"]) ? "Y" : "N";
    
    $rcre_userid = 1; // Replace with the actual user ID or implement user authentication
    $bankid = 1; // Replace with the actual bank ID or relevant data


    // Validate the input data
    $errors = [];
    if (empty($menu_name)) {
        $errors[] = "Menu name is required.";
    }
    // Add more validation checks as needed

    // If there are validation errors, display them and do not execute the insert
    if (!empty($errors)) {
        echo '<script>
              alert("Validation errors:\n' . implode("\n", $errors) . '");
            </script>';
    } else {
        // Generate a unique reference number
        $id = "ref" . uniqid();
        // Prepare the SQL statement with placeholders
        $sql = "INSERT INTO menudetails (id, menu_name, menu_description, is_criteriapage, is_detailpage, is_resultpage, rcre_userid, bankid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";


        // Create a prepared statement
        $stmt = $conn->prepare($sql);

        // Bind parameters
        $stmt->bind_param("ssssssii", $id, $menu_name, $menu_description, $isCriteriaPage, $isDetailPage, $isResultPage, $rcre_userid, $bankid);

        // Execute the statement
        if ($stmt->execute()) 
        {
            $insertedRowID = $conn->insert_id; 
            $_SESSION['lastid'] = $insertedRowID; 

            // print_r($insertedRowID);
            // die();

            echo '<script>
                  alert("Record inserted successfully");
                </script>';
        } else {
            echo '<script>
                  alert("Error: ' . $stmt->error . '");
                </script>';
        }

        // Close the prepared statement
        $stmt->close();
    }
}
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Details Page</title>
    <link rel="stylesheet" href="thiis.css">

    <link rel="icon" type="image/x-icon" href="img/Logo.png">

</head>

<body>

    <style>
        .menu-details {
            border-radius: 2px 2px 5px 5px;
            padding: 10px 20px 20px 20px;
            width: 100%;
            max-width: 600px;
            background: lightgray;
            position: relative;
            padding-bottom: 80px;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
        }

        .menu-details img {
            margin-left: 28%;

        }

        .wrapper {
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 0;
        }

        input[type=text],
        input[type=radio] {
            padding: 8px;
            width: 29%;
            border-radius: 6px;
            border: 2px solid black;
        }

        .glow-on-hover {
            width: 100px;
            height: 50px;
            border: none;
            outline: none;
            color: #fff;
            background: #111;
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 10px;
        }

        .glow-on-hover:before {
            content: '';
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing 20s linear infinite;
            opacity: 0;
            transition: opacity .3s ease-in-out;
            border-radius: 10px;
        }

        .glow-on-hover:active {
            color: #000
        }

        .glow-on-hover:active:after {
            background: transparent;
        }

        .glow-on-hover:hover:before {
            opacity: 1;
        }

        .glow-on-hover:after {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #111;
            left: 0;
            top: 0;
            border-radius: 10px;
        }

        @keyframes glowing {
            0% {
                background-position: 0 0;
            }

            50% {
                background-position: 400% 0;
            }

            100% {
                background-position: 0 0;
            }
        }
    </style>

    <div class="wrapper">
        <form method="post" class="menu-details">
            <h2 class="text-center pb-3">Menu Page Details</h2>
            <img src="img/Logo.png" width="200"><br>
            Menu Name: <input type="text" name="menu_name" placeholder="Enter MenuName">

            Menu Description: <input type="text" name="menu_description" placeholder="Enter Description">
            <br><br>
            Criteria Page: <input type="checkbox" name="criteria" value="Criteria">
            <br><br>
            Detail Page: &nbsp;&nbsp;<input type="checkbox" name="detail" value="Detail">
            <br><br>
            Result Page: &nbsp;&nbsp;<input type="checkbox" name="result" value="Result">
            <br><br>

           <a href="menudetails.php"><button type="button" class="glow-on-hover">Previous</button></a>
            <button type="submit" class="glow-on-hover">Save</button>
            <button type="reset" class="glow-on-hover">Clear</button>
            <a href="Criteria.php?lastid=<?php echo $insertedRowID ?>" ><button type="button" class="glow-on-hover">Next</button></a>

        </form>
    </div>
    </p>
    </div>



    <script src="all.js"></script>
</body>

</html>

<?php include 'Common/footer.php' ?>