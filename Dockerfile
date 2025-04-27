
        # Use the official Ruby image as a base
        FROM ruby:3.1

        # Set the working directory
        WORKDIR /usr/src/app

        # Copy the Gemfile and Gemfile.lock files to the container
        COPY Gemfile* ./

        # Install Jekyll and dependencies
        RUN bundle install

        # Copy the rest of the site code
        COPY . .

        # Build the Jekyll site
        RUN bundle exec jekyll build

        # Expose the port Jekyll will run on
        EXPOSE 4000

        # Set the environment variable
        ENV JEKYLL_ENV=development

        # Command to serve the Jekyll site
        CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
