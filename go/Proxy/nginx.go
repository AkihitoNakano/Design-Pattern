package main

import "fmt"

type Nginx struct {
	application       *Application
	maxAllowedRequest int
	rateLimiter       map[string]int
}

func newNginxServer() *Nginx {
	return &Nginx{
		application:       &Application{},
		maxAllowedRequest: 2,
		rateLimiter:       make(map[string]int),
	}
}

func (n *Nginx) handleRequest(url, method string) (int, string) {
	allowed := n.checkRateLimiting(url)
	if !allowed {
		return 403, "Not Allowed"
	}
	return n.application.handleRequest(url, method)
}

func (n *Nginx) checkRateLimiting(url string) bool {
	fmt.Println(n.rateLimiter[url])
	if n.rateLimiter[url] == 0 {
		n.rateLimiter[url] = 1
		// fmt.Println("1")
	}
	if n.rateLimiter[url] > n.maxAllowedRequest {
		return false
	}
	// fmt.Println("2")
	n.rateLimiter[url] = n.rateLimiter[url] + 1
	return true
}
