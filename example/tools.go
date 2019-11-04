// +build tools
package tools

import (
	_ "github.com/golang/protobuf/protoc-gen-go"
	_ "github.com/twitchtv/twirp/protoc-gen-twirp"
	_ "github.com/slaskis/twirp-tmpl/server"
	_ "github.com/slaskis/twirp-tmpl/client"
)
