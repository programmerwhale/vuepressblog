# 小项目

## 用Go实现简单爬虫，爬取豆瓣电影Top250

1. 路径可以用Chrome浏览器F12打开调试，定位后用的`copy selector`获取到。

2. 如果是标签内普通的text文本，可以用正则表达式获取到。

代码全文：

```go
package main

import (
	"database/sql"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"goSpider/handler"
	"log"
	"regexp"
	"strconv"
	"strings"
	"time"
)

var DB *sql.DB

type MovieData struct {
	Title    string `json:"title"`
	Director string `json:"director"`
	Picture  string `json:"picture"`
	Actor    string `json:"actor"`
	Year     string `json:"year"`
	Score    string `json:"score"`
	Quote    string `json:"quote"`
}

func main() {
	DB=handler.InitDB()
	ch := make(chan bool)
	go Spider(strconv.Itoa(1*25), ch)
	<-ch
	DB.Close()
}

func Spider(page string, ch chan bool) {

	resp:=handler.WebRequest("GET","https://movie.douban.com/top250?start=",page)
	defer resp.Body.Close()
	docDetail, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		fmt.Println("fatal err")
		log.Fatal(err)
	}
	
	docDetail.Find("#content > div > div.article > ol > li > div"). //定位到html页面指定元素
		Each(func(i int, s *goquery.Selection) { //循环遍历每一个指定元素
			var movieData MovieData //实例化结构体
			// document.querySelector("#content > div > div.article > ol > li:nth-child(1) > div > div.info > div.hd > a > span:nth-child(1)")
			title := s.Find("div.info > div.hd > a > span:nth-child(1)").Text()
			img := s.Find("div.pic > a > img")
			imgTmp, ok := img.Attr("src")
			info := strings.Trim(s.Find("div.info > div.bd > p:nth-child(1)").Text(), " ")
			director, actor, year := InfoSpite(info)
			score := strings.Trim(s.Find("div.info > div.bd > div > span.rating_num").Text(), " ")
			score = strings.Trim(score, "\n")
			quote := strings.Trim(s.Find("div.info > div.bd > p.quote > span").Text(), " ")

			if ok { //将爬取到的内容放进结构体中
				movieData.Title = title
				movieData.Director = director
				movieData.Picture = imgTmp
				movieData.Actor = actor
				movieData.Year = year
				movieData.Score = score
				movieData.Quote = quote
				InsertSql(movieData) //将数据插入到mysql中
			} else {
				fmt.Println("not ok")
			}
		})
	if ch != nil {
		ch <- true
	}
}

func InfoSpite(info string) (director, actor, year string) {

	directorRe, _ := regexp.Compile(`导演:(.*)主演:`)
	if len(director) < 8 {
		director = string(directorRe.Find([]byte(info)))
	} else {
		director = string(directorRe.Find([]byte(info)))[8:]
	}
	director = strings.Trim(director, "主演:")
	actorRe, _ := regexp.Compile(`主演:(.*)`)
	if len(actor) < 8 {
		actor = string(actorRe.Find([]byte(info)))
	} else {
		actor = string(actorRe.Find([]byte(info)))[8:]
	}
	yearRe, _ := regexp.Compile(`(\d+)`)
	year = string(yearRe.Find([]byte(info)))
	return
}

func InsertSql(movieData MovieData) bool {

	fmt.Println("InsertSql")
	tx, err := DB.Begin()

	if err != nil {
		fmt.Println("tx fail", err)
		return false
	}
	stmt, err := tx.Prepare("INSERT INTO movie(`Title`,`Director`,`Picture`,`Actor`,`Year`,`Score`,`Quote`,`CreatedAt`) VALUES (?,?,?,?,?,?,?,?)")
	if err != nil {
		fmt.Println("Prepare fail", err)
		return false
	}
	fmt.Println(time.Now())
	_, err = stmt.Exec(movieData.Title, movieData.Director, movieData.Picture, movieData.Actor, movieData.Year, movieData.Score, movieData.Quote,time.Now())
	if err != nil {
		fmt.Println("Exec fail", err)
		return false
	}
	_ = tx.Commit()
	return true

}
```

参考链接：https://www.jianshu.com/p/c0357556cdca

***

