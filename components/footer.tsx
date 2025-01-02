import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                AlishaanEvents
              </span>
            </div>
            <p className="text-muted-foreground">
              Creating extraordinary events and unforgettable experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-secondary">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-secondary transition-colors">Corporate Events</li>
              <li className="text-muted-foreground hover:text-secondary transition-colors">Social Gatherings</li>
              <li className="text-muted-foreground hover:text-secondary transition-colors">Award Ceremonies</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">mehbooblalani@gmail.com</li>
              <li className="text-muted-foreground">+971 56 2145901</li>
              <li className="text-muted-foreground">Office no 47, Mezzanine floor,<br />Al Durrah Tower,<br />Next to Millennium Plaza Downtown,<br />Sheikh Zayed Road, Dubai,<br />PO Box - 9850</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AlishaanEvents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}