import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FileText, Calendar, Eye, Heart, MessageCircle } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: '10 Strategii Rozwoju E-commerce w 2024',
      excerpt: 'Odkryj najnowsze trendy i strategie, które pomogą Ci rozwinąć sklep internetowy...',
      author: 'Kamil Poręba',
      date: '15 Marzec 2024',
      category: 'E-commerce',
      views: 2450,
      likes: 89,
      comments: 23
    },
    {
      title: 'Jak Wykorzystać AI w Automatyzacji Marketingu',
      excerpt: 'Praktyczny przewodnik po implementacji sztucznej inteligencji w kampaniach...',
      author: 'Kamil Poręba',
      date: '12 Marzec 2024',
      category: 'AI & Marketing',
      views: 1890,
      likes: 67,
      comments: 18
    },
    {
      title: 'Sukces Startup-u: Od Pomysłu do Pierwszego Miliona',
      excerpt: 'Pełna historia rozwoju mojego startup-u z praktycznymi wskazówkami...',
      author: 'Kamil Poręba',
      date: '8 Marzec 2024',
      category: 'Startup',
      views: 3120,
      likes: 124,
      comments: 45
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold gradient-text">
            Blog iMakeIt! ✍️
          </h1>
          <p className="text-xl text-muted-foreground">
            Najnowsze artykuły o biznesie, technologii i przedsiębiorczości
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <Card key={index} className="glass-card hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-primary text-white text-xs font-semibold">
                        KP
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">{post.author}</div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {post.comments}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;