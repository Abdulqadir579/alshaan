"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/971562145901', '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-1">
            <Image
              src="/logo.png"
              alt="Alshaan Events Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C5A47E] to-[#8B7355]">
              AlishaanEvents
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Button 
              className="bg-[#C5A47E] hover:bg-[#8B7355] text-white"
              onClick={handleWhatsAppRedirect}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            size="sm"
            className="md:hidden bg-[#C5A47E] hover:bg-[#8B7355] text-white p-2 h-8"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b shadow-lg px-4 py-4">
            <div className="flex flex-col space-y-4 container mx-auto">
              <Link 
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/60 hover:text-primary transition-colors py-2"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/60 hover:text-primary transition-colors py-2"
              >
                About Us
              </Link>
              <Button 
                className="bg-[#C5A47E] hover:bg-[#8B7355] text-white w-full"
                onClick={() => {
                  handleWhatsAppRedirect();
                  setIsMenuOpen(false);
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
