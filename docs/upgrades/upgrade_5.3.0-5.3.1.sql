insert into webguiVersion values ('5.3.1','upgrade',unix_timestamp());
delete from international where languageId=1 and namespace='DataForm' and internationalId=83;
insert into international (internationalId,languageId,namespace,message,lastUpdated,context) values (83,1,'DataForm','The following template variables are available for Data Form templates.\r\n<p/>\r\n\r\n<b>acknowledgement</b><br>\r\nThe acknowledgement specified in the wobject\'s properties. This message should be displayed after a user submits data.\r\n<p>\r\n<b>export.tab.url</b><br>\r\nFollowing this URL will export the data stored to this data form as a tab delimited file.\r\n<p>\r\n\r\n<b>export.tab.label</b><br>\r\nThe default label for the export.tab.url variable.\r\n<p>\r\n\r\n<b>entryList.url</b><br>\r\nFollowing this URL will display a list of all the record entries in this data form.\r\n<p>\r\n\r\n<b>entryList.label</b><br>\r\nThe default label for the entryList.url variable.\r\n<p>\r\n\r\n<b>canEdit</b>\r\nA conditional indicating whether the current user has the privileges to edit an existing entry or export the form\'s data.\r\n<p>\r\n\r\n<b>back.url</b><br>\r\nA url that will take you back to the default page in the form.\r\n<p>\r\n\r\n<b>back.label</b><br>\r\nThe default label for the back.url variable.\r\n<p>\r\n\r\n<b>username</b>*<br>\r\nThe username of the user that submitted the data.\r\n<p>\r\n\r\n<b>userId</b>*<br>\r\nThe user id of the user that submitted the data.\r\n<p>\r\n\r\n<b>date</b>*<br>\r\nThe date that this data was submitted or last updated formatted as the user\'s preferred date/time format.\r\n<p>\r\n\r\n\r\n<b>epoch</b>*<br>\r\nThe date that this data was submitted or last updated formatted as an epoch date.\r\n<p>\r\n\r\n<b>ipAddress</b>*<br>\r\nThe IP address of the user that submitted the data.\r\n<p>\r\n\r\n<b>edit.url</b>*<br>\r\nThe URL to the page to edit this entry.\r\n<p>\r\n\r\n<b>error_loop</b>*<br>\r\nA loop containing error information, for instance if someone doesn\'t fill out a required field.\r\n<p>\r\n\r\n<blockquote>\r\n\r\n<b>error.message</b>*<br>\r\nAn error message indicating what the user might have done wrong.\r\n\r\n</blockquote>\r\n\r\n<b>addField.url</b><br>\r\nThe URL that content managers will visit to add a new field to the form.\r\n<p>\r\n\r\n<b>addField.label</b><br>\r\nThe default label for the addField.url variable.\r\n<p>\r\n\r\n<b>form.start</b><br>\r\nThe beginning of the form.\r\n<p>\r\n\r\n<b>field_loop</b><br>\r\nA loop containing all of the field information.\r\n<p>\r\n\r\n<blockquote>\r\n\r\n<b>field.form</b><br>\r\nThe form element for this field.\r\n<p>\r\n\r\n<b>field.name</b><br>\r\nThe name of this field.\r\n<p>\r\n\r\n<b>field.value</b><br>\r\nThe value of this field. If this is new data, then the default value will be used.\r\n<p>\r\n\r\n<b>field.label</b><br>\r\nThe text label for this field.\r\n<p>\r\n\r\n<b>field.isHidden</b><br>\r\nA conditional indicating whether this field is supposed to be hidden. \r\n<p>\r\n\r\n<b>field.isDisplayed</b><br>\r\nA conditional indicating whether this field is supposed to be displayed. \r\n<p>\r\n\r\n<b>field.isEditable</b><br>\r\nA conditional indicating whether this field is editable. \r\n<p>\r\n\r\n<b>field.isRequired</b><br>\r\nA conditional indicating whether this field is required. \r\n<p>\r\n\r\n<b>field.isMailField</b><br>\r\nA conditional indicating whether this field is present only to facilitate sending an email. \r\n<p>\r\n\r\n\r\n<b>field.subtext</b><br>\r\nA description of the field so that users know what to put in the field.\r\n<p>\r\n\r\n<b>field.controls</b><br>\r\nWebGUI\'s administrative controls for this field.\r\n<p>\r\n\r\n</blockquote>\r\n\r\n<b>form.send</b><br>\r\nA form button with the word "send" printed on it.\r\n<p>\r\n\r\n<b>form.save/b><br>\r\nA form button with the word "save" printed on it.\r\n<p>\r\n\r\n<b>form.end</b><br>\r\nThe end of the form.\r\n<p>\r\n\r\n*Only available if the user has already submitted the form.', 1053948922,NULL);
delete from template where namespace='DataForm' and templateId=3;
INSERT INTO template VALUES (3,'Default Acknowledgement','<tmpl_var acknowledgement>\r\n<p />\r\n<table border=\"0\">\r\n<tmpl_loop field_loop>\r\n<tmpl_unless field.isMailField><tmpl_unless field.hidden>\r\n  <tr><td class=\"tableHeader\"><tmpl_var field.label></td>\r\n  <td class=\"tableData\"><tmpl_var field.value></td></tr>\r\n</tmpl_unless></tmpl_unless>\r\n</tmpl_loop>\r\n</table>\r\n<p />\r\n<a href=\"<tmpl_var back.url>\"><tmpl_var back.label></a>','DataForm');

