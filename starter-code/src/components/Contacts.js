import React from 'react';

const Contact = props => {
    return (
        
            <tr>
                <td><img alt="" height="100px" src={props.picture} /> </td>
                <td>{props.name} </td>
                <td>{props.popularity}</td>
                <td>
                <button onClick={props.action} id={props.id}>
                    Delete
                </button>
                </td>
            </tr>
    )
}

export default Contact;