import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Award, 
  Eye, 
  Download, 
  Share2, 
  ExternalLink,
  Star,
  Calendar,
  DollarSign,
  TrendingUp,
  Target,
  Zap,
  Crown,
  Trophy,
  Medal
} from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Revolution Platform',
      description: 'Kompletna platforma e-commerce z AI-powered recommendationami i zaawansowaną analityką.',
      category: 'ecommerce',
      image: '/api/placeholder/400/250',
      status: 'completed',
      revenue: '45,200 zł',
      roi: '420%',
      duration: '4 miesiące',
      technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
      metrics: {
        visitors: '125K',
        conversion: '4.8%',
        satisfaction: '98%'
      }
    },
    {
      id: 2,
      title: 'Marketing Automation Suite',
      description: 'Zaawansowany system automatyzacji marketingu z integracją CRM i email marketing.',
      category: 'marketing',
      image: '/api/placeholder/400/250',
      status: 'active',
      revenue: '28,900 zł',
      roi: '285%',
      duration: '3 miesiące',
      technologies: ['Vue.js', 'Python', 'Redis', 'MongoDB'],
      metrics: {
        campaigns: '340',
        openRate: '24.5%',
        leads: '1,240'
      }
    },
    {
      id: 3,
      title: 'Financial Planning App',
      description: 'Inteligentna aplikacja do planowania finansowego z predykcyjną analityką.',
      category: 'fintech',
      image: '/api/placeholder/400/250',
      status: 'completed',
      revenue: '62,100 zł',
      roi: '510%',
      duration: '6 miesięcy',
      technologies: ['React Native', 'FastAPI', 'TensorFlow', 'AWS'],
      metrics: {
        users: '50K+',
        savings: '2.5M zł',
        rating: '4.9/5'
      }
    }
  ];

  const achievements = [
    {
      title: 'Mistrz E-commerce',
      description: 'Ukończył 10+ projektów e-commerce z ROI > 300%',
      icon: Crown,
      color: 'text-warning',
      date: '2024-02-15',
      rarity: 'legendary'
    },
    {
      title: 'Marketing Guru',
      description: 'Osiągnął 25%+ open rate w 50+ kampaniach',
      icon: Trophy,
      color: 'text-primary',
      date: '2024-01-28',
      rarity: 'epic'
    },
    {
      title: 'Innovation Leader',
      description: 'Wprowadził 5+ przełomowych rozwiązań AI',
      icon: Zap,
      color: 'text-accent',
      date: '2024-01-10',
      rarity: 'rare'
    },
    {
      title: 'Revenue Master',
      description: 'Wygenerował 500K+ zł przychodu w 2024',
      icon: Medal,
      color: 'text-success',
      date: '2023-12-20',
      rarity: 'epic'
    }
  ];

  const skills = [
    { name: 'Project Management', level: 95, category: 'management' },
    { name: 'Digital Marketing', level: 88, category: 'marketing' },
    { name: 'Full-Stack Development', level: 92, category: 'technical' },
    { name: 'Business Strategy', level: 85, category: 'business' },
    { name: 'UI/UX Design', level: 78, category: 'design' },
    { name: 'Data Analytics', level: 90, category: 'analytics' },
  ];

  const stats = [
    { label: 'Ukończone Projekty', value: '47', icon: Target, color: 'text-primary' },
    { label: 'Całkowity Przychód', value: '892K zł', icon: DollarSign, color: 'text-success' },
    { label: 'Średnie ROI', value: '385%', icon: TrendingUp, color: 'text-accent' },
    { label: 'Zadowolonych Klientów', value: '98%', icon: Star, color: 'text-warning' },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-warning bg-warning/10';
      case 'epic': return 'border-primary bg-primary/10';
      case 'rare': return 'border-accent bg-accent/10';
      default: return 'border-muted bg-muted/10';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="relative inline-block">
            <Avatar className="h-32 w-32 mx-auto border-4 border-gradient-primary glow-primary">
              <AvatarFallback className="bg-gradient-primary text-white text-4xl font-bold">
                KP
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center glow-accent">
              <Crown className="h-5 w-5 text-white" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-bold gradient-text">
              Kamil Poręba - Portfolio 🚀
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Senior Full-Stack Developer & Business Strategist
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tworzę innowacyjne rozwiązania biznesowe, które generują rzeczywiste rezultaty. 
              Specjalizuję się w e-commerce, AI/ML i strategii cyfrowej transformacji.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button className="bg-gradient-primary hover:opacity-90">
              <Download className="h-4 w-4 mr-2" />
              Pobierz CV
            </Button>
            <Button variant="outline" className="hover-lift">
              <Share2 className="h-4 w-4 mr-2" />
              Udostępnij Portfolio
            </Button>
            <Button variant="outline" className="hover-lift">
              <ExternalLink className="h-4 w-4 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card hover-lift text-center">
              <CardContent className="pt-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Projects */}
            <Card className="glass-card animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Projekty Portfolio
                </CardTitle>
                <CardDescription>
                  Najważniejsze realizacje i ich wpływ na biznes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className="p-6 rounded-xl bg-gradient-card hover-lift transition-smooth border border-border/50"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                      <Badge 
                        variant={project.status === 'completed' ? 'default' : 'secondary'}
                        className="ml-4"
                      >
                        {project.status === 'completed' ? 'Ukończony' : 'W trakcie'}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 rounded-lg bg-success/10">
                        <DollarSign className="h-5 w-5 mx-auto mb-1 text-success" />
                        <div className="font-semibold text-success">{project.revenue}</div>
                        <div className="text-xs text-muted-foreground">Przychód</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-primary/10">
                        <TrendingUp className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <div className="font-semibold text-primary">{project.roi}</div>
                        <div className="text-xs text-muted-foreground">ROI</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-accent/10">
                        <Calendar className="h-5 w-5 mx-auto mb-1 text-accent" />
                        <div className="font-semibold text-accent">{project.duration}</div>
                        <div className="text-xs text-muted-foreground">Czas realizacji</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {Object.values(project.metrics)[0]}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {Object.values(project.metrics)[2] || Object.values(project.metrics)[1]}
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="hover-lift">
                        Zobacz szczegóły
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="glass-card animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Umiejętności
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="glass-card animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-warning" />
                  Osiągnięcia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border-2 ${getRarityColor(achievement.rarity)} hover-lift transition-smooth`}
                  >
                    <div className="flex items-start gap-3">
                      <achievement.icon className={`h-6 w-6 ${achievement.color} flex-shrink-0 mt-1`} />
                      <div className="space-y-1">
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        <div className="text-xs text-muted-foreground">
                          {new Date(achievement.date).toLocaleDateString('pl-PL')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;