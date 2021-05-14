import React from 'react';


const Type = ({id, types}) => {
    let type;
    if (id%5 == 0 && id%3 != 0) {
        type = types[0]
    }
    if (id%3 == 0 && id%5 != 0) {
        type = types[1]
    }
    if (id%5 == 0 && id%3 == 0) {
        type = types[2]
    }
    if (id%5 != 0 && id%3 != 0) {
        type = types[3]
    }
const handleClick = option => {
    let type = option.target[5].selected;
    if (type) {
        var newType = prompt("Please enter the name of the new type", "");
        console.log(newType);
        types.push(newType);
        console.log(types);
    }

}

    return (
        <>
           <select onChange={handleClick}>
                <option selected>{type}</option>
                {types.map((type, id) => (
                    <option value={type} key={"t-" + id}>{type}</option>
                ))}
           </select>
        </>
    )
}

export default Type;