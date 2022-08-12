import React from 'react';

const LoadStudentsList = ({user}) => {
    return (
        <div>
            <p>{user.displayName}</p>
            {
                user.profession === 'student' && <p>{user.profession}</p>
            }
        </div>
    );
};

export default LoadStudentsList;