import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Settings as SettingsIcon, Palette, Bell, User, Shield, Download, Upload } from 'lucide-react';

const Settings = () => {
  const [theme, setTheme] = useState('dark');
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [accentColor, setAccentColor] = useState('#f59e0b');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    desktop: true,
    marketing: false
  });

  const [profile, setProfile] = useState({
    name: 'Jan Kowalski',
    email: 'jan.kowalski@example.com',
    avatar: '',
    bio: 'Przedsiębiorca passionate o rozwoju biznesu online',
    location: 'Warszawa, Polska',
    timezone: 'Europe/Warsaw'
  });

  const colorPresets = [
    { name: 'Ocean Blue', primary: '#0ea5e9', accent: '#f59e0b' },
    { name: 'Forest Green', primary: '#059669', accent: '#dc2626' },
    { name: 'Purple Magic', primary: '#7c3aed', accent: '#f59e0b' },
    { name: 'Sunset Orange', primary: '#ea580c', accent: '#3b82f6' },
    { name: 'Pink Dream', primary: '#ec4899', accent: '#10b981' },
    { name: 'Dark Elegance', primary: '#1f2937', accent: '#f59e0b' }
  ];

  const applyColorPreset = (preset: typeof colorPresets[0]) => {
    setPrimaryColor(preset.primary);
    setAccentColor(preset.accent);
    
    // Update CSS variables
    document.documentElement.style.setProperty('--primary', `${hexToHsl(preset.primary)}`);
    document.documentElement.style.setProperty('--accent', `${hexToHsl(preset.accent)}`);
  };

  const hexToHsl = (hex: string) => {
    // Simple hex to HSL conversion for demo
    // In production, you'd want a more robust conversion
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

  const exportSettings = () => {
    const settings = {
      theme,
      primaryColor,
      accentColor,
      notifications,
      profile,
      exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(settings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'imkeit-settings.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-4xl font-bold gradient-text">
            Ustawienia
          </h1>
          <p className="text-xl text-muted-foreground">
            Personalizuj swoje doświadczenie z iMakeIt!
          </p>
        </div>

        <Tabs defaultValue="appearance" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Wygląd
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profil
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Powiadomienia
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Prywatność
            </TabsTrigger>
            <TabsTrigger value="export" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Eksport
            </TabsTrigger>
          </TabsList>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Personalizacja Kolorów
                </CardTitle>
                <CardDescription>
                  Dostosuj kolory aplikacji do swoich preferencji
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="primary-color">Kolor Główny</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        id="primary-color"
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-16 h-10 rounded-lg border-2"
                      />
                      <Input
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        placeholder="#3b82f6"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="accent-color">Kolor Akcentu</Label>  
                    <div className="flex items-center gap-3">
                      <Input
                        id="accent-color"
                        type="color"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="w-16 h-10 rounded-lg border-2"
                      />
                      <Input
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        placeholder="#f59e0b"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Gotowe Szablony Kolorów</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {colorPresets.map((preset, index) => (
                      <div 
                        key={index} 
                        className="p-4 rounded-lg border cursor-pointer hover:border-primary transition-colors"
                        onClick={() => applyColorPreset(preset)}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div 
                            className="w-6 h-6 rounded-full border-2 border-white"
                            style={{ backgroundColor: preset.primary }}
                          ></div>
                          <div 
                            className="w-6 h-6 rounded-full border-2 border-white"
                            style={{ backgroundColor: preset.accent }}
                          ></div>
                        </div>
                        <h4 className="font-medium">{preset.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Zastosuj Zmiany
                  </Button>
                  <Button variant="outline">
                    Resetuj Domyślne
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Informacje Profilu
                </CardTitle>
                <CardDescription>
                  Zarządzaj swoimi danymi osobowymi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="profile-name">Imię i Nazwisko</Label>
                    <Input
                      id="profile-name"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profile-email">Email</Label>
                    <Input
                      id="profile-email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profile-bio">Bio</Label>
                  <Input
                    id="profile-bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    placeholder="Opowiedz coś o sobie..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="profile-location">Lokalizacja</Label>
                    <Input
                      id="profile-location"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profile-timezone">Strefa Czasowa</Label>
                    <Select value={profile.timezone} onValueChange={(value) => setProfile({...profile, timezone: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Europe/Warsaw">Europe/Warsaw</SelectItem>
                        <SelectItem value="Europe/London">Europe/London</SelectItem>
                        <SelectItem value="America/New_York">America/New_York</SelectItem>
                        <SelectItem value="Asia/Tokyo">Asia/Tokyo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="bg-gradient-primary hover:opacity-90">
                  Zapisz Profil
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Powiadomienia
                </CardTitle>
                <CardDescription>
                  Kontroluj jak i kiedy otrzymujesz powiadomienia
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium">Powiadomienia Email</h4>
                      <p className="text-sm text-muted-foreground">
                        Otrzymuj aktualizacje o projektach i kursach
                      </p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium">Powiadomienia Push</h4>
                      <p className="text-sm text-muted-foreground">
                        Natychmiastowe powiadomienia w przeglądarce
                      </p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium">Powiadomienia Desktop</h4>
                      <p className="text-sm text-muted-foreground">
                        Powiadomienia systemowe na pulpicie
                      </p>
                    </div>
                    <Switch
                      checked={notifications.desktop}
                      onCheckedChange={(checked) => setNotifications({...notifications, desktop: checked})}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium">Marketing Email</h4>
                      <p className="text-sm text-muted-foreground">
                        Otrzymuj informacje o nowych kursach i promocjach
                      </p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Prywatność i Bezpieczeństwo
                </CardTitle>
                <CardDescription>
                  Zarządzaj swoimi danymi i ustawieniami prywatności
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-card">
                    <h4 className="font-medium mb-2">Dane Profilu</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Kontroluj widoczność swoich danych w aplikacji
                    </p>
                    <Button variant="outline" size="sm">
                      Zarządzaj Danymi
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-card">
                    <h4 className="font-medium mb-2">Historia Aktywności</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Wyczyść lub eksportuj historię swojej aktywności
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Eksportuj
                      </Button>
                      <Button variant="destructive" size="sm">
                        Wyczyść
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-card">
                    <h4 className="font-medium mb-2">Konto</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Zarządzaj swoim kontem i hasłem
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Zmień Hasło
                      </Button>
                      <Button variant="destructive" size="sm">
                        Usuń Konto
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Export Tab */}
          <TabsContent value="export" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Eksport i Import Ustawień
                </CardTitle>
                <CardDescription>
                  Zarządzaj swoimi ustawieniami aplikacji
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg bg-gradient-card text-center">
                    <Download className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Eksportuj Ustawienia</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pobierz plik z wszystkimi swoimi ustawieniami
                    </p>
                    <Button onClick={exportSettings} className="bg-gradient-primary hover:opacity-90">
                      <Download className="h-4 w-4 mr-2" />
                      Eksportuj
                    </Button>
                  </div>

                  <div className="p-6 rounded-lg bg-gradient-card text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-accent" />
                    <h3 className="font-semibold mb-2">Importuj Ustawienia</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Przywróć ustawienia z pliku kopii zapasowej
                    </p>
                    <Button className="bg-gradient-accent hover:opacity-90">
                      <Upload className="h-4 w-4 mr-2" />
                      Importuj
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Instrukcje Instalacji</h3>
                  <div className="p-4 rounded-lg bg-gradient-card">
                    <h4 className="font-medium mb-2">Jak zainstalować iMakeIt! jako aplikację</h4>
                    <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                      <li>Otwórz iMakeIt! w przeglądarce Chrome lub Edge</li>
                      <li>Kliknij ikonę "Zainstaluj" w pasku adresu (lub użyj menu ⋮ → "Zainstaluj iMakeIt!")</li>
                      <li>Potwierdź instalację klikając "Zainstaluj"</li>
                      <li>Aplikacja zostanie dodana do menu Start i pulpitu</li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-card">
                    <h4 className="font-medium mb-2">Jak ustawić własną ikonę</h4>
                    <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                      <li>Kliknij prawym przyciskiem na ikonę aplikacji na pulpicie</li>
                      <li>Wybierz "Właściwości" → zakładka "Skrót"</li>
                      <li>Kliknij "Zmień ikonę" i wybierz plik .ico</li>
                      <li>Potwierdź zmiany klikając "OK"</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;