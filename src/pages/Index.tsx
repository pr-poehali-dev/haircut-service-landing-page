import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const services = [
  { id: 1, name: 'Женская стрижка', price: '3500', duration: '60 мин', description: 'Профессиональная стрижка с укладкой' },
  { id: 2, name: 'Мужская стрижка', price: '2500', duration: '45 мин', description: 'Стильная мужская стрижка' },
  { id: 3, name: 'Окрашивание', price: '6500', duration: '120 мин', description: 'Профессиональное окрашивание волос' },
  { id: 4, name: 'Укладка', price: '2000', duration: '30 мин', description: 'Вечерняя и повседневная укладка' },
  { id: 5, name: 'Лечение волос', price: '4500', duration: '90 мин', description: 'Восстанавливающие процедуры' },
  { id: 6, name: 'Свадебная прическа', price: '8000', duration: '150 мин', description: 'Элегантная свадебная укладка' }
];

const masters = [
  { id: 1, name: 'Анна Петрова', specialization: 'Окрашивание и стрижки', experience: '12 лет', image: '/img/4c53dc68-81f6-46b7-aeb9-31d25cecaa28.jpg' },
  { id: 2, name: 'Мария Сидорова', specialization: 'Свадебные прически', experience: '8 лет', image: '/img/4c53dc68-81f6-46b7-aeb9-31d25cecaa28.jpg' },
  { id: 3, name: 'Елена Иванова', specialization: 'Мужские стрижки', experience: '10 лет', image: '/img/4c53dc68-81f6-46b7-aeb9-31d25cecaa28.jpg' }
];

const timeSlots = [
  '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

const reviews = [
  { id: 1, name: 'Ольга К.', rating: 5, text: 'Прекрасный салон! Анна сделала потрясающее окрашивание, очень довольна результатом.' },
  { id: 2, name: 'Дмитрий М.', rating: 5, text: 'Отличная мужская стрижка, буду приходить еще. Профессиональный подход.' },
  { id: 3, name: 'Екатерина В.', rating: 5, text: 'Свадебная прическа была просто идеальной! Спасибо Марии за волшебство.' }
];

export default function Index() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="text-primary" size={28} />
              <h1 className="font-playfair text-2xl font-bold text-secondary">Premium Hair</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#masters" className="hover:text-primary transition-colors">Мастера</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/img/337280d7-6cc8-4088-bbf4-4e0049c27105.jpg)' }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Премиум салон красоты
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-inter animate-fade-in">
            Индивидуальный подход к каждому клиенту. Профессиональные мастера с многолетним опытом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр парикмахерских услуг премиум класса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 hover-scale">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-playfair text-xl">{service.name}</CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {service.duration}
                    </Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">от {service.price} ₽</span>
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-4">
              Наши мастера
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессионалы с многолетним опытом и безупречной репутацией
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masters.map((master) => (
              <Card key={master.id} className="text-center hover:shadow-lg transition-shadow duration-300 hover-scale">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={master.image}
                      alt={master.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-playfair text-xl">{master.name}</CardTitle>
                  <CardDescription>{master.specialization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-4">
                    Опыт: {master.experience}
                  </Badge>
                  <div className="flex justify-center">
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                      <Icon name="User" className="mr-2" size={16} />
                      Записаться к мастеру
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-4">
              Онлайн запись
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите услугу, мастера и удобное время
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-center">Забронировать время</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Select onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id.toString()}>
                          {service.name} - {service.price}₽
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="master">Мастер</Label>
                  <Select onValueChange={setSelectedMaster}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите мастера" />
                    </SelectTrigger>
                    <SelectContent>
                      {masters.map((master) => (
                        <SelectItem key={master.id} value={master.id.toString()}>
                          {master.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Дата</Label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Время</Label>
                  <Select onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                <Icon name="Check" className="mr-2" size={20} />
                Подтвердить запись
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-primary fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-4">
              Контакты
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={32} />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  г. Москва, ул. Тверская, 12<br />
                  ТЦ "Центральный", 3 этаж
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={32} />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +7 (495) 123-45-67<br />
                  +7 (925) 987-65-43
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="Clock" className="mx-auto mb-4 text-primary" size={32} />
                <CardTitle>Время работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Пн-Вс: 9:00 - 21:00<br />
                  Без выходных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Crown" className="text-primary" size={24} />
                <h3 className="font-playfair text-xl font-bold">Premium Hair</h3>
              </div>
              <p className="text-gray-300">
                Премиум салон красоты с индивидуальным подходом к каждому клиенту.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Стрижки</li>
                <li>Окрашивание</li>
                <li>Укладки</li>
                <li>Лечение волос</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@premiumhair.ru</li>
                <li>г. Москва, ул. Тверская, 12</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Premium Hair. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}