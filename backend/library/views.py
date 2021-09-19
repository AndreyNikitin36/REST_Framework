from rest_framework.viewsets import ModelViewSet
from .models import Author
from .serializers import AuthorSerializer


class AuthorViewSet(ModelViewSet):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()
