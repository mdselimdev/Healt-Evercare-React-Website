import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../context/useAuth';


const PrivateRoute = (props) => {
   
    const { children, ...rest } = props;
    const { user, isLoading } = useAuth();
    
    if (isLoading) {
        return <div className="text-center"><Spinner animation="border" variant="warning" /></div> ;
    }

    return (
        <Route
            {...rest}
            render={({ location }) => 
                user.email ? children
                    : (
                        <Redirect
                            to={{
                                pathname:"/login",
                                state:{from:
                                location}
                        }}
                        >

                        </Redirect>
                    )
                    
            }
        >
            
        </Route>
    );
};

export default PrivateRoute;