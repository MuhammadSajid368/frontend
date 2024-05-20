import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const VerificationEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [error, setError] = useState(null); // Change to null to distinguish between no error and initial state
  const [linkClicked, setLinkClicked] = useState(false); // Track whether link has been clicked

  useEffect(() => {
    const activationEmail = async () => {
      if (!linkClicked) {
        try {
          const res = await axios.get(
            `http://localhost:7000/auth/verify-email?token=${token}`
          );
          toast.success(res.data.message);
          navigate("/auth/login");
          console.log(res.data.message);
        } catch (error) {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            // Display error message returned from the server
            setError(error.response.data.message);
          } else {
            // If no specific error message is returned, display a generic error
            setError(
              "An error occurred. Please try again later." + error.message
            );

            setTimeout(() => {}, 4000);
          }
          // Log the error to console for debugging
          console.log(error);
        } finally {
          setLinkClicked(true); // Set linkClicked to true after successful or failed request
        }
      }
    };

    activationEmail();
  }, [token, linkClicked]); // Include linkClicked in dependencies array

  return (
    <div>
      {error ? (
        <div>Error: {error}</div> // Display error message if error is not null
      ) : (
        <div>VerificationEmail</div>
      )}
    </div>
  );
};

export default VerificationEmail;
