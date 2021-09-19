from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from library.views import AuthorViewSet
from users.views import UserViewSet

router = DefaultRouter()
router.register('authors', AuthorViewSet)
router.register('users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
