"""
WSGI config for mutationDnnWeb project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""

import os, sys

from django.core.wsgi import get_wsgi_application

apache_configuration = os.path.dirname(__file__)
project = os.path.dirname(apache_configuration)
workspace = os.path.dirname(project)
sys.path.append(workspace)
sys.path.append(project)

sys.path.append('/home/skjena/Code/cancerTherapy')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mutationDnnWeb.settings")

application = get_wsgi_application()
