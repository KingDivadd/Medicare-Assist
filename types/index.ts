import { MouseEventHandler } from "react";

export interface CustomButtonProps {
title: string;
containerStyles?: string;
handleClick?: MouseEventHandler<HTMLButtonElement>;
btnType?: "button"|"submit";
disabledd?: boolean;
}

export interface CustomFilterProps {
    title: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string)=>void
}

export interface InputProps {
    title: string;
    placeholder: string;
}

export interface SchedulingTabProps {
    tab: string;
    setTab: (tab: string) => void; 
}

export interface PatientTabProps {
    patient_tab: string;
    setPatient_tab: (patient_tab: string)=> void;
}