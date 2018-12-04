# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import sys
sys.path.insert(0, "/home/skjena/cancerTherapy/modules")

#from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import V1, State, Run, Arguments, Features, Settings
#from RESTAPI.mutationDnnWeb.mutationDnnWeb.models import V1, State, Run, Arguments, Features, Settings

admin.site.register(V1)
admin.site.register(State)
admin.site.register(Run)
admin.site.register(Arguments)
admin.site.register(Features)
admin.site.register(Settings)
