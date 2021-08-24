from django.shortcuts import redirect
from django.shortcuts import render
from django.utils import timezone
from .models import Post
from django.shortcuts import render, get_object_or_404
from .forms import PostForm



# Create your views here.


def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

def base(request):
    post = Post
    return render(request, 'blog/base.html', {'post': post})

def about(request):
    post = Post
    return render(request, 'blog/about.html', {'post': post})

def resume(request):
    post = Post
    return render(request, 'blog/resume.html', {'post': post})

def portfolio(request):
    post = Post
    return render(request, 'blog/portfolio.html', {'post': post})

def contact(request):
    post = Post
    return render(request, 'blog/contact.html', {'post': post})

