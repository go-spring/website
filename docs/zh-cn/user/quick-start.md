---
title: 快速开始
---

# 快速开始

Go-Spring 当前使用 `Go1.12` 进行开发，使用 `Go Modules` 进行依赖管理。

**安装**

```
go get github.com/go-spring/go-spring
```

**创建 `server.go`**

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

**运行程序**

```
go run server.go
```

控制台输入 `curl http://127.0.0.1:8080/`， 可得到如下结果：

```
{"code":200,"msg":"SUCCESS","data":"/Users/didi/go"}
```