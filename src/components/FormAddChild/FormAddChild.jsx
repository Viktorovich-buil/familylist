import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import './style.css'

const FormAddChild = ({child, changeChildData, removeChild}) => {
    return (
        <div id={child.id} key={child.id} className="children_form">
            <Input
                label="Имя"
                name="name"
                value={child.name}
                onChange={changeChildData}
            />
            <Input
                label="Возраст"
                name="age"
                type="number"
                value={child.age}
                onChange={changeChildData}
            />
            <Button onClick={() => removeChild(child.id)}>Удалить</Button>
        </div>
    );
};

export default FormAddChild;
