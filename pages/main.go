package main

import (
    "html/template"
    "log"
    "net/http"
    "path/filepath"
    "os"
)


var templatesDir = os.Getenv("TEMPLATES_DIR")


func webapp(w http.ResponseWriter, r *http.Request) {
    // Build path to template
    tmplPath := filepath.Join(templatesDir, "index.js")
    // Load template from disk
    tmpl := template.Must(template.ParseFiles(tmplPath))
    // Inject data into template
    data := "La Chartreuse"
    tmpl.Execute(w, data)
}

func main() {
    // Create route to  web page
    http.HandleFunc("/", webapp)
    log.Println("Now server is running on port 8083")
    http.ListenAndServe(":8083", nil)
}
