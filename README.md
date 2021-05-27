
# The WebGUI8 Content Management System

## About

WebGUI is a mature, feature rich Content Management System.  It's written in Perl and licensed under the GNU GPL.  Some features include:

* Hierarchical permissions
* Groups of groups of groups (etc)
* Asset versioning
* A workflow builder that can do things like require two Content Managers to give approval before user submitted content goes online
* Selectable workflows for new/edited assets
* Assets create other assets; almost everything is an asset
* Easily, cleanly extensible OO architecture
* Discussion boards, shops, image galleries, ticket trackers, and various other types of interactive content
* Scalable architecture suitable for busy sites

## Installation

Deploying a Docker Image is the easiest method.

The Source Install process should support any system that supports MariaDB or MySQL, has a semi-recent version of Perl, and is supported by the necessary system
libraries (libgd, for example).

### Docker Image

An experimental Docker image is available on Docker Hub:

    XXX where are they?  Probably don't want to publish these under my name.  Create an org?
    t.b.d.

See https://docs.docker.com/install/ for instructions on installing Docker.

Once Docker is installed, run these commands as root to start WebGUI:

    docker pull scrottie/webgui8                    # XXX old image; new one may be at a different location
    docker run -p 80:80 scrottie/webgui8:latest     # adding '-t -i' flags runs it interactively

If not run interactively, `docker ps -l` shows the last Docker container started, `docker log <id>` shows the output (which will be the `plack` process output for WebGUI), and `docker stop <id>` stops it.

Use `docker stop <id>` to stop the container and `docker start <id>` to start it again.  `docker ps -a` shows all containers, including stopped ones.

Each time `docker run` is executed, a new, distinct, persistent copy of WebGUI's database and uploads will be created.  Generally, you'll want to only one or a few containers, and then continue to re-start that same one or few.  That way, changes you've made in the CMS are persisted.

See http://docker.com for more usage information, and for installation instructions for Windows and Mac OSX.

Please report problems and suggestions for improvements for that in the Docker ticket at https://github.com/AlliumCepa/webgui/issues/8 or on https://github.com/AllumCepa/webgui/issues.

### Source Installation

Use this manual installation from source for OSX, FreeBSD, and other systems, or for those who like to see exactly what is happening.

You'll need the system packages (dev or source installs of needed libraries) used by wG and the Perl modules wG uses.
On Debian, at least the following system packages are needed:
```
apt-get install
   perl cpanminus libaspell-dev make libdbd-mysql-perl libdigest-perl-md5-perl libxml-simple-perl \
   libmodule-install-perl gcc libperl-dev libmysql++-dev libpng-dev build-essential libgd-dev mariadb-client
```

This assumes that your site is "www.example.com".  If it's something else, change the commands to match.

Generic source install instructions:

* Run `perl sbin/testEnvironment.pl` to install Perl module deps
* Create a database named after your site, such as `www_whatever_com`
* Load `share/create.sql` into your MySQL/MariaDB/Percona
* Copy [etc/WebGUI.conf.original](etc/WebGUI.conf.original) to `etc/www.whatever.com.conf`
* Edit the conf file and set `dbuser`, `dbpass`, `dsn`, `uploadsPath` (eg to `/data/domains/www.example.com/public/uploads/`), `extrasPath`, `maintenancePage`, and `siteName`.  You can point `extrasPath` at the existing copy under `www/extras` if you're only hosting one site on wG.  Otherwise, make a per-site copy.
* Copy the `extras` directory from whereever you unpacked it to whereever you pointed `extrasPath` to in the config file.
* Copy [etc/log.conf.original](etc/log.conf.original) to `etc/log.conf`
* Edit `etc/log.conf` such that `log4perl.appender.mainlog.filename` points to a writable path.  For example: `log4perl.appender.mainlog.filename = webgui.log` works for local development
* Set `WEBGUI_CONFIG` to point at your new config file.  For example: `export WEBGUI_CONFIG=www.whatever.com.conf`
* Run upgrades (yes, even for brand new install):  `wgd reset --upgrade`

More detailed (but less well maintained) instructions are in [docs/install.txt](docs/install.txt).

## To start WebGUI

To test or develop:

* Set the PERL5LIB environment variable:  export PERL5LIB='/data/WebGUI/lib'
* Launch it:   plackup app.psgi

See docs/install.txt for more detailed installation instructions.

A production site or a dev site that tests sending email or workflows will also need the spectre daemon running.

A proxy server such as nginx or Apache configured to proxy is highly recommended for production sites.
The proxy server should serve /extras and /uploads and pass everything else to the plack server process.
See docs/install.txt for a recommended plack configuration for production.

## Using WebGUI

* Setting up a new site after you've installed and started wG:  https://www.youtube.com/watch?v=spPQsD4uAAs
* Help forums:  http://webgui.org/forums
* Content Managers Guide:  https://www.webgui.org/community/webgui-user-guides/content-managers-guide
* Administrators Guide:  https://www.webgui.org/user-guides/webgui-administrators-guide

## Developing Applications on top of WebGUI

* Doug Bell's talk for MadMongers:  http://preaction.github.io/WebGUI/8-apps.html
* Developers Guide for wG7 (out of date with respect to 8):  https://www.webgui.org/user-guides/developers-guide

## Community Process

We welcome contributions.

Where things are at:

* The (an?) unofficial community process repo is at http://github.org/AlliumCepa/webgui
* The bug tracker for this community effort is here:  http://github.com/AlliumCepa/webgui/issues
* The original bug tracker is here:  http://www.webgui.org/8
* Developer discussion forums, for conversations relating to the code itself, are here:  http://www.webgui.org/webgui/dev/discuss
* IRC chat is at #webgui on irc.perl.org/MAGnet; use your favorite IRC-enabled chat client or see irc.org for more info
* The Wiki is at http://webgui.org/wiki
* The official PlainBlack WebGUI repo is at http://github.org/plainblack/webgui

If you connect to IRC, please be patient.  If you're not able to wait for a response, please consider email instead.

As a general rule, if you're fixing a bug mentioned in http://www.webgui.org/8, discuss it at http://www.webgui.org/webgui/dev/discuss.
If you're adding a new feature or want to talk about the community process itself, discuss it on https://github.com/AlliumCepa/webgui/issues/.

If you're adding a new feature, improving wG, or fixing bugs, please fork http://github.org/AlliumCepa/webgui.

There are plenty of ways to help:

* Install wG8, test it or just try to use it, and report bugs
* Discuss ideas for the community process
* Help update the Wiki
* Fix bugs
* Work on code

Fork http://github.org/AlliumCepa/webgui, make changes in master or in a branch, commit them, push them up, and then use github to send a "pull request".
If the request is accepted, your code goes into http://github.org/AlliumCepa/webgui.

Here are some specific tasks to be done:

* Work on an importer for WordPress sites:  https://github.com/AlliumCepa/webgui/issues/9
* Create a new, modern theme; documentation for doing this is in the _WebGUI Designers Guide_ at https://www.webgui.org/documentation2/webgui-designers-guide
* Merge in various projects people have started:  https://github.com/AlliumCepa/webgui/issues/3
* Forward port relevant bug fixes from the 7.x branch to 8.x.
* Fix up the Developer's Guide for 8.

Rules and process:

* This fork is run as a (hopefully) benevolent dictatorship, with scrottie having final say on matters
* For most matters, a rough consensus process between active developers will be used
* Everyone is welcome to participate provided they are kind to their fellow developers
* This fork and project are unofficial and not managed by PlainBlack Corp
* This project exists to support developers and to seek out and include work from different efforts to create a possible base for wG8.1
* The master branch should be kept in a working state; if you're doing something risky or want to commit something unfinished, please use a branch
* If you get on IRC, we can help you use git to create branches, fork, and so forth
* Code included into and developed through this community process may or may not be merged into the official PlainBlack WebGUI at their sole discretion
* Unit tests are requested where appropriate for code submissions (recommended for most new features and bug fixes) as they're officially required for code committed to official PlainBlack WebGUI
* To minimize merge conflicts, contributions should not cause undue numbers of changes; please do not reformat code, change whitespace, or make significant number of global replacements except by special arrangement among all concerned
* I (scrottie) may hand out and revoke commit bits as I deem predudent
* If you don't have a commit bit, don't worry, just send a pull request from your fork
* Generally, commit bits may be taken back if you're idle (but can be returned), or if you commit major things to the master branch without to discussion and wind up upsetting people
* The project is GPL licensed (see http://www.gnu.org/licenses/gpl.html for exact terms and conditions); use and modification of this code constitutes agreement to the terms; one of the terms is that code added to the project must also be released as GPL

## The Request Cycle

This needs to be moved to a design document.

* The root level app.psgi file loads all the config files found and loads the site specific psgi file for each, linking them to the proper host names.
* The site psgi file uses the WEBGUI_CONFIG environment variable to find the config.
* It instantiates the `$wg` WebGUI object (one per site).
* `$wg` creates and stores the `WebGUI::Config` (one per site)
* `$wg` creates the `$app` PSGI app code ref (one per site)
* `WebGUI::Middleware::Session` is wrapped around `$app` at the outer-most layer so that it can open and close the `$session` `WebGUI::Session`. Any other wG middleware that needs `$session` should go in between it and `$app` (`$session` created one per request)
* `$session` creates the `$session->user WebGUI::User`, `$session->request` `WebGUI::Session::Request`, and `$session->response` `WebGUI::Session::Response` objects (one per request)
* `lib/WebGUI.pm` does basic dispatch, first checking for a content handler, and then as a last resort (but the usual case), defaulting to the asset content handler.  Content handlers are listed in the config file, in order.
* The asset content handler, lib/WebGUI/Content/Asset.pm, looks up the asset by URL in the database, creates an instance of the specified class for that asset, and invokes it.


