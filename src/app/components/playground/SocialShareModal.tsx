"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, MessageCircle, Copy } from "lucide-react";

interface SocialShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
  link: string;
}

export function SocialShareModal({
  isOpen,
  onClose,
  shareUrl,
  link,
}: SocialShareModalProps) {
  const shareText = `${shareUrl} ${link}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied!");
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareText)}`,
      className: "text-blue-600 hover:text-blue-700",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter className="w-4 h-4" />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareText)}`,
      className: "text-black hover:text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      href: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareText)}`,
      className: "text-blue-800 hover:text-blue-900",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-4 h-4" />,
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
      className: "text-green-500 hover:text-green-600",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this page</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              className={`w-full justify-start gap-3 h-auto p-3 ${social.className}`}
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
                <span>Share on {social.name}</span>
              </a>
            </Button>
          ))}

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-auto p-3 text-gray-600 hover:text-gray-800"
            onClick={handleCopyLink}
          >
            <Copy className="w-4 h-4" />
            <span>Copy Link</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
