import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Settings, Award, TrendingUp, Target, Heart } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6 animate-fade-in-up">
          <Avatar className="h-32 w-32 mx-auto border-4 border-gradient-primary glow-primary">
            <AvatarFallback className="bg-gradient-primary text-white text-4xl font-bold">
              KP
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Kamil Poręba</h1>
            <p className="text-xl text-muted-foreground">Senior Developer & Business Strategist</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive fill-current animate-pulse" />
              <span>by</span>
              <span className="font-semibold gradient-text">Kamil Poręba</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card hover-lift animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Projekty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">47</div>
              <p className="text-sm text-muted-foreground">Ukończone projekty</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Osiągnięcia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">12</div>
              <p className="text-sm text-muted-foreground">Zdobyte nagrody</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                ROI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">385%</div>
              <p className="text-sm text-muted-foreground">Średnie ROI</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-gradient-primary hover:opacity-90">
            <Settings className="h-4 w-4 mr-2" />
            Edytuj Profil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;