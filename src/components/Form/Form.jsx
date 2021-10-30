import React, {useState} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import FormAddChild from "../FormAddChild/FormAddChild";
import plus from "../../img/plus.svg";
import "./style.css";

const Form = () => {
    const initialParentData = localStorage.getItem("parentData")
        ? JSON.parse(localStorage.getItem("parentData"))
        : {name: "", age: ""};
    const initialChildrenData = localStorage.getItem("childrenData")
        ? JSON.parse(localStorage.getItem("childrenData"))
        : [];

    const [parentData, setPersonData] = useState(initialParentData);
    const [childrenData, setChildrenData] = useState(initialChildrenData);

    function addChild() {
        const id = `0${childrenData.length}`;
        setChildrenData((prev) => [...prev, {id: id, name: "", age: ""}]);
    }

    function removeChild(id) {
        setChildrenData((prev) => prev.filter((child) => child.id !== id));
    }

    function changeChildData({target}) {
        const id = target.parentElement.parentElement.id;
        const value = target.value;
        const key = target.name;
        const changedChild = childrenData.find((el) => el.id === id);
        const index = childrenData.indexOf(changedChild);
        const newChildData = JSON.parse(JSON.stringify(childrenData));
        newChildData[index][key] = value;
        setChildrenData(newChildData);
    }

    function saveData() {
        localStorage.setItem("parentData", JSON.stringify(parentData));
        const filterChildrenData = childrenData.filter(
            (child) => child.name !== "" || child.age !== ""
        );
        localStorage.setItem("childrenData", JSON.stringify(filterChildrenData));
    }

    return (
        <section>
            <div className="form_parent_data">
                <h2>Персональные данные</h2>
                <Input
                    value={parentData.name}
                    onChange={(e) =>
                        setPersonData({...parentData, name: e.target.value})
                    }
                    name="name"
                    label="Имя"
                />
                <Input
                    value={parentData.age}
                    onChange={(e) =>
                        setPersonData({...parentData, age: e.target.value})
                    }
                    type="number"
                    label="Возраст"
                />
            </div>
            <div className="form_children_data">
                <div className="add_children_block">
                    <h2>Дети (макс. 5)</h2>
                    <div className="add_children_button_block">
                        {childrenData.length < 5 && (
                            <Button styleType={"border"} onClick={addChild}>
                                <img className="plus_img" src={plus} alt="add_plus"/>
                                <span className="add_children_button_name">
                  Добавить ребенка
                </span>
                            </Button>
                        )}
                    </div>
                </div>
                <div className="children_form_block">
                    {childrenData.map((child) => (
                        <FormAddChild
                            key={child.id}
                            child={child}
                            removeChild={removeChild}
                            changeChildData={changeChildData}
                        />
                    ))}
                </div>
                <div className="add_data_block">
                    <Button onClick={saveData} styleType={"blue"}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Form;
