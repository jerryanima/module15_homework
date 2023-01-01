import React from "react";

const styles = {
    color: "#CD5C5C", 
    backgroundColor: '#000'
};

export default function Title({ title }){
    return <h1 style = { styles }>{ title }</h1>
}

// пропсы надо передавать в {} скобках
// если мы хотим записать стиль например background-color то нужно пистать camelCase = backgroundColor
// в стиле нужно передавать объектю например создать константу, с описанием стиля 