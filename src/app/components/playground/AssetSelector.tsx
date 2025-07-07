"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Token {
  assetId: string;
  symbol: string;
  blockchain: string;
}

interface AssetSelectorProps {
  value: string;
  onChange: (assetId: string) => void;
  tokens: Token[] | null;
  placeholder?: string;
  className?: string;
}

export function AssetSelector({ 
  value, 
  onChange, 
  tokens, 
  placeholder = "Select which asset you want to receive.",
  className 
}: AssetSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredTokens = tokens?.filter((token) =>
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (assetId: string) => {
    onChange(assetId);
    setIsOpen(false);
    setSearchQuery("");
  };

  const displayValue = value === placeholder ? placeholder : value;

  return (
    <div className={cn("space-y-2", className)}>
      <Label>Asset Type</Label>
      
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <span className={cn(
            "truncate",
            value === placeholder ? "text-muted-foreground" : "text-foreground"
          )}>
            {displayValue}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </div>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1">
            <Card className="max-h-60 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Available Tokens</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="px-3 pb-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by symbol..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 h-10 w-full"
                    />
                  </div>
                </div>
                
                <div className="max-h-40 overflow-y-auto">
                  {filteredTokens?.map((token, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 cursor-pointer hover:bg-accent hover:text-accent-foreground text-sm"
                      onClick={() => handleSelect(token.assetId)}
                    >
                      <span className="truncate">
                        {token.symbol} ({token.blockchain})
                      </span>
                    </div>
                  ))}
                  
                  {filteredTokens?.length === 0 && (
                    <div className="px-3 py-2 text-sm text-muted-foreground">
                      No tokens found
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}