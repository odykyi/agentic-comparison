# Create placeholder favicons
for size in 72 96 128 144 152 192 384 512; do
  echo "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"${size}\" height=\"${size}\" viewBox=\"0 0 ${size} ${size}\"><rect width=\"${size}\" height=\"${size}\" fill=\"#4f46e5\"/><text x=\"50%\" y=\"55%\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"${size%2}" font-weight=\"bold\" fill=\"white\">AC</text></svg>" > /private/var/www/agentic-comparison/assets/images/icon-${size}x${size}.png
done

# Create favicon PNGs
echo "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" fill=\"#4f46e5\"/><text x=\"16\" y=\"22\" font-family=\"system-ui\" font-size=\"14\" font-weight=\"bold\" fill=\"white\" text-anchor=\"middle\">AC</text></svg>" > /private/var/www/agentic-comparison/assets/images/favicon/favicon-32x32.png
echo "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><rect width=\"16\" height=\"16\" fill=\"#4f46e5\"/><text x=\"8\" y=\"12\" font-family=\"system-ui\" font-size=\"8\" font-weight=\"bold\" fill=\"white\" text-anchor=\"middle\">A</text></svg>" > /private/var/www/agentic-comparison/assets/images/favicon/favicon-16x16.png
echo "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"180\" height=\"180\" viewBox=\"0 0 180 180\"><rect width=\"180\" height=\"180\" fill=\"#4f46e5\"/><text x=\"90\" y=\"110\" font-family=\"system-ui\" font-size=\"72\" font-weight=\"bold\" fill=\"white\" text-anchor=\"middle\">AC</text></svg>" > /private/var/www/agentic-comparison/assets/images/favicon/apple-touch-icon.png

echo "Favicon placeholders created"