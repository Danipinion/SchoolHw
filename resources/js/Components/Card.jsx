import React from "react";

export const Card = ({ title, description, mapel }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-primary">{mapel}</div>
                    {/* <div className="badge badge-outline">Dani</div> */}
                </div>
            </div>
        </div>
    );
};
