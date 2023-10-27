function printContent() {
    const iframe = document.querySelector("iframe#question_ifr");
    const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;
    const content = iframeDocument.getElementById("hey").innerHTML;
    document.getElementById("renderContent").innerHTML = content;
    console.log(content);
}

tinymce.init({
    selector: "textarea#question",
    content_css: "assets/css/tinymce.css",
    body_id: "hey",
    skin: "oxide-dark",
    content_css: "dark",
    plugins: [
        "advlist",
        "autolink",
        "link",
        "lists",
        "charmap",
        "preview",
        "anchor",
        "pagebreak",
        "searchreplace",
        "wordcount",
        "visualblocks",
        "code",
        "fullscreen",
        "insertdatetime",
        "media",
        "table",
        "emoticons",
        "codesample",
        "eqneditor",
    ],
    toolbar: "bold italic eqneditor | superscript subscript | undo redo |",
    //toolbar: 'undo redo | cut copy paste | bold italic underline | superscript subscript eqneditor | forecolor backcolor |  ' +  'bullist numlist outdent indent |',
    toolbar_mode: "wrap",
    menubar: false,
    statusbar: false,
    content_style: "body{font-family:Helvetica,Arial,sans-serif; font-size:16px}",
});