from django.shortcuts import render, get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import YoutubesSerializer, YoutubeSerializer
from .models import Youtube, Places
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
class YoutubeListAPIView(generics.LISTAPIView):
    queryset = Youtube.objects.all()
    serializer_class = YoutubesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['region']
    
class YoutubeRetrieveAPIView(APIView):
    def get(self, request, video_id):
        youtube = get_object_or_404(Youtube, videoid=video_id)
        serializer = YoutubeSerializer(youtube, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)