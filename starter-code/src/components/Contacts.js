import React from 'react';

const Contact = props => {
    return (
<<<<<<< Updated upstream
        <div className = "table">
           
                   
                        <tr>
                            <td>       <img alt="" src={props.picture} />                </td>
                            <td>       {props.name}                  </td>
                            <td>       {props.popularity}                  </td>
                        </tr>
        </div>
=======
        
            <tr>
                <td><img alt="" height="100px" src={props.picture} /> </td>
                <td>{props.name} </td>
                <td>{props.popularity}</td>
            </tr>
>>>>>>> Stashed changes
    )
}

export default Contact;