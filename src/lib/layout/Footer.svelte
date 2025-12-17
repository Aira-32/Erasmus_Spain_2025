<script>
  import { faInstagram } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<footer class="bg-bg-light border-t-2 border-accent py-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center justify-center space-y-4">
      <div class="flex gap-6">
        <!-- Instagram -->
        <a 
          href="https://www.instagram.com/aira_dev/" 
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:text-accent transition-colors translate-y-1"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} class="text-2xl" />
        </a>

        <!-- Portfolio -->
        <a 
          href="https://airadev-portfolio.netlify.app/" 
          target="_blank"
          rel="noopener noreferrer"
          class="bg-accent hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-sans"
        >
          <span>Portfolio</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="w-3 h-3"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>