from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    username = models.CharField(max_length=64, unique=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    avatar = models.ImageField(upload_to='users_avatars', blank=True)
    birthday = models.DateField(blank=True, default='1900-01-01')
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(verbose_name='активен', default=True)
