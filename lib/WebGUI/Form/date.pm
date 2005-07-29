package WebGUI::Form::date;

=head1 LEGAL

 -------------------------------------------------------------------
  WebGUI is Copyright 2001-2005 Plain Black Corporation.
 -------------------------------------------------------------------
  Please read the legal notices (docs/legal.txt) and the license
  (docs/license.txt) that came with this distribution before using
  this software.
 -------------------------------------------------------------------
  http://www.plainblack.com                     info@plainblack.com
 -------------------------------------------------------------------

=cut

use strict;
use base 'WebGUI::Form::text';
use WebGUI::DateTime;
use WebGUI::International;
use WebGUI::Session;
use WebGUI::Style;

=head1 NAME

Package WebGUI::Form::date

=head1 DESCRIPTION

Accepts and returns and epoch date and creates a date picker control.

=head1 SEE ALSO

This is a subclass of WebGUI::Form::text.

=head1 METHODS 

The following methods are specifically available from this class. Check the superclass for additional methods.

=cut

#-------------------------------------------------------------------

=head2 definition ( [ additionalTerms ] )

See the superclass for additional details.

=head3 additionalTerms

The following additional parameters have been added via this sub class.

=head4 maxlength

Defaults to 10. Determines the maximum number of characters allowed in this field.

=head4 size

Defaults to 10. The displayed size of the box for the date to be typed in.

=head4 noDate

By default a date is placed in the value field. Set this to "1" to leave it empty.

=head4 defaultValue

If no value is specified, this will be used. Defaults to today and now.

=cut

sub definition {
	my $class = shift;
	my $definition = shift || [];
	push(@{$definition}, {
		defaultValue=>{
			defaultValue=>time()
			},
		maxlength=>{
			defaultValue=> 10
			},
		size=>{
			defaultValue=> 10
			},
		noDate=>{
			defaultValue=>0
			}
		});
	return $class->SUPER::definition($definition);
}

#-------------------------------------------------------------------

=head2 getName ()

Returns the human readable name or type of this form control.

=cut

sub getName {
        return WebGUI::International::get("479","WebGUI");
}


#-------------------------------------------------------------------

=head2 getValueFromPost ( )

Returns a validated form post result. If the result does not pass validation, it returns undef instead.

=cut

sub getValueFromPost {
	my $self = shift;
	return WebGUI::DateTime::setToEpoch($session{cgi}->param($self->{name}));
}

#-------------------------------------------------------------------

=head2 toHtml ( )

Renders a date picker control.

=cut

sub toHtml {
        my $self = shift;
	my $value = WebGUI::DateTime::epochToSet($self->{value}) unless ($self->{noDate} && $self->{value} eq '');
	my $language  = WebGUI::International::getLanguage($session{user}{language},"languageAbbreviation");
	unless ($language) {
		$language = WebGUI::International::getLanguage("English","languageAbbreviation");
	}
        WebGUI::Style::setScript($session{config}{extrasURL}.'/calendar/calendar.js',{ type=>'text/javascript' });
        WebGUI::Style::setScript($session{config}{extrasURL}.'/calendar/lang/calendar-'.$language.'.js',{ type=>'text/javascript' });
        WebGUI::Style::setScript($session{config}{extrasURL}.'/calendar/calendar-setup.js',{ type=>'text/javascript' });
        WebGUI::Style::setLink($session{config}{extrasURL}.'/calendar/calendar-win2k-1.css', { rel=>"stylesheet", type=>"text/css", media=>"all" });
	my $mondayFirst = $session{user}{firstDayOfWeek} ? "true" : "false";
        return WebGUI::Form::text->new(
                name=>$self->{name},
                value=>$value,
                size=>$self->{size},
                extras=>$self->{extras},
		id=>$self->{id},
                maxlength=>$self->{maxlength}
                )->toHtml . '<script type="text/javascript"> 
                        Calendar.setup({ 
                                inputField : "'.$self->{id}.'", 
                                ifFormat : "%Y-%m-%d", 
                                showsTime : false, 
                                timeFormat : "12",
                                mondayFirst : '.$mondayFirst.'
                                }); 
                        </script>';
}

1;

