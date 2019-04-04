FROM nginx

RUN apt update && apt -y install perl cpanminus libaspell-dev make libdbd-mysql-perl libdigest-perl-md5-perl libxml-simple-perl \
   libmodule-install-perl gcc libperl-dev libmysql++-dev libpng-dev build-essential libgd-dev mariadb-client

RUN cpanm --notest --force \
   Algorithm::Permute \
   App::Cmd \
   Archive::Any \
   Archive::Tar \
   Archive::Zip \
   Business::OnlinePayment \
   Business::OnlinePayment::AuthorizeNet \
   Business::PayPal::API \
   Business::Tax::VAT::Validation \
   CHI \
   CSS::Minifier::XS \
   CSS::Packer \
   Cache::FastMmap \
   Capture::Tiny \
   Class::C3 \
   Class::InsideOut \
   Clone \
   Color::Calc \
   Compress::Zlib \
   Config::JSON \
   DBD::mysql \
   DBI \
   Data::ICal \
   DateTime \
   DateTime::Event::ICal \
   DateTime::Format::HTTP \
   DateTime::Format::Mail \
   DateTime::Format::Strptime \
   Devel::StackTrace \
   Devel::StackTrace::WithLexicals \
   Digest::MD5 \
   Digest::SHA \
   Email::Valid \
   Exception::Class \
   Facebook::Graph \
   File::Path \
   Finance::Quote \
   GD \
   GD::Graph \
   Geo::Coder::Googlev3 \
   HTML::Form \
   HTML::Highlight \
   HTML::Packer \
   HTML::Parser \
   HTML::TagCloud \
   HTML::TagFilter \
   HTML::Template \
   HTML::Template::Expr \
   HTTP::BrowserDetect \
   HTTP::Exception \
   HTTP::Headers \
   HTTP::Request \
   IO::File::WithPath \
   IO::Interactive::Tiny \
   IO::Socket::SSL \
   IO::Zlib \
   Image::ExifTool \
   Imager \
   Imager::File::PNG \
   JSON \
   JSON::Any \
   JSON::PP \
   JavaScript::Minifier::XS \
   JavaScript::Packer \
   Kwargs \
   LWP \
   LWP::Protocol::https \
   List::MoreUtils \
   List::Util \
   Locales \
   Log::Log4perl \
   MIME::Tools \
   Module::Find \
   Monkey::Patch \
   Moose \
   MooseX::NonMoose \
   MooseX::Storage \
   MooseX::Storage::Format::JSON \
   Net::CIDR::Lite \
   Net::DNS \
   Net::LDAP \
   Net::POP3 \
   Net::SMTP \
   Net::Twitter \
   Number::Format \
   POE \
   POE::Component::Client::HTTP \
   POE::Component::IKC::Server \
   POSIX \
   Package::Stash \
   Params::Validate \
   Path::Class \
   PerlIO::eol \
   Plack \
   Plack::Middleware::Debug \
   Plack::Middleware::Status \
   Plack::Request \
   Plack::Response \
   Pod::Coverage \
   Readonly \
   Scope::Guard \
   Search::QueryParser \
   Storable \
   Template \
   Test::Class \
   Test::Deep \
   Test::Differences \
   Test::Exception \
   Test::Harness \
   Test::Log::Dispatch \
   Test::LongString \
   Test::MockObject \
   Test::MockTime \
   Test::More \
   Test::Tester \
   Test::WWW::Mechanize::PSGI \
   Text::Aspell \
   Text::Balanced \
   Text::CSV_XS \
   Tie::CPHash \
   Tie::IxHash \
   Time::HiRes \
   Try::Tiny \
   URI::Escape \
   UUID::Tiny \
   Weather::Com::Finder \
   XML::FeedPP \
   XML::FeedPP::MediaRSS \
   XML::Simple \
   common::sense \
   namespace::autoclean

RUN useradd --home=/WebGUI webgui

ADD lib      /WebGUI/lib
ADD sbin     /WebGUI/sbin
ADD share    /WebGUI/share
ADD www      /WebGUI/www
# do this one last so that it's quicker to rebuild when we change it
ADD etc      /WebGUI/etc

ADD app.psgi /WebGUI/app.psgi
ADD share/entrypoint /entrypoint

WORKDIR /WebGUI

RUN chown -R webgui: /WebGUI;chmod 755 /entrypoint

USER webgui

# RUN perl -Ilib /WebGUI/sbin/wgd reset --upgrade --config-file=webgui.conf --webgui-root=/WebGUI/  # can't do this as there's no 'db' host on the net when we're building
RUN perl -Ilib /WebGUI/sbin/wgd reset --uploads --config-file=webgui.conf --webgui-root=/WebGUI/

CMD [ "/entrypoint" ]

