import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Home, 
  Target, 
  CheckCircle, 
  BookOpen, 
  Settings, 
  Menu,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Calendar,
  Library,
  User,
  ShoppingBag,
  FileText
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/dashboard', label: 'Dashboard', icon: Sparkles },
    { href: '/projects', label: 'Projekty', icon: Target },
    { href: '/habits', label: 'Nawyki', icon: CheckCircle },
    { href: '/education', label: 'Edukacja', icon: BookOpen },
    { href: '/analytics', label: 'Analityka', icon: TrendingUp },
    { href: '/community', label: 'Społeczność', icon: Users },
    { href: '/portfolio', label: 'Portfolio', icon: Award },
    { href: '/calendar', label: 'Kalendarz', icon: Calendar },
    { href: '/resources', label: 'Zasoby', icon: Library },
    { href: '/profile', label: 'Profil', icon: User },
    { href: '/marketplace', label: 'Sklep', icon: ShoppingBag },
    { href: '/blog', label: 'Blog', icon: FileText },
    { href: '/settings', label: 'Ustawienia', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ href, label, icon: Icon, mobile = false }: { 
    href: string; 
    label: string; 
    icon: any; 
    mobile?: boolean;
  }) => (
    <Link
      to={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
        isActive(href)
          ? 'bg-gradient-primary text-white shadow-glow'
          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
      } ${mobile ? 'w-full justify-start' : ''}`}
      onClick={() => mobile && setIsMobileMenuOpen(false)}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="gradient-text">iMakeIt!</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 glass-card">
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-2 font-bold text-xl mb-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="gradient-text">iMakeIt!</span>
                </div>
                
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    mobile
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;