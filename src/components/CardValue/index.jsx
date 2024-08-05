import React from "react";

const CardValue = ({ data }) => {
    return (
        <div className="w-11/12 flex flex-col justify-around items-center h-4/5 s480:w-4/5 ">
            <h2 className="font-bold text-3xl text-white">{data.title}</h2>
            <p className="text-sm text-white s580:text-base s580:w-3/4 s880:w-3/5 s1080:w-2/4 s1180:w-4/5 s1380:w-11/12">
                {data.content}
            </p>
        </div>
    );
};

export default CardValue;
