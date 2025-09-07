import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Target, Calendar, User, MoreVertical, Filter, Search } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'E-commerce Platform Launch',
      description: 'Budowa kompletnej platformy e-commerce z integracją płatności',
      progress: 75,
      status: 'active',
      priority: 'high',
      dueDate: '2024-02-15',
      team: ['Anna K.', 'Michał P.', 'Kasia W.'],
      tasks: 12,
      completedTasks: 9
    },
    {
      id: 2,
      name: 'Marketing Campaign Q1',
      description: 'Kampania marketingowa na pierwszy kwartał z focus na social media',
      progress: 45,
      status: 'active',
      priority: 'medium',
      dueDate: '2024-03-01',
      team: ['Tomek L.', 'Ola S.'],
      tasks: 8,
      completedTasks: 3
    },
    {
      id: 3,
      name: 'Brand Identity Redesign',
      description: 'Odświeżenie identyfikacji wizualnej marki',
      progress: 90,
      status: 'review',
      priority: 'high',
      dueDate: '2024-01-25',
      team: ['Design Team'],
      tasks: 6,
      completedTasks: 5
    },
    {
      id: 4,
      name: 'Customer Support System',
      description: 'Implementacja nowego systemu obsługi klienta',
      progress: 20,
      status: 'active',
      priority: 'low',
      dueDate: '2024-04-10',
      team: ['IT Team'],
      tasks: 15,
      completedTasks: 3
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewProject, setShowNewProject] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      'active': 'default',
      'review': 'secondary',
      'completed': 'success',
      'paused': 'warning'
    } as const;
    
    const labels = {
      'active': 'Aktywny',
      'review': 'Przegląd',
      'completed': 'Ukończony',
      'paused': 'Wstrzymany'
    };

    return <Badge variant={variants[status as keyof typeof variants]}>{labels[status as keyof typeof labels]}</Badge>;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold gradient-text">
              Zarządzanie Projektami
            </h1>
            <p className="text-xl text-muted-foreground">
              Kontroluj wszystkie swoje projekty w jednym miejscu
            </p>
          </div>
          
          <Dialog open={showNewProject} onOpenChange={setShowNewProject}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                <Plus className="h-4 w-4 mr-2" />
                Nowy Projekt
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card">
              <DialogHeader>
                <DialogTitle>Stwórz Nowy Projekt</DialogTitle>
                <DialogDescription>
                  Dodaj szczegóły swojego nowego projektu
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nazwa projektu</Label>
                  <Input id="name" placeholder="Wpisz nazwę projektu..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Opis</Label>
                  <Textarea id="description" placeholder="Opisz swój projekt..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priorytet</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz priorytet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Niski</SelectItem>
                        <SelectItem value="medium">Średni</SelectItem>
                        <SelectItem value="high">Wysoki</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Termin</Label>
                    <Input id="dueDate" type="date" />
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                    Stwórz Projekt
                  </Button>
                  <Button variant="outline" onClick={() => setShowNewProject(false)}>
                    Anuluj
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Szukaj projektów..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Wszystkie</SelectItem>
                  <SelectItem value="active">Aktywne</SelectItem>
                  <SelectItem value="review">W przeglądzie</SelectItem>
                  <SelectItem value="completed">Ukończone</SelectItem>
                  <SelectItem value="paused">Wstrzymane</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      <Target className={`h-5 w-5 ${getPriorityColor(project.priority)}`} />
                      {project.name}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(project.status)}
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Postęp projektu</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{new Date(project.dueDate).toLocaleDateString('pl-PL')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{project.team.length} członków</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-muted-foreground">
                    {project.completedTasks}/{project.tasks} zadań ukończonych
                  </div>
                  <Button size="sm" className="bg-gradient-accent hover:opacity-90">
                    Otwórz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Card className="glass-card">
            <CardContent className="p-12 text-center">
              <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Brak projektów</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Nie znaleziono projektów pasujących do filtrów'
                  : 'Stwórz swój pierwszy projekt aby rozpocząć'
                }
              </p>
              {!searchTerm && filterStatus === 'all' && (
                <Button className="bg-gradient-primary hover:opacity-90" onClick={() => setShowNewProject(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Stwórz Pierwszy Projekt
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Projects;