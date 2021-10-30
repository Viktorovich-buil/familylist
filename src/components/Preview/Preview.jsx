import React from "react";
import { declination } from "../util/util";
import "./style.css";

const Preview = () => {

    const userData = localStorage.getItem("parentData")
        ? JSON.parse(localStorage.getItem("parentData"))
        : { name: "", age: "" };
    const children = localStorage.getItem("childrenData")
        ? JSON.parse(localStorage.getItem("childrenData"))
        : [];

    return (
        <section>
            <div>
                <h2>Персональные данные</h2>
                <div className="parent_data_block">
          <span className="parent_data">
            {`${userData.name !== "" ? userData.name : ""}  
          ${userData.name !== "" && userData.age !== "" ? "," : ""} 
          ${userData.age !== "" ? userData.age + declination(userData.age) : ""}`}
          </span>
                </div>
            </div>

            <div className="preview_children_data">
                <h2>Дети</h2>
                <div className="children_data_block">
                    {children.length ? (
                        children.map((child) => (
                            <div key={child.id} className="child_card">
                <span className="child_data">{
                    `${child.name}, ${child.age + declination(child.age)} `
                }
                </span>
                            </div>
                        ))
                    ) : (
                        <div className="child_card">
                            <span className="child_data">Детей нет</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Preview;
