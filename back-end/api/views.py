from django.shortcuts import render, get_object_or_404
from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import YoutubesSerializer, YoutubeSerializer
from .models import Youtube, Places
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter

# Create your views here.
class YoutubeListAPIView(generics.ListAPIView):
    queryset = Youtube.objects.all()
    serializer_class = YoutubesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['region1', 'region2']

class YoutubeRetrieveAPIView(APIView):
    def get(self, request, video_id):
        youtube = get_object_or_404(Youtube, videoid=video_id)
        serializer = YoutubeSerializer(youtube, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

class YoutubeSearchAPIView(generics.ListAPIView):
    queryset = Youtube.objects.all()
    serializer_class = YoutubesSerializer
    filter_backends = [SearchFilter]
    search_fields = ('title', 'region', 'region1', 'region2', 'channelname', 'thumbnail', 'places__pname')