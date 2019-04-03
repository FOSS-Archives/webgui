FROM nginx

RUN apt update && apt -y install perl cpanminus libaspell-dev make libdbd-mysql-perl libdigest-perl-md5-perl libxml-simple-perl \
   libmodule-install-perl gcc libmagick++-dev libperl-dev libmysql++-dev && \
   ln -s /usr/include/x86_64-linux-gnu/ImageMagick-6/magick /usr/local/include/magick

RUN cpanm --notest --force \
   Archive::Any \
   Archive::Tar \
   Archive::Zip \
   Business::OnlinePayment \
   Business::OnlinePayment::AuthorizeNet \
   Business::PayPal::API \
   Business::PayPal::API \
   Business::Tax::VAT::Validation \
   CHI \
   CSS::Minifier::XS \
   CSS::Packer \
   Cache::FastMmap \
   Class::C3 \
   Class::InsideOut \
   Clone \
   Color::Calc \
   Compress::Zlib \
   common::sense \
   Config::JSON \
   DBD::mysql \
   DBI \
   Data::ICal \
   DateTime \
   DateTime::Event::ICal \
   DateTime::Format::HTTP \
   DateTime::Format::Mail \
   DateTime::Format::Strptime \
   Digest::MD5 \
   Digest::SHA \
   Exception::Class \
   Facebook::Graph \
   File::Path \
   Finance::Quote \
   Geo::Coder::Googlev3 \
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
   HTTP::Headers \
   HTTP::Request \
   IO::File::WithPath \
   IO::Interactive::Tiny \
   IO::Socket::SSL \
   IO::Zlib \
   Image::ExifTool \
   Image::Magick \
   Imager \
   JSON \
   JSON::PP \
   JavaScript::Minifier::XS \
   JavaScript::Packer \
   Kwargs \
   LWP \
   List::MoreUtils \
   List::Util \
   Locales \
   Log::Log4perl \
   MIME::Tools \
   Module::Find \
   Monkey::Patch \
   MooseX::NonMoose \
   MooseX::Storage \
   Net::CIDR::Lite \
   Net::DNS \
   Net::LDAP \
   Net::POP3 \
   Net::SMTP \
   Net::Twitter \
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
   Pod::Coverage \
   Readonly \
   Scope::Guard \
   Search::QueryParser \
   Storable \
   Template \
   Test::Deep \
   Test::Exception \
   Test::Harness \
   Test::Log::Dispatch \
   Test::LongString \
   Test::MockObject \
   Test::MockTime \
   Test::More \
   Test::Tester \
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
   XML::Simple

RUN apt remove -y gcc libmagick++-dev

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

USER root
CMD [ "/entrypoint" ]

