//const serverURL = 'http://192.168.1.6:3000'

async function postRequest(route = "", body = {}) {
  try {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function printContent() {
  const iframe = document.querySelector(".tox-tinymce").querySelector("iframe");
  const iframeDocument =
    iframe.contentDocument || iframe.contentWindow.document;
  const content = iframeDocument.getElementById("tinymce").innerHTML;
  document.getElementById("renderContent").innerHTML = content;
  console.log(content);
}

tinymce.init({
  selector: "textarea#default",
  content_css: "assets/css/tinymce.css",
  body_id: "hey",
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

const hey = document.getElementById("hey");
console.log(hey);
