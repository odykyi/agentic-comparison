# frozen_string_literal: true

require "html-proofer"

# HTML Proofer task for link validation
task :test do
  # Build the site first
  sh "bundle exec jekyll build"

  # Configure HTML Proofer
  options = {
    # Check internal links only (external links may timeout or be rate-limited)
    disable_external: true,
    
    # Allow hash references (for single-page navigation)
    allow_hash_href: true,
    
    # Ignore specific URLs that are known to be problematic
    url_ignore: [
      # External URLs that may be unavailable during testing
      /github\.com\/.*\/skills/,  # Placeholder skill repos
      /twitter\.com/,
      /linkedin\.com/,
    ],
    
    # Ignore specific files
    file_ignore: [
      # Skip files that intentionally have broken links for demonstration
    ],
    
    # Check HTML validation
    validation: {
      # Allow HTML5
      html5: true,
    },
    
    # Check images
    check_images: true,
    
    # Check links
    check_links: true,
    
    # Verbose output
    verbose: true,
  }

  # Run HTML Proofer on the built site
  HTMLProofer.check_directory("./_site", options).run
end

# Default task
task default: :test
