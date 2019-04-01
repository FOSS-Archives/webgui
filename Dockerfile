# snapshot from linode2
FROM scrottie/webgui8:testing4
CMD /bin/sh /data/webgui.sh
# PORTS 0.0.0.0:80->80    # host machine port -> listen port in image   ... doesn't actually work; unrecongized
EXPOSE 80
# EXPOSE 8081
MAINTAINER Scott Walters <scott@slowass.net>
VOLUME /var/lib/mysql
VOLUME /data/domains/www.example.com/public/uploads

