from .models import Places, Score, Tourapi, Youtube
from rest_framework import serializers

class YoutubesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Youtube
        fields = ['videoid', 'thumbnail', 'region', 'region1', 'region2', 'channelname', 'title', 'youtime', 'views']

class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ['lenreview', 'service', 'atmosphere', 'cost', 'visit', 'taste']
        
class TourapiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tourapi
        fields = '__all__'

class PlaceSerializer(serializers.ModelSerializer):
    score = ScoreSerializer(many=True, read_only=True)
    tourapi = TourapiSerializer(many=True, read_only=True)
    
    class Meta:
        model = Places
        fields = ['idx', 'pname', 'px', 'py', 'score', 'tourapi']
        
class YoutubeSerializer(serializers.ModelSerializer):
    places = PlaceSerializer(many=True, read_only=True)

    class Meta:
        model = Youtube
        fields = ['videoid', 'channelname', 'title', 'youtime', 'thumbnail', 'views', 'places']