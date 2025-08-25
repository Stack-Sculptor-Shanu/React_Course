import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userAPI_Instance } from '../../axiosInstance/UserAxiosInstance';

const GetSingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {data} = await userAPI_Instance.get(`/users/${id}`);
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div>
      <h2>User Details</h2>
    </div>
  );
};

export default GetSingleUser;
