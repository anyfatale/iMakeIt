import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Heart, 
  Reply, 
  Share2, 
  Bookmark,
  Search,
  Filter,
  Crown,
  Star,
  Award,
  Zap,
  Calendar,
  MapPin
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('feed');

  const posts = [
    {
      id: 1,
      author: 'Anna Kowalska',
      role: 'Marketing Expert',
      avatar: 'AK',
      time: '2 godziny temu',
      content: 'Właśnie ukończyłam projekt kampanii marketingowej dla e-commerce! 🚀 ROI wzrósł o 340%. Kluczem był precyzyjny targeting i A/B testing każdego elementu.',
      likes: 42,
      comments: 12,
      shares: 8,
      tags: ['marketing', 'ecommerce', 'success'],
      badge: 'expert'
    },
    {
      id: 2,
      author: 'Michał Nowak',
      role: 'Full-Stack Developer',
      avatar: 'MN',
      time: '4 godziny temu',
      content: 'Dzielę się moją architekturą microservices dla skalowalnych aplikacji. Użyłem Docker + Kubernetes + Redis. Performance improved by 85%! 💪',
      likes: 67,
      comments: 23,
      shares: 15,
      tags: ['development', 'architecture', 'performance'],
      badge: 'pro'
    },
    {
      id: 3,
      author: 'Sarah Johnson',
      role: 'Business Strategist',
      avatar: 'SJ',
      time: '1 dzień temu',
      content: 'Mój startup właśnie pozyskał funding Series A! 💰 Chcę podzielić się 10 najważniejszymi lekcjami z pitch procesu. Thread w komentarzach 👇',
      likes: 156,
      comments: 45,
      shares: 32,
      tags: ['startup', 'funding', 'business'],
      badge: 'founder'
    }
  ];

  const topMembers = [
    { name: 'Alex Rodriguez', points: 2840, avatar: 'AR', badge: 'legend' },
    { name: 'Maria Silva', points: 2156, avatar: 'MS', badge: 'expert' },
    { name: 'John Smith', points: 1923, avatar: 'JS', badge: 'pro' },
    { name: 'Emma Wilson', points: 1678, avatar: 'EW', badge: 'expert' },
  ];

  const events = [
    {
      id: 1,
      title: 'AI in Business Workshop',
      date: '15 Marzec 2024',
      time: '18:00',
      location: 'Online',
      attendees: 124,
      type: 'workshop'
    },
    {
      id: 2,
      title: 'Startup Pitch Night',
      date: '22 Marzec 2024',
      time: '19:30',
      location: 'Warszawa',
      attendees: 87,
      type: 'networking'
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      date: '28 Marzec 2024',
      time: '17:00',
      location: 'Online',
      attendees: 156,
      type: 'masterclass'
    }
  ];

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'legend': return <Crown className="h-3 w-3 text-warning" />;
      case 'expert': return <Star className="h-3 w-3 text-accent" />;
      case 'pro': return <Award className="h-3 w-3 text-primary" />;
      case 'founder': return <Zap className="h-3 w-3 text-success" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold gradient-text">
            Społeczność iMakeIt! 🌟
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Połącz się z tysiącami przedsiębiorców, dziel się doświadczeniami i rozwijaj swój biznes wspólnie z najlepszymi
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Card className="glass-card hover-lift text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">10,247</div>
              <div className="text-sm text-muted-foreground">Aktywni Członkowie</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover-lift text-center">
            <CardContent className="pt-6">
              <MessageCircle className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold text-accent">45,892</div>
              <div className="text-sm text-muted-foreground">Dyskusje</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover-lift text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-success" />
              <div className="text-2xl font-bold text-success">892</div>
              <div className="text-sm text-muted-foreground">Success Stories</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover-lift text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-warning" />
              <div className="text-2xl font-bold text-warning">24</div>
              <div className="text-sm text-muted-foreground">Wydarzenia w tym miesiącu</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            {/* Post Creation */}
            <Card className="glass-card animate-slide-in-left">
              <CardHeader>
                <CardTitle>Podziel się swoimi doświadczeniami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="Co nowego w Twoim biznesie? Podziel się sukcesami, wyzwaniami lub ciekawymi spostrzeżeniami..."
                  className="min-h-[100px] glass-card"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Search className="h-4 w-4 mr-2" />
                      Dodaj zdjęcie
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Dodaj tag
                    </Button>
                  </div>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Opublikuj
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="glass-card hover-lift animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{post.author}</h3>
                          {getBadgeIcon(post.badge)}
                          <Badge variant="secondary" className="text-xs">
                            {post.role}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{post.time}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">{post.content}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-6">
                        <Button variant="ghost" size="sm" className="hover:text-destructive">
                          <Heart className="h-4 w-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:text-primary">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:text-accent">
                          <Share2 className="h-4 w-4 mr-1" />
                          {post.shares}
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:text-warning">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Members */}
            <Card className="glass-card animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-warning" />
                  Top Członkowie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-card hover-lift transition-smooth">
                    <div className="text-sm font-medium text-muted-foreground">#{index + 1}</div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-accent text-white text-xs font-semibold">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <div className="font-medium text-sm">{member.name}</div>
                        {getBadgeIcon(member.badge)}
                      </div>
                      <div className="text-xs text-muted-foreground">{member.points} punktów</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="glass-card animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Nadchodzące Wydarzenia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="p-4 rounded-lg bg-gradient-card hover-lift transition-smooth">
                    <h4 className="font-medium mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {event.date} • {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3" />
                        {event.attendees} uczestników
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-3 bg-gradient-accent hover:opacity-90">
                      Dołącz
                    </Button>
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

export default Community;