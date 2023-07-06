import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import {saveAs} from  'file-saver';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id]);

  const handlePageDownload = () => {
    if (pageRef.current) {
      html2canvas(pageRef.current)
        .then((canvas) => {
          canvas.toBlob((blob) => {
            saveAs(blob, `$user-details.jpg1`);
          });
        })
        .catch((error) => {
          console.error('Error downloading page:', error);
        });
    }
  };

  console.log(user);

  return (
    <div ref={pageRef}>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>{`Name: ${user.first_name} ${user.last_name}`}</p>
          <p>{`Email: ${user.email}`}</p>
          <button onClick={handlePageDownload}>Download Page</button>

        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default UserDetails;
