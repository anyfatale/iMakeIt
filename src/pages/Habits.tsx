import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CheckCircle, Plus, Target, Calendar, TrendingUp, Award, Flame, Timer } from 'lucide-react';

const Habits = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: 'Poranne Czytanie',
      description: '30 minut czytania książek biznesowych',
      category: 'education',
      streak: 15,
      completedToday: true,
      weekProgress: [true, true, false, true, true, true, true],
      totalCompletions: 45,
      target: 'daily'
    },
    {
      id: 2,
      name: 'Planowanie Biznesowe',
      description: 'Przegląd i planowanie działań biznesowych',
      category: 'business',
      streak: 8,
      completedToday: true,
      weekProgress: [true, false, true, true, true, true, false],
      totalCompletions: 32,
      target: 'daily'
    },
    {
      id: 3,
      name: 'Networking',
      description: 'Kontakt z nową osobą z branży',
      category: 'networking',
      streak: 5,
      completedToday: false,
      weekProgress: [false, true, false, true, false, true, false],
      totalCompletions: 18,
      target: 'weekly'
    },
    {
      id: 4,
      name: 'Tworzenie Contentu',
      description: 'Publikacja na social media lub blog',
      category: 'marketing',
      streak: 12,
      completedToday: false,
      weekProgress: [true, true, true, false, true, false, false],
      totalCompletions: 38,
      target: 'daily'
    }
  ]);

  const [showNewHabit, setShowNewHabit] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      'education': 'bg-blue-500',
      'business': 'bg-green-500',
      'networking': 'bg-purple-500',
      'marketing': 'bg-orange-500',
      'health': 'bg-red-500',
      'personal': 'bg-gray-500'
    };
    return colors[category as keyof typeof colors] || colors.personal;
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      'education': 'Edukacja',
      'business': 'Biznes',
      'networking': 'Networking',
      'marketing': 'Marketing',
      'health': 'Zdrowie',
      'personal': 'Osobiste'
    };
    return labels[category as keyof typeof labels] || category;
  };

  const toggleHabit = (habitId: number) => {
    setHabits(habits.map(habit => 
      habit.id === habitId 
        ? { ...habit, completedToday: !habit.completedToday }
        : habit
    ));
  };

  const getWeeklyCompletionRate = () => {
    const totalDays = habits.length * 7;
    const completedDays = habits.reduce((sum, habit) => 
      sum + habit.weekProgress.filter(Boolean).length, 0
    );
    return Math.round((completedDays / totalDays) * 100);
  };

  const getCurrentStreak = () => {
    return Math.max(...habits.map(h => h.streak));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold gradient-text">
              Śledzenie Nawyków
            </h1>
            <p className="text-xl text-muted-foreground">
              Buduj pozytywne nawyki na drodze do sukcesu
            </p>
          </div>
          
          <Dialog open={showNewHabit} onOpenChange={setShowNewHabit}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                <Plus className="h-4 w-4 mr-2" />
                Nowy Nawyk
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card">
              <DialogHeader>
                <DialogTitle>Dodaj Nowy Nawyk</DialogTitle>
                <DialogDescription>
                  Stwórz nawyk który będzie wspierał Twój rozwój
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="habitName">Nazwa nawyku</Label>
                  <Input id="habitName" placeholder="np. Poranne ćwiczenia..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="habitDescription">Opis</Label>
                  <Input id="habitDescription" placeholder="Krótki opis nawyku..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Kategoria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz kategorię" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Edukacja</SelectItem>
                        <SelectItem value="business">Biznes</SelectItem>
                        <SelectItem value="networking">Networking</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="health">Zdrowie</SelectItem>
                        <SelectItem value="personal">Osobiste</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Częstotliwość</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Jak często?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Codziennie</SelectItem>
                        <SelectItem value="weekly">Tygodniowo</SelectItem>
                        <SelectItem value="monthly">Miesięcznie</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                    Dodaj Nawyk
                  </Button>
                  <Button variant="outline" onClick={() => setShowNewHabit(false)}>
                    Anuluj
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card hover-lift animate-fade-in-up">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dzisiejszy Postęp</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">
                {habits.filter(h => h.completedToday).length}/{habits.length}
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round((habits.filter(h => h.completedToday).length / habits.length) * 100)}% ukończone
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Najdłuższa Seria</CardTitle>
              <Flame className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{getCurrentStreak()}</div>
              <p className="text-xs text-muted-foreground">dni z rzędu</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tygodniowy Wynik</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{getWeeklyCompletionRate()}%</div>
              <p className="text-xs text-muted-foreground">wykonane w tym tygodniu</p>
            </CardContent>
          </Card>
        </div>

        {/* Habits List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Twoje Nawyki</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {habits.map((habit, index) => (
              <Card key={habit.id} className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getCategoryColor(habit.category)}`}></div>
                        {habit.name}
                      </CardTitle>
                      <CardDescription>{habit.description}</CardDescription>
                    </div>
                    <Badge variant="outline">
                      {getCategoryLabel(habit.category)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={() => toggleHabit(habit.id)}
                      className={`${habit.completedToday 
                        ? 'bg-success hover:bg-success/90' 
                        : 'bg-gradient-primary hover:opacity-90'
                      } transition-all`}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {habit.completedToday ? 'Ukończone!' : 'Oznacz jako zrobione'}
                    </Button>
                    <div className="flex items-center gap-2 text-sm">
                      <Flame className="h-4 w-4 text-warning" />
                      <span className="font-medium">{habit.streak} dni</span>
                    </div>
                  </div>

                  {/* Week Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Postęp w tym tygodniu</span>
                      <span>{habit.weekProgress.filter(Boolean).length}/7</span>
                    </div>
                    <div className="flex gap-1">
                      {habit.weekProgress.map((completed, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`flex-1 h-2 rounded ${
                            completed ? 'bg-success' : 'bg-muted'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      <span>Cel: {habit.target === 'daily' ? 'Codziennie' : 'Tygodniowo'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>{habit.totalCompletions} wykonań</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Overview */}
        <Card className="glass-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Przegląd Tygodnia
            </CardTitle>
            <CardDescription>
              Szczegółowy widok Twoich nawyków z ostatnich 7 dni
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-8 gap-2 text-sm">
                <div className="font-medium">Nawyk</div>
                {['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nie'].map(day => (
                  <div key={day} className="text-center font-medium text-muted-foreground">{day}</div>
                ))}
              </div>
              {habits.map(habit => (
                <div key={habit.id} className="grid grid-cols-8 gap-2 items-center">
                  <div className="text-sm font-medium truncate">{habit.name}</div>
                  {habit.weekProgress.map((completed, dayIndex) => (
                    <div key={dayIndex} className="flex justify-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        completed ? 'bg-success' : 'bg-muted'
                      }`}>
                        {completed && <CheckCircle className="h-3 w-3 text-success-foreground" />}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Habits;