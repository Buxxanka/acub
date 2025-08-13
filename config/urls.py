from django.contrib import admin
from django.urls import path, include
from django.views.static import serve
from django.conf import settings

urlpatterns =+ [
    path('admin/', admin.site.urls),
    path('', include('shop.urls')),
    path("robots.txt", serve, {'path': 'robots.txt', 'document_root': settings.STATIC_ROOT}),
    path("ads.txt", serve, {'path': 'ads.txt', 'document_root': settings.STATIC_ROOT}),
    path("security.txt", serve, {'path': 'security.txt', 'document_root': settings.STATIC_ROOT}),
]
