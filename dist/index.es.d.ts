import React from "react";
import { FC } from "react";
type NavbarProp = {
    /**
     * The details of the community are required since
     * the selected community can be changed in the app
     */
    team: {
        id: string;
        name: string;
        logo?: string;
        plan: "paid" | "trial";
    };
    user: {
        id: string;
        name: string;
        email: string;
        profilePic?: string;
    };
    config: {
        showDashboard: boolean;
        showTask: boolean;
        showTeam: boolean;
        showAdmin: boolean;
        showAcademy: boolean;
        showTraining: boolean;
        showChecklist: boolean;
        showSchedule: boolean;
    };
    router?: boolean;
    list?: () => FC;
    updateName: (name: string) => void;
    updateProfilePic: (data: {
        public_id: string;
    }) => void;
};
declare const Navbar: React.FC<NavbarProp>;
export { NavbarProp, Navbar };
