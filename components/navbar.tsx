"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/971562145901', '_blank');
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.refresh();
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              AlshaanEvents
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              onClick={handleHomeClick}
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

          <Button className="md:hidden bg-[#C5A47E] hover:bg-[#8B7355] text-white">Menu</Button>
        </div>
      </div>
    </nav>
  );
}