# Use an official Nginx image as the base image
FROM nginx:alpine

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the current directory contents (your website) to the Nginx folder
COPY . /usr/share/nginx/html

# Expose port 80 to allow traffic to the webserver
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
