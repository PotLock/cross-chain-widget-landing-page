"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WidgetConfig {
  address: string;
  donationTarget: string;
  buttonColor: string;
  asset: string;
  primaryColor: string;
  buttonFont: string;
}

interface WidgetPreviewProps {
  config: WidgetConfig;
}

export function WidgetPreview({ config }: WidgetPreviewProps) {
  const [activeTab, setActiveTab] = useState("preview");
  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

  const generateEncodedConfig = () => {
    const widgetConfig = {
      Address: config.address || "your-wallet-id-here",
      donationTarget:
        config.donationTarget === "Select Donation Type"
          ? "POTLOCK Campaigns"
          : config.donationTarget,
      buttonColor: config.buttonColor,
      Asset:
        config.asset !== "Select which asset you want to receive."
          ? config.asset
          : "your-asset-name-here",
      textColor: config.primaryColor,
      fontType: config.buttonFont,
    };
    return btoa(JSON.stringify(widgetConfig));
  };

  const generateHTMLCode = () => {
    const encodedConfig = generateEncodedConfig();
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Widget Test Page</title>
</head>
<body>
  <h1>Test Page</h1>
  <p>This page tests the widget integration.</p>
  <script 
    async 
    src='https://cdn.jsdelivr.net/gh/PotLock/cross-chain-widget@main/dist/widget.js?v=${Date.now()}'
    data-config="${encodedConfig}">
  </script>
</body>
</html>`;
  };

  const generateReactCode = () => {
    return `import { useEffect, useRef } from 'react';

function App() {
  useEffect(() => {
    const scriptSrc = 'https://cdn.jsdelivr.net/gh/PotLock/cross-chain-widget@main/dist/widget.js?v=${Date.now()}'
    
    // Remove existing script if any
    const existing = document.querySelector(\`script[src="\${scriptSrc}"]\`);
    if (existing) existing.remove();

    const config = {
      Address: '${config.address || "your-wallet-id-here"}',
      donationTarget: '${
        config.donationTarget === "Select Donation Type"
          ? "POTLOCK Campaigns"
          : config.donationTarget
      }',
      buttonColor: '${config.buttonColor}',
      Asset: '${
        config.asset !== "Select which asset you want to receive."
          ? config.asset
          : "your-asset-name-here"
      }'
    };

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.setAttribute('data-config', btoa(JSON.stringify(config)));

    script.onload = () => {
      if (typeof window.initDonationWidget === 'function') {
        window.initDonationWidget();
      }
    };

    document.body.appendChild(script);

    return () => {
      const s = document.querySelector(\`script[src="\${scriptSrc}"]\`);
      if (s) s.remove();
    };
  }, []);

  return (
    <div>
      <div id="widget-root" style={{ /* your style */ }}></div>
    </div>
  );
}

export default App;`;
  };

  const handleCopyHTML = async () => {
    try {
      await navigator.clipboard.writeText(generateHTMLCode());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("Copy failed");
    }
  };

  const handleCopyReact = async () => {
    try {
      await navigator.clipboard.writeText(generateReactCode());
      setIsCopied2(true);
      setTimeout(() => setIsCopied2(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("Copy failed");
    }
  };

  useEffect(() => {
    const scriptSrc = `https://cdn.jsdelivr.net/gh/PotLock/cross-chain-widget@main/dist/widget.js?v=${Date.now()}`;

    const widgetRoot = document.getElementById("widget-root");
    if (widgetRoot) widgetRoot.innerHTML = "";

    if (activeTab === "preview") {
      const old = document.querySelector(`script[src="${scriptSrc}"]`);
      if (old) old.remove();

      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;

      const params = {
        Address: config.address,
        donationTarget:
          config.donationTarget === "Select Donation Type"
            ? "POTLOCK Campaigns"
            : config.donationTarget,
        buttonColor: config.buttonColor,
        Asset:
          config.asset !== "Select which asset you want to receive."
            ? config.asset
            : "your-asset-name-here",
        textColor: config.primaryColor,
        fontType: config.buttonFont,
      };
      script.setAttribute("data-config", btoa(JSON.stringify(params)));

      script.onload = () => {
        console.log("Widget reloaded for preview");
        if (typeof (window as any).initDonationWidget === "function") {
          (window as any).initDonationWidget();
        }
      };

      script.onerror = (e) => console.error("Failed to load widget", e);
      document.body.appendChild(script);
    }
  }, [activeTab, config]);

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-12 p-1">
            <TabsTrigger value="preview" className="h-10 px-6">Live Preview</TabsTrigger>
            <TabsTrigger value="embed" className="h-10 px-6">Embedded Code</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <Tabs value={activeTab} className="flex-1 flex flex-col">
          <TabsContent value="preview" className="flex-1 flex items-center justify-center mt-0">
            <div
              id="widget-root"
              className="flex items-center justify-center w-full min-h-[200px]"
            />
          </TabsContent>

          <TabsContent value="embed" className="flex-1 mt-0">
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">HTML Embeddable Code</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyHTML}
                      className="h-8 w-8 p-0"
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto whitespace-pre-wrap break-all">
                    {generateHTMLCode()}
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">React Code</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyReact}
                      className="h-8 w-8 p-0"
                    >
                      {isCopied2 ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto whitespace-pre-wrap break-all">
                    {generateReactCode()}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>

      <div className="p-6 pt-0 mt-auto">
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          Powered by{" "}
          <Badge variant="secondary" className="ml-2">
            🫕 POTLOCK
          </Badge>
        </div>
      </div>
    </Card>
  );
}