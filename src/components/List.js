import React from "react";
const List = ({ name, i, cnt }) => {

    //console.log('data:',name);
    return (
        <>
            <li key={`"location${cnt}"`}> {` ${cnt} ${name}`} </li>
        </>
    );
};

export default List;
