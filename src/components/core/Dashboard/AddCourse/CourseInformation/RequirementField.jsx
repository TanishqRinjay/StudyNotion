import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const RequirementField = ({
    name,
    label,
    register,
    errors,
    setValue,
    getValues,
}) => {
    const [requirement, setRequirement] = useState("");
    const [requirementList, setRequirementList] = useState([]);

    useEffect(()=>{
        register(name, {
            required: true,
            validate: (value)=> value.length > 0
        })
    },[])

    useEffect(()=>{
        setValue(name, requirementList)
    }, [requirementList])

    const handleAddRequirements = () => {
        if (requirement) {
            setRequirementList([...requirementList, requirement]);
            setRequirement("");
        }
    };
    const handleRemoveRequirements = (index) => {
        const updatedRequirementList = [...requirementList];
        updatedRequirementList.splice(index, 1);
        setRequirementList(updatedRequirementList);
    };

    return (
        <div>
            <label htmlFor={name} className="text-sm">
                {label}
                <sup className=" text-pink-200">*</sup>
            </label>
            <div>
                <input
                    type="text"
                    id={name}
                    value={requirement}
                    onChange={(e) => {setRequirement(e.target.value)}}
                    style={{
                        boxShadow:
                            "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] mb-2 text-richblack-5"
                />
                <button type='button' onClick={()=>handleAddRequirements()} className=" text-yellow-50 text-semibold">Add</button>
            </div>
            {
                requirementList.length > 0 && (
                    <ul className="">
                        {
                            requirementList.map((item, i)=>(
                                <li key={i} className=" flex items-center text-richblack-5 gap-1">{item} <button onClick={()=>handleRemoveRequirements(i)} className="text-xs text-pure-greys-300">clear</button></li>
                            ))
                        }
                    </ul>
                )
            }

            {
                errors[name] && (
                    <span>{label} is required.</span>
                )
            }
        </div>
    );
};

export default RequirementField;