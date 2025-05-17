from django.urls import path
from . import views
from .views import send_email

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('pricing/', views.pricing, name='pricing'),
    path('products/', views.products, name='products'),
    path('company/', views.company, name='company'),
    path('education/', views.education, name='education'),
    path('health/', views.health, name='health'),
    path('paymentCard/', views.paymentCard, name='paymentCard'),
    path('retail/', views.retail, name='retail'),
    path('stateAuthorities/', views.stateAuthorities, name='stateAuthorities'),
    path('transportation/', views.transportation, name='transportation'),
    path('vacation/', views.vacation, name='vacation'),
    path('agilia/', views.agilia, name='agilia'),
    path('badgy200/', views.badgy, name='badgy200'),
    path('futronicFS80H/', views.futronic, name='futronicFS80H'),
    path('primacy2/', views.primacy, name='primacy2'),
    path('zenius/', views.zenius, name='zenius'),
    path('send-email/', send_email, name='send_email'),
]

