// Code generated by goa v3.2.0, DO NOT EDIT.
//
// HTTP request path constructors for the resource service.
//
// Command:
// $ goa gen github.com/tektoncd/hub/api/design

package server

// QueryResourcePath returns the URL path to the resource service Query HTTP endpoint.
func QueryResourcePath() string {
	return "/query"
}

// ListResourcePath returns the URL path to the resource service List HTTP endpoint.
func ListResourcePath() string {
	return "/resources"
}
