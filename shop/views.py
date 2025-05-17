from django.shortcuts import render

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage

def home(request): 
    """Главная страница сайта"""
    return render(request, 'shop/home.html', {'page_title': 'Главная'})

def about(request):
    """Страница «О компании» """
    return render(request, 'shop/about.html', {'page_title': 'О компании'})

def products(request):
    """Страница с информацией о продуктах"""
    return render(request, 'shop/products.html', {'page_title': 'Наши решения'})

def pricing(request):
    """Страница С товарами"""
    return render(request, 'shop/pricing.html', {'page_title': 'Рынки и предложение'})

def company(request):
    """Страница: Для компании"""
    return render(request, 'shop/proposal/company.html', {'page_title': 'Для-компании'})

def education(request):
    """Страница Образование"""
    return render(request, 'shop/proposal/education.html', {'page_title': 'Образование'})

def health(request):
    """Страница Здравоохранение"""
    return render(request, 'shop/proposal/health.html', {'page_title': 'Здравоохранение'})

def paymentCard(request):
    """Страница Платежная карта"""
    return render(request, 'shop/proposal/paymentCard.html', {'page_title': 'Платежная-карта'})

def retail(request):
    """Страница Розничная торговля"""
    return render(request, 'shop/proposal/retail.html', {'page_title': 'Розничная-торговля'})

def stateAuthorities(request):
    """Страница Государственные органы"""
    return render(request, 'shop/proposal/stateAuthorities.html', {'page_title': 'Государственные-органы'})

def transportation(request):
    """Страница Транспорт"""
    return render(request, 'shop/proposal/transportation.html', {'page_title': 'Транспорт'})

def vacation(request):
    """Страница Отдых"""
    return render(request, 'shop/proposal/vacation.html', {'page_title': 'Отдых'})

def agilia(request):
    """Страница agilia"""
    return render(request, 'shop/offers/agilia.html', {'page_title': 'agilia'})

def badgy(request):
    """Страница agilia"""
    return render(request, 'shop/offers/badgy200.html', {'page_title': 'badgy'})

def futronic(request):
    """Страница agilia"""
    return render(request, 'shop/offers/futronicFS80H.html', {'page_title': 'futronic'})

def primacy(request):
    """Страница agilia"""
    return render(request, 'shop/offers/primacy2.html', {'page_title': 'primacy'})

def zenius(request):
    """Страница agilia"""
    return render(request, 'shop/offers/zenius.html', {'page_title': 'zenius'})


@csrf_exempt  # для тестирования можно временно отключить CSRF, но лучше реализовать корректную передачу CSRF-токена
def send_email(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name', '').strip()
            email = data.get('email', '').strip()
            phone = data.get('phone', '').strip()
            message = data.get('message', '').strip()

            if name and email and '@' in email:
                subject = f"Сообщение от {name}"
                body = f"Имя: {name}\nEmail: {email}\nТелефон: {phone}\nСообщение: {message}"
                
                email_message = EmailMessage(
                    subject=subject,
                    body=body,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    to=[settings.DEFAULT_TO_EMAIL],
                    headers={'Reply-To': email}  
                )
                email_message.send(fail_silently=False)
                return JsonResponse({'status': 'success'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Неверные данные'}, status=400)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
    else:
        return JsonResponse({'status': 'error', 'message': 'Метод не поддерживается'}, status=405)