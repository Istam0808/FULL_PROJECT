from django.shortcuts import render
from rest_framework.views import APIView    
from rest_framework.response import Response
from rest_framework import status
from .models import Posts
from .serializers import PostsSerializer
# Create your views here.

class PostsApiView(APIView):
    

    def get(self, request):
        posts = Posts.objects.all()
        serializer = PostsSerializer(posts, many=True)
        return Response({"data": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = PostsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)
        return Response({"error" : serializer.errors }, status=status.HTTP_400_BAD_REQUEST)
