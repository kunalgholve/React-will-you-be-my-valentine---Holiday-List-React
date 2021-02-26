import React from "react";
const List = (props) => {

    //console.log('data:',name);
    return<li key={`"location${props.i}"`}>{`${props.name}`}</li>
};

export default List;
