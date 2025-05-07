from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('o-kompanii/', views.about, name='about'),
    path('rinki-i-predlojenie/', views.pricing, name='pricing'),
    path('nashi-resheniya/', views.products, name='products'),
    path('kontakty/', views.contacts, name='contacts'),
    path('faq/', views.faq, name='faq'),
]