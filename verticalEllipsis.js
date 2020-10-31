function verticalEllipsis(sel, endtags = "") {
/* if the block you want to cut text in doesn't have a fixed height but the parent does, specify an endtag parameter (eg '</div>', it can be a tag, tags and/or any content
  you don't want to mess with) when invoking the function and assign the parent to sel */
    var els = $(sel);
    var content;
    els.each(function() {
        while(this.scrollHeight > this.offsetHeight) {
            content = $(this).html();
            content = content.substring(0, content.length - endtags.length - 1) + endtags;
            $(this).html(content);
            if (this.scrollHeight <= this.offsetHeight) {
                content = content.substring(0, content.length - endtags.length - 3);
                $(this).html(content + "..." + endtags);
                break;
            }
        }
    });
}
