package WebGUI::Session::Request;
use strict;
use parent qw(Plack::Request);
use WebGUI::Session::Response;
use HTTP::BrowserDetect;
use HTTP::Date ();

=head1 SYNOPSIS

    my $session = WebGUI::Session->open(...);
    my $request = $session->request;

=head1 DESCRIPTION

WebGUI's PSGI request utility class. Sub-classes L<Plack::Request>.

An instance of this object is created automatically when the L<WebGUI::Session>
is created.

=head1 METHODS

=cut 

#-------------------------------------------------------------------

=head2 browser

Returns a HTTP::BrowserDetect object for the request.

=cut

sub browser {
    my $self = shift;
    return $self->env->{'webgui.browser'} ||= HTTP::BrowserDetect->new($self->user_agent);
}

#-------------------------------------------------------------------

=head2 clientIsSpider ( )

Returns true is the client/agent is a spider/indexer or some other non-human interface, determined
by checking the user agent against a list of known spiders.

=cut

sub clientIsSpider {
    my $self = shift;

    return 1
        if $self->user_agent eq ''
            || $self->user_agent =~ /^wre/
            || $self->browser->robot;
    return 0;

}

#-------------------------------------------------------------------

=head2 ifModifiedSince ( epoch [, maxCacheTimeout] )

Returns 1 if the epoch is greater than the modified date check.

=head3 epoch

The date that the requested content was last modified in epoch format.

=head3 maxCacheTimeout

A modifier to the epoch, that allows us to set a maximum timeout where content will appear to
have changed and a new page request will be allowed to be processed.

=cut

sub ifModifiedSince {
    my $self            = shift;
    my $epoch           = shift;
    my $maxCacheTimeout = shift;
    my $modified        = $self->header('If-Modified-Since');
    return 1 if ($modified eq "");
    $modified = HTTP::Date::str2time($modified);
    ##Implement a step function that increments the epoch time in integer multiples of
    ##the maximum cache time.  Used to handle the case where layouts containing macros
    ##(like assetproxied Navigations) can be periodically updated.
    if ($maxCacheTimeout) {
        my $delta = time() - $epoch;
        $epoch   += $delta - ($delta % $maxCacheTimeout);
    }
    return ($epoch > $modified);
}

#-------------------------------------------------------------------

=head2 new_response ()

Creates a new L<WebGUI::Session::Response> object.

N.B. A L<WebGUI::Session::Response> object is automatically created when L<WebGUI::Session> 
is instantiated, so in most cases you will not need to call this method.
See L<WebGUI::Session/response>

=cut

sub new_response {
    my $self = shift;
    return WebGUI::Session::Response->new(@_);
}

#-------------------------------------------------------------------

=head2 requestNotViewed ( )

Returns true is the client/agent is a spider/indexer or some other non-human interface

=cut

sub requestNotViewed {

    my $self = shift;
    return $self->clientIsSpider();
        # || $self->callerIsSearchSite();   # this part is currently left out because
                                            # it has minimal effect and does not manage
                                            # IPv6 addresses.  it may be useful in the 
                                            # future though

}

=head2 isAjax()

Returns true if the request is an AJAX request.
These need a JSON reply instead of HTML.

=cut

sub isAjax() {
    my $self = shift;
    return $self->header('Accept') =~ m|application/json|;  # XXX should probably make sure that when this appears, it comes before text/html in the list.
}

# This is only temporary
sub TRACE { 
    shift->env->{'psgi.errors'}->print(join '', @_, "\n");
}

1;
