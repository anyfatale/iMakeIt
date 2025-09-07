import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  Video, 
  Plus,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  Bell,
  Repeat,
  Star
} from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');

  const events = [
    {
      id: 1,
      title: 'Spotkanie z zespołem projektowym',
      time: '09:00 - 10:30',
      date: '2024-03-15',
      type: 'meeting',
      priority: 'high',
      attendees: ['Anna K.', 'Michał N.', 'Sarah J.'],
      location: 'Sala konferencyjna A',
      color: 'bg-primary',
      reminder: true
    },
    {
      id: 2,
      title: 'Workshop: AI w Biznesie',
      time: '14:00 - 17:00',
      date: '2024-03-15',
      type: 'workshop',
      priority: 'medium',
      attendees: ['120+ uczestników'],
      location: 'Online - Zoom',
      color: 'bg-accent',
      reminder: true,
      recurring: true
    },
    {
      id: 3,
      title: 'Prezentacja dla inwestorów',
      time: '11:00 - 12:00',
      date: '2024-03-16',
      type: 'presentation',
      priority: 'high',
      attendees: ['Investment Group'],
      location: 'Biuro - sala główna',
      color: 'bg-success',
      reminder: true
    },
    {
      id: 4,
      title: 'Code Review Session',
      time: '15:30 - 16:30',
      date: '2024-03-16',
      type: 'technical',
      priority: 'medium',
      attendees: ['Dev Team'],
      location: 'Online - Google Meet',
      color: 'bg-warning',
      reminder: false
    },
    {
      id: 5,
      title: 'Marketing Strategy Planning',
      time: '13:00 - 15:00',
      date: '2024-03-17',
      type: 'strategy',
      priority: 'high',
      attendees: ['Marketing Team'],
      location: 'Biuro - sala B',
      color: 'bg-primary',
      reminder: true,
      recurring: true
    }
  ];

  const upcomingEvents = events.slice(0, 3);

  const todayStats = {
    totalEvents: 4,
    meetings: 2,
    workshops: 1,
    deadlines: 1
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'meeting': return <Users className="h-4 w-4" />;
      case 'workshop': return <Star className="h-4 w-4" />;
      case 'presentation': return <Video className="h-4 w-4" />;
      case 'technical': return <Clock className="h-4 w-4" />;
      case 'strategy': return <CalendarIcon className="h-4 w-4" />;
      default: return <CalendarIcon className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-destructive';
      case 'medium': return 'border-l-warning';
      case 'low': return 'border-l-success';
      default: return 'border-l-muted';
    }
  };

  // Calendar grid generation (simplified)
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between animate-fade-in-up">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold gradient-text">
              Kalendarz & Terminarz 📅
            </h1>
            <p className="text-xl text-muted-foreground">
              Zarządzaj swoim czasem i nie przegap ważnych wydarzeń
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hover-lift">
              <Filter className="h-4 w-4 mr-2" />
              Filtruj
            </Button>
            <Button variant="outline" className="hover-lift">
              <Search className="h-4 w-4 mr-2" />
              Szukaj
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Nowe Wydarzenie
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Card className="glass-card hover-lift text-center">
            <CardContent className="pt-6">
              <CalendarIcon className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">{todayStats.totalEvents}</div>
              <div className="text-sm text-muted-foreground">Wydarzenia dzisiaj</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover-lift text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold text-accent">{todayStats.meetings}</div>
              <div className="text-sm text-muted-foreground">Spotkania</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover-lift text-center">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 mx-auto mb-2 text-success" />
              <div className="text-2xl font-bold text-success">{todayStats.workshops}</div>
              <div className="text-sm text-muted-foreground">Warsztaty</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover-lift text-center">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 mx-auto mb-2 text-warning" />
              <div className="text-2xl font-bold text-warning">{todayStats.deadlines}</div>
              <div className="text-sm text-muted-foreground">Deadline'y</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-3">
            <Card className="glass-card animate-slide-in-left">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl capitalize">
                    {formatMonth(currentDate)}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setCurrentDate(new Date())}
                    >
                      Dzisiaj
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So'].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDays().map((day, index) => (
                    <div 
                      key={index} 
                      className={`
                        min-h-24 p-2 border border-border/20 rounded-lg
                        ${day ? 'hover:bg-muted/20 cursor-pointer transition-colors' : ''}
                        ${day === new Date().getDate() ? 'bg-primary/10 border-primary/30' : ''}
                      `}
                    >
                      {day && (
                        <>
                          <div className="text-sm font-medium mb-1">{day}</div>
                          {/* Event indicators */}
                          {events
                            .filter(event => new Date(event.date).getDate() === day)
                            .slice(0, 2)
                            .map((event, eventIndex) => (
                              <div 
                                key={eventIndex}
                                className={`text-xs p-1 rounded ${event.color} text-white mb-1 truncate`}
                              >
                                {event.title}
                              </div>
                            ))
                          }
                          {events.filter(event => new Date(event.date).getDate() === day).length > 2 && (
                            <div className="text-xs text-muted-foreground">
                              +{events.filter(event => new Date(event.date).getDate() === day).length - 2} więcej
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card className="glass-card animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Nadchodzące Wydarzenia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id} 
                    className={`p-4 rounded-lg bg-gradient-card hover-lift transition-smooth border-l-4 ${getPriorityColor(event.priority)}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm leading-tight">{event.title}</h4>
                      <div className="flex items-center gap-1">
                        {event.reminder && <Bell className="h-3 w-3 text-warning" />}
                        {event.recurring && <Repeat className="h-3 w-3 text-muted-foreground" />}
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        {getEventIcon(event.type)}
                        {event.attendees.join(', ')}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                      <Button size="sm" variant="ghost" className="text-xs h-6">
                        Szczegóły
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-accent" />
                  Szybkie Akcje
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-primary hover:opacity-90 justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Zaplanuj spotkanie
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Video className="h-4 w-4 mr-2" />
                  Dodaj warsztat
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Clock className="h-4 w-4 mr-2" />
                  Ustaw przypomnienie
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift">
                  <Star className="h-4 w-4 mr-2" />
                  Oznacz jako ważne
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;