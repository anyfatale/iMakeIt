import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  Activity, 
  DollarSign,
  Users,
  Clock,
  Target,
  Award,
  Zap,
  ArrowUpRight
} from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const metrics = [
    {
      title: 'Całkowity Przychód',
      value: '24,580 zł',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-success'
    },
    {
      title: 'Aktywni Użytkownicy',
      value: '3,421',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'text-primary'
    },
    {
      title: 'Ukończone Projekty',
      value: '189',
      change: '+15.7%',
      trend: 'up',
      icon: Target,
      color: 'text-accent'
    },
    {
      title: 'Średni Czas Sesji',
      value: '24m 32s',
      change: '-3.1%',
      trend: 'down',
      icon: Clock,
      color: 'text-warning'
    }
  ];

  const projectStats = [
    { name: 'E-commerce Platform', progress: 92, revenue: '8,400 zł', status: 'active' },
    { name: 'Marketing Campaign', progress: 78, revenue: '5,200 zł', status: 'review' },
    { name: 'Brand Identity', progress: 65, revenue: '3,100 zł', status: 'active' },
    { name: 'Mobile App', progress: 45, revenue: '2,850 zł', status: 'planning' },
  ];

  const skillsProgress = [
    { skill: 'Project Management', level: 85, growth: '+12%' },
    { skill: 'Digital Marketing', level: 72, growth: '+18%' },
    { skill: 'Business Strategy', level: 68, growth: '+22%' },
    { skill: 'Financial Planning', level: 59, growth: '+8%' },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold gradient-text animate-fade-in-up">
              Analityka i Raporty 📊
            </h1>
            <p className="text-xl text-muted-foreground">
              Szczegółowe analizy Twojego postępu i wyników
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40 glass-card">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Ostatnie 7 dni</SelectItem>
                <SelectItem value="30d">Ostatnie 30 dni</SelectItem>
                <SelectItem value="90d">Ostatnie 3 miesiące</SelectItem>
                <SelectItem value="1y">Ostatni rok</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-gradient-primary hover:opacity-90">
              <BarChart3 className="h-4 w-4 mr-2" />
              Eksportuj Raport
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                <div className="flex items-center gap-1 text-xs">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={metric.trend === 'up' ? 'text-success' : 'text-destructive'}>
                    {metric.change}
                  </span>
                  <span className="text-muted-foreground">vs poprzedni miesiąc</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Performance */}
          <Card className="glass-card animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Wydajność Projektów
              </CardTitle>
              <CardDescription>
                Analiza postępów w aktualnych projektach
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {projectStats.map((project, index) => (
                <div key={index} className="space-y-2 p-4 rounded-lg bg-gradient-card hover-lift transition-smooth">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{project.name}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                      <span className="text-sm font-medium text-success">{project.revenue}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Postęp</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills Development */}
          <Card className="glass-card animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Rozwój Umiejętności
              </CardTitle>
              <CardDescription>
                Twój postęp w kluczowych obszarach
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {skillsProgress.map((skill, index) => (
                <div key={index} className="space-y-2 p-4 rounded-lg bg-gradient-card hover-lift transition-smooth">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{skill.skill}</h4>
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="h-3 w-3 text-success" />
                      <span className="text-sm text-success">{skill.growth}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Poziom</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Advanced Analytics */}
        <Card className="glass-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Zaawansowana Analityka
            </CardTitle>
            <CardDescription>
              Głębsze analizy i trendy rozwoju
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-gradient-primary/10 hover-lift transition-smooth">
                <Zap className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">Efektywność Ogólna</div>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gradient-accent/10 hover-lift transition-smooth">
                <PieChart className="h-8 w-8 mx-auto mb-4 text-accent" />
                <div className="text-2xl font-bold text-accent">12.5x</div>
                <div className="text-sm text-muted-foreground">ROI Inwestycji</div>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-gradient-card hover-lift transition-smooth">
                <BarChart3 className="h-8 w-8 mx-auto mb-4 text-success" />
                <div className="text-2xl font-bold text-success">2.8M</div>
                <div className="text-sm text-muted-foreground">Zasięg Marketingowy</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;