/*
 * Instagram Feed Integration
 * Fetches latest posts from Instagram Basic Display API
 */

class InstagramFeed {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.apiUrl = 'https://graph.instagram.com/me/media';
        this.maxPosts = 6;
    }

    async fetchPosts() {
        try {
            const response = await fetch(`${this.apiUrl}?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=${this.maxPosts}&access_token=${this.accessToken}`);
            const data = await response.json();
            
            if (data.error) {
                console.error('Instagram API Error:', data.error);
                return null;
            }
            
            return data.data;
        } catch (error) {
            console.error('Error fetching Instagram posts:', error);
            return null;
        }
    }

    async renderPosts() {
        const posts = await this.fetchPosts();
        const galleryGrid = document.querySelector('.gallery-grid');
        
        if (!posts || !galleryGrid) {
            console.log('Using fallback gallery images');
            return;
        }

        // Clear existing gallery items
        galleryGrid.innerHTML = '';

        // Add Instagram header
        const header = document.createElement('div');
        header.className = 'gallery-header';
        header.innerHTML = `
            <a href="https://www.instagram.com/gelato_house__/" target="_blank" class="instagram-btn">
                <i class="fab fa-instagram"></i> View on Instagram
            </a>
        `;
        galleryGrid.appendChild(header);

        // Create grid container
        const grid = document.createElement('div');
        grid.className = 'instagram-posts-grid';
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'gallery-item';
            
            const imageUrl = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
            
            postElement.innerHTML = `
                <img src="${imageUrl}" alt="Instagram Post" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fab fa-instagram"></i>
                </div>
            `;

            // Add click event to open Instagram post
            postElement.addEventListener('click', () => {
                window.open(post.permalink, '_blank');
            });

            grid.appendChild(postElement);
        });

        galleryGrid.appendChild(grid);
    }

    // Refresh posts every 30 minutes
    startAutoRefresh() {
        setInterval(() => {
            this.renderPosts();
        }, 30 * 60 * 1000); // 30 minutes
    }
}

// Initialize Instagram Feed when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // You need to replace 'YOUR_ACCESS_TOKEN' with your actual Instagram access token
    const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN_HERE';
    
    if (ACCESS_TOKEN && ACCESS_TOKEN !== 'YOUR_ACCESS_TOKEN_HERE') {
        const instagramFeed = new InstagramFeed(ACCESS_TOKEN);
        instagramFeed.renderPosts();
        instagramFeed.startAutoRefresh();
    } else {
        console.log('Instagram access token not configured. Using static gallery.');
    }
});
