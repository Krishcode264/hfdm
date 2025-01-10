"use client";
import React, { type JSX } from "react";
import ReactDOM from "react-dom";
import { Button } from "./ui/button";

export type DomPortalProps = {
  onClose: () => void;
  component: JSX.Element;
};
const DomPortal = ({ onClose, component }: DomPortalProps) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 1000,
      }}
      onClick={onClose} // Close on overlay click
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="h-[95%] relative overflow-y-auto p-4 rounded-xl   md:w-[70%] w-full bg-gradient-to-r bg-slate-200"
      >
        <Button onClick={()=>{onClose()}} className="sticky top-0">close</Button>
        {component}
      </div>
    </div>,
    document.getElementById("root") as Element
  );
};

export default DomPortal