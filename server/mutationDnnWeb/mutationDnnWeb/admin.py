# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import V1, State, Run, Arguments, Features, Settings

admin.site.register(V1)
admin.site.register(State)
admin.site.register(Run)
admin.site.register(Arguments)
admin.site.register(Features)
admin.site.register(Settings)