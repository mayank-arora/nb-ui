/// <reference types="react" />
import React from "react";
type Prop = {
    /**
     * The details of the community are required since
     * the selected community can be changed in the app
     */
    team: {
        id: string;
        name: string;
        logo?: string;
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
    updateName: (name: string) => void;
    updateProfilePic: (profilePic: string) => void;
};
declare const Navbar: React.FC<Prop>;
export { Navbar };
