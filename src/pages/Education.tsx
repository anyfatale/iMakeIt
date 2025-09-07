import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Play, Clock, Star, Users, Award, Search, Filter, ChevronRight } from 'lucide-react';

const Education = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Digital Marketing Mastery',
      description: 'Kompleksowy kurs marketingu cyfrowego dla przedsiębiorców',
      instructor: 'Sarah Johnson',
      duration: '8 godz',
      lessons: 24,
      rating: 4.8,
      students: 2847,
      category: 'marketing',
      level: 'intermediate',
      progress: 68,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      enrolled: true
    },
    {
      id: 2,
      title: 'E-commerce Success Blueprint',
      description: 'Budowa i rozwój sklepu internetowego od A do Z',
      instructor: 'Michael Chen',
      duration: '12 godz',
      lessons: 36,
      rating: 4.9,
      students: 1923,
      category: 'ecommerce',
      level: 'beginner',
      progress: 34,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      enrolled: true
    },
    {
      id: 3,
      title: 'Brand Building Fundamentals',
      description: 'Tworzenie silnej marki osobistej i biznesowej',
      instructor: 'Lisa Rodriguez',
      duration: '6 godz',
      lessons: 18,
      rating: 4.7,
      students: 3452,
      category: 'branding',
      level: 'beginner',
      progress: 82,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
      enrolled: true
    },
    {
      id: 4,
      title: 'Advanced Sales Strategies',
      description: 'Profesjonalne techniki sprzedaży i negocjacji',
      instructor: 'David Kim',
      duration: '10 godz',
      lessons: 30,
      rating: 4.6,
      students: 1576,
      category: 'sales',
      level: 'advanced',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400',
      enrolled: false
    },
    {
      id: 5,
      title: 'Social Media Growth Hacks',
      description: 'Szybki rozwój w mediach społecznościowych',
      instructor: 'Emma Wilson',
      duration: '5 godz',
      lessons: 15,
      rating: 4.5,
      students: 4231,
      category: 'social',
      level: 'intermediate',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
      enrolled: false
    },
    {
      id: 6,
      title: 'Financial Planning for Entrepreneurs',
      description: 'Zarządzanie finansami w biznesie online',
      instructor: 'Robert Brown',
      duration: '9 godz',
      lessons: 27,
      rating: 4.8,
      students: 1834,
      category: 'finance',
      level: 'intermediate',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
      enrolled: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Wszystkie', count: courses.length },
    { id: 'marketing', name: 'Marketing', count: courses.filter(c => c.category === 'marketing').length },
    { id: 'ecommerce', name: 'E-commerce', count: courses.filter(c => c.category === 'ecommerce').length },
    { id: 'branding', name: 'Branding', count: courses.filter(c => c.category === 'branding').length },
    { id: 'sales', name: 'Sprzedaż', count: courses.filter(c => c.category === 'sales').length },
    { id: 'social', name: 'Social Media', count: courses.filter(c => c.category === 'social').length },
    { id: 'finance', name: 'Finanse', count: courses.filter(c => c.category === 'finance').length }
  ];

  const achievements = [
    { id: 1, title: 'Pierwszy Kurs', description: 'Ukończ swój pierwszy kurs', icon: BookOpen, earned: true },
    { id: 2, title: 'Mistrz Marketingu', description: 'Ukończ 3 kursy marketingowe', icon: Award, earned: false },
    { id: 3, title: 'Student Roku', description: 'Spędź 50 godzin na nauce', icon: Star, earned: true },
    { id: 4, title: 'Social Guru', description: 'Ukończ wszystkie kursy social media', icon: Users, earned: false }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const enrolledCourses = courses.filter(course => course.enrolled);
  const completedHours = enrolledCourses.reduce((sum, course) => 
    sum + (parseInt(course.duration) * (course.progress / 100)), 0
  );

  const getLevelBadge = (level: string) => {
    const variants = {
      'beginner': 'success',
      'intermediate': 'warning',
      'advanced': 'destructive'
    } as const;
    
    const labels = {
      'beginner': 'Początkujący',
      'intermediate': 'Średniozaawansowany',
      'advanced': 'Zaawansowany'
    };

    return <Badge variant={variants[level as keyof typeof variants]}>{labels[level as keyof typeof labels]}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold gradient-text">
              Platforma Edukacyjna
            </h1>
            <p className="text-xl text-muted-foreground">
              Rozwijaj swoje umiejętności biznesowe z ekspertami branży
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{enrolledCourses.length}</div>
              <div className="text-muted-foreground">Kursy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{Math.round(completedHours)}</div>
              <div className="text-muted-foreground">Godzin</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{achievements.filter(a => a.earned).length}</div>
              <div className="text-muted-foreground">Odznaki</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-96">
            <TabsTrigger value="courses">Kursy</TabsTrigger>
            <TabsTrigger value="progress">Postęp</TabsTrigger>
            <TabsTrigger value="achievements">Odznaki</TabsTrigger>
            <TabsTrigger value="library">Biblioteka</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            {/* Search and Filters */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Szukaj kursów..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 overflow-x-auto">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className="whitespace-nowrap"
                      >
                        {category.name} ({category.count})
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <Card key={course.id} className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                      {course.enrolled && (
                        <Badge variant="success">Zapisany</Badge>
                      )}
                    </div>
                    <CardDescription className="line-clamp-2">
                      {course.description}
                    </CardDescription>
                    <div className="flex items-center gap-2">
                      {getLevelBadge(course.level)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.instructor}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                        <span className="text-muted-foreground">({course.students})</span>
                      </div>
                      <div className="text-muted-foreground">
                        {course.lessons} lekcji
                      </div>
                    </div>

                    {course.enrolled && course.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Postęp</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                    )}

                    <Button 
                      className={`w-full ${course.enrolled 
                        ? 'bg-gradient-accent hover:opacity-90' 
                        : 'bg-gradient-primary hover:opacity-90'
                      }`}
                    >
                      {course.enrolled ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          {course.progress > 0 ? 'Kontynuuj' : 'Rozpocznij'}
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Zapisz się
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {course.title}
                      <ChevronRight className="h-4 w-4" />
                    </CardTitle>
                    <CardDescription>
                      Instruktor: {course.instructor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Postęp kursu</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Ukończone lekcje</div>
                        <div className="font-medium">
                          {Math.round(course.lessons * (course.progress / 100))}/{course.lessons}
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Czas spędzony</div>
                        <div className="font-medium">
                          {Math.round(parseInt(course.duration) * (course.progress / 100))}h
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-accent hover:opacity-90" size="sm">
                      Kontynuuj naukę
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`glass-card ${achievement.earned ? 'ring-2 ring-accent' : 'opacity-60'}`}>
                  <CardContent className="p-6 text-center">
                    <achievement.icon className={`h-12 w-12 mx-auto mb-4 ${achievement.earned ? 'text-accent' : 'text-muted-foreground'}`} />
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                    {achievement.earned ? (
                      <Badge variant="success">Zdobyta!</Badge>
                    ) : (
                      <Badge variant="outline">Do zdobycia</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Library Tab */}
          <TabsContent value="library" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Biblioteka Zasobów</CardTitle>
                <CardDescription>
                  Dodatkowe materiały, szablony i narzędzia dla Twojego biznesu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'Szablony Email Marketing', type: 'PDF', size: '2.3 MB' },
                    { title: 'Kalkulator ROI', type: 'Excel', size: '1.1 MB' },
                    { title: 'Checklist Launch Product', type: 'PDF', size: '890 KB' },
                    { title: 'Social Media Templates', type: 'PSD', size: '15.2 MB' },
                    { title: 'Business Plan Template', type: 'Word', size: '3.4 MB' },
                    { title: 'Analytics Dashboard', type: 'Excel', size: '2.8 MB' }
                  ].map((resource, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gradient-card hover-lift transition-smooth">
                      <h4 className="font-medium mb-2">{resource.title}</h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>{resource.size}</span>
                      </div>
                      <Button size="sm" className="w-full mt-3 bg-gradient-primary hover:opacity-90">
                        Pobierz
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Education;