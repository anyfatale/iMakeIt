import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Target, TrendingUp, Award, CheckCircle, Clock, Users, Star } from 'lucide-react';
import dashboardImage from '@/assets/dashboard-mockup.jpg';

const Dashboard = () => {
  const [stats, setStats] = useState({
    activeProjects: 12,
    completedHabits: 28,
    coursesInProgress: 5,
    streakDays: 15
  });

  const recentProjects = [
    { id: 1, name: 'E-commerce Launch', progress: 75, status: 'active', priority: 'high' },
    { id: 2, name: 'Marketing Campaign', progress: 90, status: 'review', priority: 'medium' },
    { id: 3, name: 'Brand Identity', progress: 45, status: 'active', priority: 'high' },
  ];

  const todayHabits = [
    { id: 1, name: 'Morning Reading', completed: true, streak: 12 },
    { id: 2, name: 'Business Planning', completed: true, streak: 8 },
    { id: 3, name: 'Networking Call', completed: false, streak: 5 },
    { id: 4, name: 'Content Creation', completed: false, streak: 15 },
  ];

  const recentCourses = [
    { id: 1, title: 'Digital Marketing Mastery', progress: 68, instructor: 'Sarah Johnson' },
    { id: 2, title: 'E-commerce Success', progress: 34, instructor: 'Michael Chen' },
    { id: 3, title: 'Brand Building 101', progress: 82, instructor: 'Lisa Rodriguez' },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold gradient-text">
              Witaj w iMakeIt! 🚀
            </h1>
            <p className="text-xl text-muted-foreground">
              Twoje centrum dowodzenia do sukcesu online
            </p>
          </div>
          <div className="hidden md:block">
            <img 
              src={dashboardImage} 
              alt="Dashboard Analytics" 
              className="w-48 h-32 object-cover rounded-xl glass-card opacity-50"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card hover-lift animate-fade-in-up">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aktywne Projekty</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.activeProjects}</div>
              <p className="text-xs text-muted-foreground">+2 od ostatniego tygodnia</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nawyki Dzisiaj</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{stats.completedHabits}</div>
              <p className="text-xs text-muted-foreground">2/4 ukończone dzisiaj</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Kursy w Toku</CardTitle>
              <BookOpen className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.coursesInProgress}</div>
              <p className="text-xs text-muted-foreground">3 nowe w tym miesiącu</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Seria Dni</CardTitle>
              <Award className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{stats.streakDays}</div>
              <p className="text-xs text-muted-foreground">Nowy rekord!</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <Card className="lg:col-span-2 glass-card animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Ostatnie Projekty
              </CardTitle>
              <CardDescription>
                Przegląd Twoich najaktywniejszych projektów
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-card hover-lift transition-smooth">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{project.name}</h4>
                      <Badge variant={project.priority === 'high' ? 'destructive' : 'secondary'}>
                        {project.priority === 'high' ? 'Wysoki' : 'Średni'}
                      </Badge>
                    </div>
                    <Progress value={project.progress} className="w-48" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{project.progress}%</div>
                    <div className="text-xs text-muted-foreground capitalize">{project.status}</div>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                Zobacz Wszystkie Projekty
              </Button>
            </CardContent>
          </Card>

          {/* Today's Habits */}
          <Card className="glass-card animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                Dzisiejsze Nawyki
              </CardTitle>
              <CardDescription>
                Twój dzienny plan rozwoju
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayHabits.map((habit) => (
                <div key={habit.id} className="flex items-center justify-between p-3 rounded-lg bg-gradient-card hover-lift transition-smooth">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${habit.completed ? 'bg-success' : 'bg-muted'}`}></div>
                    <div>
                      <div className={`text-sm font-medium ${habit.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {habit.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Seria: {habit.streak} dni
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Courses */}
        <Card className="glass-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-accent" />
              Kontynuuj Naukę
            </CardTitle>
            <CardDescription>
              Twoje ostatnio oglądane kursy edukacyjne
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentCourses.map((course) => (
                <div key={course.id} className="p-4 rounded-lg bg-gradient-card hover-lift transition-smooth">
                  <div className="space-y-3">
                    <h4 className="font-semibold">{course.title}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Postęp</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {course.instructor}
                    </div>
                    <Button size="sm" className="w-full bg-gradient-accent hover:opacity-90">
                      Kontynuuj
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;