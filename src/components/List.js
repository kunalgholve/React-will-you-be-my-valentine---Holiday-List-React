import React from "react";
const List = (props) => {

    return (
        <>
        <ol>
            <li key={`"location${props.i}"`}> {`${props.name}`} </li>
        </ol>
        </>
    );
};

export default List;
