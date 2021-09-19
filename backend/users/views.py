from rest_framework.viewsets import ModelViewSet
from .models import CustomUser
from .serializers import UserSerializer


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()
