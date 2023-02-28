import React from "react";
import { Card } from "../Card";

export const HwList = (props) => {
    return (
        <div className="flex flex-col gap-5 mt-10 items-center">
            {props.hws ? (
                props.hws.map((hw, i) => {
                    return (
                        <Card
                            key={i}
                            title={hw.title}
                            description={hw.description}
                            mapel={hw.mapel}
                        />
                    );
                })
            ) : (
                <h1> Tidak Ada PR</h1>
            )}
        </div>
    );
};
