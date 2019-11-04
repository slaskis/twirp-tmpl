// +build tools
package tools

import (
	_ "github.com/golang/protobuf/protoc-gen-go"
	_ "moul.io/protoc-gen-gotemplate"
	_ "github.com/slaskis/twirp-tmpl/server"
	_ "github.com/slaskis/twirp-tmpl/client"
)
