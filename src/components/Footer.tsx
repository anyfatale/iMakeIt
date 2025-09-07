import { Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="gradient-text">iMakeIt!</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Zaawansowana platforma dla przedsiębiorców dążących do sukcesu online.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Szybkie Linki</h3>
            <div className="space-y-2">
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Projekty
              </Link>
              <Link to="/education" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Edukacja
              </Link>
              <Link to="/community" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Społeczność
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Narzędzia</h3>
            <div className="space-y-2">
              <Link to="/analytics" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Analityka
              </Link>
              <Link to="/portfolio" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Portfolio
              </Link>
              <Link to="/calendar" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Kalendarz
              </Link>
              <Link to="/resources" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Zasoby
              </Link>
            </div>
          </div>

          {/* Account */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Konto</h3>
            <div className="space-y-2">
              <Link to="/profile" className="block text-sm text-muted-foreground hover:text-success transition-colors">
                Mój Profil
              </Link>
              <Link to="/marketplace" className="block text-sm text-muted-foreground hover:text-success transition-colors">
                Sklep
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-success transition-colors">
                Blog
              </Link>
              <Link to="/settings" className="block text-sm text-muted-foreground hover:text-success transition-colors">
                Ustawienia
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 iMakeIt! - Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive fill-current animate-pulse" />
              <span>by</span>
              <span className="font-semibold gradient-text">Kamil Poręba</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;