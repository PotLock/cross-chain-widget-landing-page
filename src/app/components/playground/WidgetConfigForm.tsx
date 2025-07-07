"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { GeneralSettings } from "./GeneralSettings";
import { SocialSharing } from "./SocialSharing";
import { ThemeCustomization } from "./ThemeCustomization";

interface Token {
  assetId: string;
  symbol: string;
  blockchain: string;
}

interface WidgetConfigFormProps {
  donationTarget: string;
  onDonationTargetChange: (value: string) => void;
  address: string;
  onAddressChange: (value: string) => void;
  asset: string;
  onAssetChange: (value: string) => void;
  shareUrl: string;
  onShareUrlChange: (value: string) => void;
  link: string;
  onLinkChange: (value: string) => void;
  primaryColor: string;
  onPrimaryColorChange: (color: string) => void;
  buttonColor: string;
  onButtonColorChange: (color: string) => void;
  buttonFont: string;
  onButtonFontChange: (font: string) => void;
  tokens: Token[] | null;
}

export function WidgetConfigForm({
  donationTarget,
  onDonationTargetChange,
  address,
  onAddressChange,
  asset,
  onAssetChange,
  shareUrl,
  onShareUrlChange,
  link,
  onLinkChange,
  primaryColor,
  onPrimaryColorChange,
  buttonColor,
  onButtonColorChange,
  buttonFont,
  onButtonFontChange,
  tokens,
}: WidgetConfigFormProps) {
  const [openSection, setOpenSection] = useState<string | null>("general");

  const sections = [
    {
      id: "general",
      title: "General Settings",
      content: (
        <GeneralSettings
          donationTarget={donationTarget}
          onDonationTargetChange={onDonationTargetChange}
          address={address}
          onAddressChange={onAddressChange}
          asset={asset}
          onAssetChange={onAssetChange}
          tokens={tokens}
        />
      ),
    },
    {
      id: "social",
      title: "Social Sharing",
      content: (
        <SocialSharing
          shareUrl={shareUrl}
          onShareUrlChange={onShareUrlChange}
          link={link}
          onLinkChange={onLinkChange}
        />
      ),
    },
    {
      id: "theme",
      title: "Theme Customization",
      content: (
        <ThemeCustomization
          primaryColor={primaryColor}
          onPrimaryColorChange={onPrimaryColorChange}
          buttonColor={buttonColor}
          onButtonColorChange={onButtonColorChange}
          buttonFont={buttonFont}
          onButtonFontChange={onButtonFontChange}
        />
      ),
    },
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-xl">Widget Configuration</CardTitle>
        <p className="text-sm text-muted-foreground">
          Adjust settings and see the live preview or embed code on the right.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {sections.map((section) => (
          <Collapsible
            key={section.id}
            open={openSection === section.id}
            onOpenChange={() => toggleSection(section.id)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="flex w-full justify-between p-4 h-12 font-medium text-left"
              >
                <span>{section.title}</span>
                {openSection === section.id ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="pt-4">
              {section.content}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
}
