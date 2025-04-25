from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('o-kompanii/', views.about, name='about'),
    path('uslugi/', views.services, name='services'),
    path('kontakty/', views.contacts, name='contacts'),
]