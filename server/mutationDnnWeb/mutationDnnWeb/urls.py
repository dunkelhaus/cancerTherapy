"""mutationDnnWeb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from helloapp import views
from rest_framework.views import Home

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', views.home_view, name='home'),

    #URL path can be whatever you want
    url(r'^api-auth/', include('rest_framework.urls'))
    url(r'^v1/', Home.as_view(), name='v1-home')
    url(r'^v1/run/', Home.as_view(), name='v1-run')
    url(r'^v1/settings/', Home.as_view(), name='v1-settings')
    url(r'^v1/state/', Home.as_view(), name='v1-state')
    url(r'^v1/arguents/', Home.as_view(), name='v1-arguments')
    url(r'^v1/features/', Home.as_view(), name='v1-features')
]
