import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Star, DollarSign, TrendingUp } from 'lucide-react';

const Marketplace = () => {
  const products = [
    {
      title: 'Premium Business Templates',
      price: '299 zł',
      rating: 4.9,
      sales: 1240,
      category: 'Templates'
    },
    {
      title: 'Marketing Automation Course',
      price: '599 zł',
      rating: 4.8,
      sales: 856,
      category: 'Education'
    },
    {
      title: 'E-commerce Starter Kit',
      price: '899 zł',
      rating: 4.7,
      sales: 634,
      category: 'Software'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold gradient-text">
            Marketplace 🛒
          </h1>
          <p className="text-xl text-muted-foreground">
            Sklep z najlepszymi narzędziami i kursami biznesowymi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="glass-card hover-lift animate-scale-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <Badge variant="outline">{product.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{product.sales} sprzedaży</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-success">{product.price}</span>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Kup teraz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;