function WPSetThumbnailHTML(html){
	jQuery('#postthumbnaildiv .inside').html(html);
}
function WPSetThumbnailID(id){
	if ( jQuery('input[value=_thumbnail_id]').size() > 0 ) {
		jQuery('#meta\\[' + jQuery('input[value=_thumbnail_id]').attr('id').match(/[0-9]+/) + '\\]\\[value\\]' ).text(id);
	}
}