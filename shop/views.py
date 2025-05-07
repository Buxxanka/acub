from django.shortcuts import render

def home(request): 
    """Главная страница сайта"""
    return render(request, 'shop/home.html', {'page_title': 'Главная'})

def about(request):
    """Страница «О компании» """
    return render(request, 'shop/about.html', {'page_title': 'О компании'})

def products(request):
    """Страница с информацией о продуктах"""
    return render(request, 'shop/products.html', {'page_title': 'Наши решения'})

def contacts(request):
    """Страница с контакной информацией"""
    return render(request, 'shop/contacts.html', {'page_title': 'Контакты'})

def pricing(request):
    """Страница С товарами"""
    return render(request, 'shop/pricing.html', {'page_title': 'Рынки и предложение'})

def faq(request):
    """Страница FAQ"""
    return render(request, 'shop/faq.html', {'page_title': 'FAQ'})