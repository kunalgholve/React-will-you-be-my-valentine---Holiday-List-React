import React from "react";
const List = ({ name, i, cnt }) => {

    return (
        <>
        <ol>
            <li key={`"location${cnt}"`}> {` ${cnt} ${name}`} </li>
        </ol>
        </>
    );
};

export default List;
