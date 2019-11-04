
RPC = $(shell find rpc -name '*.proto')
GO_TOOLS = $(shell grep _ tools.go | cut -d\" -f 2)
GO_TOOLS_DIR = _tools/bin/
GO_TOOLS_BIN = $(addprefix $(GO_TOOLS_DIR), $(notdir $(GO_TOOLS)))

export PATH:=${PWD}/${GO_TOOLS_DIR}:${PATH}

generate: tools api/demo/service.proto.ts web/demo/service.proto.ts
	@:
.PHONY: generate

tools: $(GO_TOOLS_BIN)
	@:
.PHONY: tools

api/demo/%: rpc/demo/*.proto
	protoc -I rpc:vendor --gotemplate_out=debug=true,single-package-mode=true,all=true,template_dir=vendor/github.com/slaskis/twirp-tmpl/server:api/rpc rpc/demo/*.proto

web/demo/%: rpc/demo/*.proto
	protoc -I rpc:vendor --gotemplate_out=debug=true,single-package-mode=true,all=true,template_dir=vendor/github.com/slaskis/twirp-tmpl/client:web/rpc rpc/demo/*.proto
	
$(GO_TOOLS_BIN): tools.go
	@mkdir -p $@
	GOBIN=${PWD}/${GO_TOOLS_DIR} go get -u ${GO_TOOLS}
	go mod vendor
