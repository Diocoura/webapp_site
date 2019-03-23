package main

import (
    "log"
    "net/http"

    "os"
    "io/ioutil"
     "bytes"
    "fmt"
)


var templatesDir = os.Getenv("TEMPLATES_DIR")


func handler(w http.ResponseWriter, r *http.Request) {
    url := "https://www.tripadvisor.fr/Restaurant_Review-g35805-d1894904-Reviews-The_Kerryman-Chicago_Illinois.html"
    titre := readPage(url)
    fmt.Fprintf(w, "Hi there, I love %s!", titre)
}


func readPage(url string)(string){
  resp, err := http.Get(url)

  if err != nil {
    panic(err)
  }

  defer resp.Body.Close()
  body, err := ioutil.ReadAll(resp.Body)
  if err != nil {
    panic(err)
  }

  fmt.Printf("%q\n", bytes.Split([]byte(body), []byte("avis")))
  if bytes.Contains(body, []byte("avis")) {
    fmt.Println("ok")
  }
  return "avis"
}

func main() {
    // Create route to  web page


    http.HandleFunc("/", handler)
    log.Println("Now server is running on port 8083")
    http.ListenAndServe(":8083", nil)
}
