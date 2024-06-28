"use client";
import React from "react";
import Editor from "@/components/editor/advanced-editor";
import { JSONContent } from "novel";
import { useState } from "react";

import { ModeToggle } from "@/components/ModeToggle";
import { defaultValue } from "./default-value";
import parse from "html-react-parser";
export default function page() {
  const [value, setValue] = useState<string | undefined>(undefined);
  console.log(value);
  return (
    <div className="container p-8">
      <div className="grid grid-cols-2 gap-6">
        <Editor initialValue={value} onChange={setValue} />
        <div className="">{parse(`${value}`)}</div>
      </div>
    </div>
  );
}
