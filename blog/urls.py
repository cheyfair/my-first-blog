from django.conf.urls import url
from django.urls import path
from django.urls.resolvers import URLPattern
from . import views 

urlpatterns = [
    path('', views.base, name='base'),
    path('blog/', views.post_list, name='post_list'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('bio/', views.bio, name='bio'),
    path('skills/', views.cv, name='skills'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('contact/', views.contact, name='contact'),
]

