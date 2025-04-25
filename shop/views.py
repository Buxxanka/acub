from django.shortcuts import render

def home(request): 
    """Главная страница сайта"""
    return render(request, 'shop/home.html', {'page_title': 'Главная'})

def about(request):
    """Страница «О компании» """
    return render(request, 'shop/about.html', {'page_title': 'О компании'})

def services(request):
    """Страница с информацией об услугах/продуктах"""
    return render(request, 'shop/services.html', {'page_title': 'Услуги'})

def contacts(request):
    """Страница с контакной информацией"""
    return render(request, 'shop/contacts.html', {'page_title': 'Контакты'})