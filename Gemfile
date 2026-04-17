source "https://rubygems.org"

# Jekyll 4.x with broader compatibility
gem "jekyll", "~> 4.3"
gem "minima", "~> 2.5"

# Use sassc-based converter for better Docker/ARM64 compatibility
gem "jekyll-sass-converter", "~> 2.0"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate"
end

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Required for Jekyll
gem "webrick", "~> 1.8"

# HTML Proofer for link validation
group :test do
  gem "html-proofer", "~> 5.0"
end
