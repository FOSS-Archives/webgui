package WebGUI::Macro::Backslash_pageUrl;

#-------------------------------------------------------------------
# WebGUI is Copyright 2001-2004 Plain Black Corporation.
#-------------------------------------------------------------------
# Please read the legal notices (docs/legal.txt) and the license
# (docs/license.txt) that came with this distribution before using
# this software.
#-------------------------------------------------------------------
# http://www.plainblack.com                     info@plainblack.com
#-------------------------------------------------------------------

use strict;
use WebGUI::Session;
use WebGUI::URL;

#-------------------------------------------------------------------
sub process {
	my $pathinfo = $session{env}{PATH_INFO};
        $pathinfo =~ s/^\/(.*)/$1/;
        return WebGUI::URL::getScriptURL().$pathinfo;
}


1;

