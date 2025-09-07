import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Target, CheckCircle, BookOpen, Sparkles, Play, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCrystal from '@/assets/hero-crystal.jpg';

const Index = () => {
  const features = [
    {
      icon: Target,
      title: 'Zarządzanie Projektami',
      description: 'Organizuj i śledź postępy swoich projektów biznesowych z zaawansowanymi narzędziami.',
      color: 'text-primary'
    },
    {
      icon: CheckCircle,
      title: 'Śledzenie Nawyków',
      description: 'Buduj pozytywne nawyki dzięki gamifikacji i szczegółowym statystykom postępów.',
      color: 'text-success'
    },
    {
      icon: BookOpen,
      title: 'Platforma Edukacyjna',
      description: 'Ucz się od ekspertów branży dzięki kursom video i interaktywnym materiałom.',
      color: 'text-accent'
    }
  ];

  const stats = [
    { label: 'Aktywnych Użytkowników', value: '10,000+', icon: Users },
    { label: 'Ukończonych Projektów', value: '25,000+', icon: Target },
    { label: 'Godzin Edukacji', value: '100,000+', icon: BookOpen },
    { label: 'Średnia Ocena', value: '4.9/5', icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-bg py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  🚀 Platforma dla Przedsiębiorców
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Rozpocznij drogę do{' '}
                  <span className="gradient-text">sukcesu online</span>
                </h1>
                <p className="text-xl text-white/80 max-w-lg">
                  iMakeIt! to nie jest zwykła platforma edukacyjna. To miejsce, które umożliwia Ci szybkie 
                  wejście w świat biznesu online i skuteczne wykorzystanie nowych możliwości.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 hover-lift glow-accent"
                >
                  <Link to="/dashboard">
                    <Play className="h-5 w-5 mr-2" />
                    Rozpocznij Teraz
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Link to="/education">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Przeglądaj Kursy
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Bezpłatny start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">Brak ukrytych kosztów</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">24/7 wsparcie</span>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="relative">
                <img 
                  src={heroCrystal} 
                  alt="iMakeIt Crystal" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-elegant glow-primary"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center animate-pulse-3d">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Wszystko czego potrzebujesz w jednym miejscu
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kompleksowe narzędzia do zarządzania projektami, budowania nawyków i edukacji biznesowej
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-card rounded-2xl flex items-center justify-center">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8 animate-scale-in">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
              Gotowy na transformację swojego biznesu?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dołącz do tysięcy przedsiębiorców, którzy już rozwijają swoje biznesy z iMakeIt!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 hover-lift glow-primary"
              >
                <Link to="/dashboard">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Rozpocznij Za Darmo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="hover-lift"
              >
                <Link to="/education">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Poznaj Kursy
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span>97% zadowolenia</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>10,000+ użytkowników</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                <span>Nagradzana platforma</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
