
RPC = $(shell find rpc -name '*.proto')
GO_TOOLS = $(shell grep _ tools.go | cut -d\" -f 2)
GO_TOOLS_DIR = _tools/bin/
GO_TOOLS_BIN = $(addprefix $(GO_TOOLS_DIR), $(notdir $(GO_TOOLS)))

export PATH:=${PWD}/${GO_TOOLS_DIR}:${PATH}

generate: tools api/demo/service.proto.ts web/demo/service.proto.ts
	@:
.PHONY: generate

tools: $(GO_TOOLS_BIN)
	go mod vendor
.PHONY: tools

api/demo/%: rpc/demo/*.proto
	protoc -I rpc:vendor --gotemplate_out=debug=true,single-package-mode=true,all=true,template_dir=vendor/github.com/slaskis/twirp-tmpl/server:api rpc/demo/*.proto

cli/demo/%: rpc/demo/*.proto
	protoc -I rpc:vendor --gotemplate_out=debug=true,single-package-mode=true,all=true,template_dir=vendor/github.com/slaskis/twirp-tmpl/client:cli rpc/demo/*.proto
	
_tools/bin/%: tools.go
	@mkdir -p ${GO_TOOLS_DIR}
	GOBIN=${PWD}/${GO_TOOLS_DIR} go install ${GO_TOOLS}
