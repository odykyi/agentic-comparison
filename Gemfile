source "https://rubygems.org"

# Lock ffi to a version compatible with Ruby 2.6
gem "ffi", "~> 1.15.0"

# Use older Jekyll version compatible with Ruby 2.6
gem "jekyll", "~> 3.9.0"
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-seo-tag", "~> 2.7"
  gem "jekyll-paginate", "~> 1.1"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Required for Ruby 3.0+, but also works with Ruby 2.6
gem "webrick", "~> 1.7"

# kramdown parser - required for Jekyll 3.9
gem "kramdown-parser-gfm"

# Workaround for eventmachine issues on macOS with Ruby 2.6
# This forces a pre-release version with better macOS support
gem "eventmachine", "~> 1.2.7"

# Alternative: If eventmachine still fails, you can:
# 1. Build without live reload: bundle exec jekyll serve --no-watch
# 2. Or upgrade Ruby to 3.0+ using rbenv/rvm
# 3. Or use Docker: docker run -v $(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll
