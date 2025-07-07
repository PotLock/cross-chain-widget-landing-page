"use client";

import React, { useState, useEffect } from "react";
import { WidgetConfigForm } from "./WidgetConfigForm";
import { WidgetPreview } from "./WidgetPreview";

interface Token {
  assetId: string;
  symbol: string;
  blockchain: string;
}

export default function NewPlayground() {
  // State for configuration
  const [donationTarget, setDonationTarget] = useState("POTLOCK Campaigns");
  const [address, setAddress] = useState("");
  const [asset, setAsset] = useState("Select which asset you want to receive.");
  const [shareUrl, setShareUrl] = useState("");
  const [link, setLink] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#FFFF");
  const [buttonColor, setButtonColor] = useState("#262626");
  const [buttonFont, setButtonFont] = useState("Mona Sans");
  const [tokens, setTokens] = useState<Token[] | null>(null);

  // Fetch tokens from API
  const fetchTokens = async () => {
    try {
      const res = await fetch("https://1click.chaindefuser.com/v0/tokens", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setTokens(data);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setTokens(null);
    }
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  // Create config object for preview
  const widgetConfig = {
    address,
    donationTarget,
    buttonColor,
    asset,
    primaryColor,
    buttonFont,
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Configuration Form */}
          <div className="space-y-6">
            <WidgetConfigForm
              donationTarget={donationTarget}
              onDonationTargetChange={setDonationTarget}
              address={address}
              onAddressChange={setAddress}
              asset={asset}
              onAssetChange={setAsset}
              shareUrl={shareUrl}
              onShareUrlChange={setShareUrl}
              link={link}
              onLinkChange={setLink}
              primaryColor={primaryColor}
              onPrimaryColorChange={setPrimaryColor}
              buttonColor={buttonColor}
              onButtonColorChange={setButtonColor}
              buttonFont={buttonFont}
              onButtonFontChange={setButtonFont}
              tokens={tokens}
            />
          </div>

          {/* Widget Preview */}
          <div className="lg:sticky lg:top-6 lg:h-fit">
            <WidgetPreview config={widgetConfig} />
          </div>
        </div>
      </div>
    </div>
  );
}