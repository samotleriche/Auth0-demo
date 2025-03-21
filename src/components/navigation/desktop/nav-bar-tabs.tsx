import React from "react";
import { NavBarTab } from "./nav-bar-tab";
import { useUser } from "@auth0/nextjs-auth0/client";

export const NavBarTabs: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile" />
      <NavBarTab path="/clientprofile" label="Client Prof" />
      <NavBarTab path="/public" label="Public" />
      {user && (
        <>
          <NavBarTab path="/protected" label="Protected" />
          <NavBarTab path="/admin" label="Admin" />
        </>
      )}
    </div>
  );
};
