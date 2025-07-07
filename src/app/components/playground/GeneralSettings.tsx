"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AssetSelector } from "./AssetSelector";

interface Token {
  assetId: string;
  symbol: string;
  blockchain: string;
}

interface GeneralSettingsProps {
  donationTarget: string;
  onDonationTargetChange: (value: string) => void;
  address: string;
  onAddressChange: (value: string) => void;
  asset: string;
  onAssetChange: (value: string) => void;
  tokens: Token[] | null;
}

const donationTargetOptions = ["POTLOCK Campaigns", "Direct Account"];

export function GeneralSettings({
  donationTarget,
  onDonationTargetChange,
  address,
  onAddressChange,
  asset,
  onAssetChange,
  tokens
}: GeneralSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Donation Target Type</Label>
        <Select 
          value={donationTarget === "Select Donation Type" ? "" : donationTarget} 
          onValueChange={onDonationTargetChange}
        >
          <SelectTrigger className="w-full h-12">
            <SelectValue placeholder="Select Donation Type" />
          </SelectTrigger>
          <SelectContent>
            {donationTargetOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {donationTarget === "Direct Account" && (
        <AssetSelector
          value={asset}
          onChange={onAssetChange}
          tokens={tokens}
        />
      )}

      <div className="space-y-2">
        <Label>
          {donationTarget === "POTLOCK Campaigns" ? "Referral ID" : "Wallet address"}
        </Label>
        <Input
          type="text"
          placeholder={
            donationTarget === "POTLOCK Campaigns"
              ? "Enter referral ID"
              : "Enter Wallet Address you'd like to donate to"
          }
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          className="w-full h-12"
        />
      </div>

      <Button
        variant="ghost"
        className="w-full justify-start gap-3 p-0 h-auto"
        asChild
      >
        <Link
          href="https://staging.alpha.potlock.org/campaign/create"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <span className="font-medium">Create New Project</span>
          <div className="w-8 h-8 rounded-full bg-muted border flex items-center justify-center">
            <Plus className="w-4 h-4 text-muted-foreground" />
          </div>
        </Link>
      </Button>
    </div>
  );
}