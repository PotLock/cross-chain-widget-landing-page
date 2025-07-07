"use client";

import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label: string;
  description?: string;
  className?: string;
}

export function ColorPicker({ 
  value, 
  onChange, 
  label, 
  description, 
  className 
}: ColorPickerProps) {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(value);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onChange(newColor);
  };

  const togglePicker = () => setShowPicker(!showPicker);

  return (
    <div className={cn("space-y-2", className)}>
      <div>
        <Label>{label}</Label>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        <div
          className="w-12 h-12 rounded-md border border-input shadow-sm cursor-pointer hover:opacity-80 transition-opacity"
          style={{ backgroundColor: color }}
          onClick={togglePicker}
        />
        <Input
          type="text"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
          className="flex-1 cursor-pointer h-12"
          onClick={togglePicker}
          readOnly
        />
      </div>
      
      {showPicker && (
        <Card className="w-fit">
          <CardContent className="p-3">
            <HexColorPicker 
              color={color} 
              onChange={handleColorChange} 
              className="w-full max-w-[220px]"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}