FROM nginx

RUN apt update && apt -y install perl cpanminus libaspell-dev make libdbd-mysql-perl libdigest-perl-md5-perl libxml-simple-perl \
   libmodule-install-perl gcc libmagick++-dev libperl-dev libmysql++-dev && \
   ln -s /usr/include/x86_64-linux-gnu/ImageMagick-6/magick /usr/local/include/magick

RUN cpanm --notest --force IO::Interactive::Tiny LWP HTML::Form Net::DNS Try::Tiny HTTP::Request HTTP::Headers Test::More Test::MockObject Test::Deep \
   Test::LongString Test::Exception Test::MockTime Pod::Coverage Text::Balanced Digest::MD5 DBI DBD::mysql HTML::Parser Archive::Tar Clone Package::Stash \
   Archive::Zip IO::Zlib Compress::Zlib Net::SMTP MIME::Tools Net::POP3 Tie::IxHash XML::Simple DateTime Time::HiRes DateTime::Format::Strptime \
   DateTime::Format::HTTP Image::Magick Log::Log4perl Net::LDAP HTML::Highlight HTML::TagFilter HTML::Template HTML::Template::Expr MooseX::Storage \
   Template XML::FeedPP XML::FeedPP::MediaRSS JSON JSON::PP Config::JSON Text::CSV_XS Net::CIDR::Lite URI::Escape POSIX List::Util Color::Calc \
   Text::Aspell Weather::Com::Finder Class::InsideOut HTML::TagCloud Image::ExifTool Archive::Any Path::Class Exception::Class List::MoreUtils \
   File::Path Module::Find Class::C3 Params::Validate JavaScript::Packer CSS::Packer HTML::Packer Business::Tax::VAT::Validation Scope::Guard \
   Digest::SHA CSS::Minifier::XS JavaScript::Minifier::XS Readonly Business::PayPal::API Business::OnlinePayment Business::OnlinePayment::AuthorizeNet \
   Locales Test::Harness DateTime::Event::ICal Cache::FastMmap Test::Tester Test::Log::Dispatch CHI IO::Socket::SSL Net::Twitter PerlIO::eol IO::File::WithPath \
   Monkey::Patch Kwargs Data::ICal common::sense Geo::Coder::Googlev3 Storable Tie::CPHash DateTime::Format::Mail Finance::Quote Number::Format \
   POE POE::Component::IKC::Server POE::Component::Client::HTTP Net::Twitter Business::PayPal::API Geo::Coder::Googlev3 Plack UUID::Tiny HTTP::BrowserDetect

RUN apt remove -y cpanminus make gcc libmagick++-dev libperl-dev && rm -rf /root/.cpanm 

ADD etc  /WebGUI/etc
ADD lib  /WebGUI/lib
ADD sbin /WebGUI/sbin
ADD www  /WebGUI/www

WORKDIR /WebGUI