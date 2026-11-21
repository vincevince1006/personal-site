# frozen_string_literal: true

# Runs CSS files that have front matter (e.g. assets/css/main.css) through
# PostCSS using postcss.config.js (Tailwind, Autoprefixer, cssnano in production).
#
# Replaces the jekyll-postcss gem, which relies on a bash script and therefore
# doesn't work on Windows. This calls Node directly, so it works on Windows,
# macOS, Linux and Netlify with a single `bundle exec jekyll serve`.

require "open3"

module Jekyll
  module Converters
    class LocalPostCss < Converter
      safe true
      priority :normal

      RUNNER = File.expand_path("postcss-runner.js", __dir__)

      def matches(ext)
        ext.casecmp(".css").zero?
      end

      def output_ext(ext)
        ext
      end

      def convert(content)
        started = Time.now
        out, err, status = Open3.capture3(
          "node", RUNNER,
          :stdin_data => content,
          :chdir      => @config["source"],
          :binmode    => true
        )
        raise "PostCSS failed:\n#{err}" unless status.success?

        Jekyll.logger.info "PostCSS:", "compiled in #{(Time.now - started).round(2)}s"
        out.force_encoding(Encoding::UTF_8)
      rescue Errno::ENOENT
        raise "PostCSS: could not run `node`. Install Node.js and make sure it's on your PATH."
      end
    end
  end
end
