---
title: Quick Start
---

# Quick Start

Go-Spring was developed with `Go1.12` and using `Go Modules` for dependency management.

**Installation**

```
go get github.com/go-spring/go-spring
```

**Create `server.go`**

```
package main

import (
	"github.com/go-spring/go-spring/spring-boot"
	_ "github.com/go-spring/go-spring/starter-echo"
)

func init() {
	SpringBoot.RegisterBean(new(Echo)).Init(func(e *Echo) {
		SpringBoot.GetBinding("/", e.Call)
	})
}

type Echo struct {
	GoPath string `value:"${GOPATH}"`
}

func (e *Echo) Call() string {
	return e.GoPath
}

func main() {
	SpringBoot.RunApplication()
}
```

**Start server**

```
go run server.go
```

Enter `curl http://127.0.0.1:8080/` in console, and you will get：

```
{"code":200,"msg":"SUCCESS","data":"/Users/didi/go"}
```