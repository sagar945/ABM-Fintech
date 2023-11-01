
<?php include 'Common/connection.php'?>

<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   

    // Check if the session variables exist
    if (isset($_SESSION['user_id']) && isset($_SESSION['user_name'])) {
        $id = $_SESSION['user_id'];
        $name = $_SESSION['user_name'];
        $bankid  = $_SESSION['bankid'];

        // Get the JSON data from the request body
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        if ($data && is_array($data)) {
            // Prepare the statement once, outside of the loop
            $query = "INSERT INTO detailspage (uid, menu_name, field_name, field_type, lchg_userid, rcre_userid, bankid) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($query);

            if ($stmt) {
                foreach ($data as $inputValue) {
                    $fieldName = $inputValue['field_name'];
                    $fieldType = $inputValue['field_type'];
                    $fieldValue = null; // Initialize field value

                    // Handle different input types
                    if ($fieldType === 'text') {
                        $fieldValue = $inputValue['value'];
                    } elseif ($fieldType === 'checkbox') {
                        $fieldValue = $inputValue['checked'] ? 'checked' : 'unchecked';
                    } elseif ($fieldType === 'radio') {
                        $fieldValue = $inputValue['checked'] ? 'selected' : 'not selected';
                    }

                    // Bind parameters inside the loop
                    $stmt->bind_param("sssssss", $id, $inputValue['menu_name'], $fieldName, $fieldType, $name, $name,$bankid);

                    if ($stmt->execute()) {
                         echo '<script>
                          alert("Data Sent Successfully")
                        </script>';
                        // Data Sent Successfully
                    } else {
                        echo 'Error: ' . $stmt->error;
                    }
                }

                $stmt->close();
            } else {
                echo 'Error in database query preparation: ' . $conn->error;
            }

            $conn->close();
        } else {
            echo 'Invalid data format';
        }
    } else {
        echo 'Session variables user_id and user_name not set.';
    }
} else {
    echo 'Invalid request';
}

?>


