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
from django.conf.urls import include
from django.contrib import admin
from helloapp import views
from mutationDnnWeb import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    #url(r'^', views.home_view, name='home'),
    url(r'^v1/arguments/', views.ArgumentList.as_view()),
    url(r'^v1/state/', views.StateList.as_view()),
    url(r'^v1/run/', views.RunList.as_view()),
    url(r'^v1/features/', views.FeatureList.as_view()),
    url(r'^v1/settings/', views.SettingsList.as_view()),
]
