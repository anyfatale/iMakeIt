import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Library, Download, ExternalLink, Star, BookOpen, Video, FileText, Code } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: 'E-commerce Startup Guide',
      type: 'PDF',
      category: 'Business',
      rating: 4.9,
      downloads: 12450,
      icon: FileText,
      color: 'text-primary'
    },
    {
      title: 'React Advanced Patterns',
      type: 'Video Course',
      category: 'Development',
      rating: 4.8,
      downloads: 8920,
      icon: Video,
      color: 'text-accent'
    },
    {
      title: 'Marketing Automation Templates',
      type: 'Templates',
      category: 'Marketing',
      rating: 4.7,
      downloads: 15670,
      icon: Code,
      color: 'text-success'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold gradient-text">
            Centrum Zasobów 📚
          </h1>
          <p className="text-xl text-muted-foreground">
            Biblioteka narzędzi, szablonów i materiałów edukacyjnych
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="glass-card hover-lift animate-scale-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <resource.icon className={`h-8 w-8 ${resource.color}`} />
                  <div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <Badge variant="outline">{resource.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="text-sm">{resource.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{resource.downloads} pobrań</span>
                </div>
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <Download className="h-4 w-4 mr-2" />
                  Pobierz {resource.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;