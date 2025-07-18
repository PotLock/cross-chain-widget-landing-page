"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "./ColorPicker";

interface ThemeCustomizationProps {
  primaryColor: string;
  onPrimaryColorChange: (color: string) => void;
  buttonColor: string;
  onButtonColorChange: (color: string) => void;
  buttonFont: string;
  onButtonFontChange: (font: string) => void;
}

const fontOptions = [
  "Mona Sans",
  "Arial",
  "Helvetica",
  "Times New Roman",
  "Georgia",
  "Verdana",
  "Trebuchet MS",
  "Comic Sans MS",
];

export function ThemeCustomization({
  primaryColor,
  onPrimaryColorChange,
  buttonColor,
  onButtonColorChange,
  buttonFont,
  onButtonFontChange,
}: ThemeCustomizationProps) {
  return (
    <div className="space-y-6">
      <ColorPicker
        value={primaryColor}
        onChange={onPrimaryColorChange}
        label="Button Text Color"
        description="Affects the text on the button"
      />

      <ColorPicker
        value={buttonColor}
        onChange={onButtonColorChange}
        label="Button Color"
        description="Affects the buttons on your form"
      />

      <div className="space-y-2">
        <Label>Button Font</Label>
        <p className="text-sm text-muted-foreground">
          Choose the font for your buttons
        </p>
        <Select value={buttonFont} onValueChange={onButtonFontChange}>
          <SelectTrigger className="w-full h-12">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((font) => (
              <SelectItem key={font} value={font}>
                {font}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
