"use client";

import React, { useState } from "react";
import { Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SocialShareModal } from "./SocialShareModal";

interface SocialSharingProps {
  shareUrl: string;
  onShareUrlChange: (value: string) => void;
  link: string;
  onLinkChange: (value: string) => void;
}

export function SocialSharing({
  shareUrl,
  onShareUrlChange,
  link,
  onLinkChange,
}: SocialSharingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Enter message</Label>
        <textarea
          rows={3}
          className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          placeholder="Enter your message here..."
          value={shareUrl}
          onChange={(e) => onShareUrlChange(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>POTLOCK Link</Label>
        <Input
          type="text"
          placeholder="Enter your message here..."
          value={link}
          onChange={(e) => onLinkChange(e.target.value)}
          className="w-full h-12"
        />
      </div>

      <Button onClick={() => setIsModalOpen(true)} className="w-fit">
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>

      <SocialShareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        shareUrl={shareUrl}
        link={link}
      />
    </div>
  );
}
