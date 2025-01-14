# `googleComputeBackendService` Submodule <a name="`googleComputeBackendService` Submodule" id="@cdktf/provider-google-beta.googleComputeBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBackendService <a name="GoogleComputeBackendService" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service google_compute_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendService;

GoogleComputeBackendService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .affinityCookieTtlSec(java.lang.Number)
//  .backend(IResolvable)
//  .backend(java.util.List<GoogleComputeBackendServiceBackend>)
//  .cdnPolicy(GoogleComputeBackendServiceCdnPolicy)
//  .circuitBreakers(GoogleComputeBackendServiceCircuitBreakers)
//  .compressionMode(java.lang.String)
//  .connectionDrainingTimeoutSec(java.lang.Number)
//  .consistentHash(GoogleComputeBackendServiceConsistentHash)
//  .customRequestHeaders(java.util.List<java.lang.String>)
//  .customResponseHeaders(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .edgeSecurityPolicy(java.lang.String)
//  .enableCdn(java.lang.Boolean)
//  .enableCdn(IResolvable)
//  .healthChecks(java.util.List<java.lang.String>)
//  .iap(GoogleComputeBackendServiceIap)
//  .id(java.lang.String)
//  .ipAddressSelectionPolicy(java.lang.String)
//  .loadBalancingScheme(java.lang.String)
//  .localityLbPolicies(IResolvable)
//  .localityLbPolicies(java.util.List<GoogleComputeBackendServiceLocalityLbPolicies>)
//  .localityLbPolicy(java.lang.String)
//  .logConfig(GoogleComputeBackendServiceLogConfig)
//  .outlierDetection(GoogleComputeBackendServiceOutlierDetection)
//  .portName(java.lang.String)
//  .project(java.lang.String)
//  .protocol(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .securitySettings(GoogleComputeBackendServiceSecuritySettings)
//  .serviceLbPolicy(java.lang.String)
//  .sessionAffinity(java.lang.String)
//  .strongSessionAffinityCookie(GoogleComputeBackendServiceStrongSessionAffinityCookie)
//  .timeouts(GoogleComputeBackendServiceTimeouts)
//  .timeoutSec(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.backend">backend</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>></code> | backend block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.customRequestHeaders">customRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.customResponseHeaders">customResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | The resource URL for the edge security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable Cloud CDN for this BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.iap">iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#id GoogleComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Indicates whether the backend service will be used with internal or external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.localityLbPolicies">localityLbPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>></code> | locality_lb_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.portName">portName</a></code> | <code>java.lang.String</code> | Name of backend port. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#project GoogleComputeBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol this BackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.securitySettings">securitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.serviceLbPolicy">serviceLbPolicy</a></code> | <code>java.lang.String</code> | URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `affinityCookieTtlSec`<sup>Optional</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.affinityCookieTtlSec"></a>

- *Type:* java.lang.Number

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#affinity_cookie_ttl_sec GoogleComputeBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.backend"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#backend GoogleComputeBackendService#backend}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.cdnPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#cdn_policy GoogleComputeBackendService#cdn_policy}

---

##### `circuitBreakers`<sup>Optional</sup> <a name="circuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.circuitBreakers"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#circuit_breakers GoogleComputeBackendService#circuit_breakers}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.compressionMode"></a>

- *Type:* java.lang.String

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#compression_mode GoogleComputeBackendService#compression_mode}

---

##### `connectionDrainingTimeoutSec`<sup>Optional</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.connectionDrainingTimeoutSec"></a>

- *Type:* java.lang.Number

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#connection_draining_timeout_sec GoogleComputeBackendService#connection_draining_timeout_sec}

---

##### `consistentHash`<sup>Optional</sup> <a name="consistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.consistentHash"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#consistent_hash GoogleComputeBackendService#consistent_hash}

---

##### `customRequestHeaders`<sup>Optional</sup> <a name="customRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.customRequestHeaders"></a>

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#custom_request_headers GoogleComputeBackendService#custom_request_headers}

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.customResponseHeaders"></a>

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#custom_response_headers GoogleComputeBackendService#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#description GoogleComputeBackendService#description}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.edgeSecurityPolicy"></a>

- *Type:* java.lang.String

The resource URL for the edge security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#edge_security_policy GoogleComputeBackendService#edge_security_policy}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.enableCdn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable Cloud CDN for this BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enable_cdn GoogleComputeBackendService#enable_cdn}

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.healthChecks"></a>

- *Type:* java.util.List<java.lang.String>

The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService.

Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#health_checks GoogleComputeBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.iap"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#iap GoogleComputeBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#id GoogleComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressSelectionPolicy`<sup>Optional</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.ipAddressSelectionPolicy"></a>

- *Type:* java.lang.String

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#ip_address_selection_policy GoogleComputeBackendService#ip_address_selection_policy}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* java.lang.String

Indicates whether the backend service will be used with internal or external load balancing.

A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#load_balancing_scheme GoogleComputeBackendService#load_balancing_scheme}

---

##### `localityLbPolicies`<sup>Optional</sup> <a name="localityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.localityLbPolicies"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>>

locality_lb_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#locality_lb_policies GoogleComputeBackendService#locality_lb_policies}

---

##### `localityLbPolicy`<sup>Optional</sup> <a name="localityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.localityLbPolicy"></a>

- *Type:* java.lang.String

The load balancing algorithm used within the scope of the locality. The possible values are:.

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824
* 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
  reported weights. Only applicable to loadBalancingScheme
  EXTERNAL. If set, the Backend Service must
  configure a non legacy HTTP-based Health Check, and
  health check replies are expected to contain
  non-standard HTTP response header field
  X-Load-Balancing-Endpoint-Weight to specify the
  per-instance weights. If set, Load Balancing is weight
  based on the per-instance weights reported in the last
  processed health check replies, as long as every
  instance either reported a valid weight or had
  UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
  equal-weight.

locality_lb_policy is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#locality_lb_policy GoogleComputeBackendService#locality_lb_policy}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#log_config GoogleComputeBackendService#log_config}

---

##### `outlierDetection`<sup>Optional</sup> <a name="outlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.outlierDetection"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#outlier_detection GoogleComputeBackendService#outlier_detection}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.portName"></a>

- *Type:* java.lang.String

Name of backend port.

The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#port_name GoogleComputeBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#project GoogleComputeBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The protocol this BackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#protocol GoogleComputeBackendService#protocol}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.securityPolicy"></a>

- *Type:* java.lang.String

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#security_policy GoogleComputeBackendService#security_policy}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.securitySettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#security_settings GoogleComputeBackendService#security_settings}

---

##### `serviceLbPolicy`<sup>Optional</sup> <a name="serviceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.serviceLbPolicy"></a>

- *Type:* java.lang.String

URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#service_lb_policy GoogleComputeBackendService#service_lb_policy}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.sessionAffinity"></a>

- *Type:* java.lang.String

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#session_affinity GoogleComputeBackendService#session_affinity}

---

##### `strongSessionAffinityCookie`<sup>Optional</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.strongSessionAffinityCookie"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#strong_session_affinity_cookie GoogleComputeBackendService#strong_session_affinity_cookie}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#timeouts GoogleComputeBackendService#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.timeoutSec"></a>

- *Type:* java.lang.Number

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#timeout_sec GoogleComputeBackendService#timeout_sec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putBackend">putBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCircuitBreakers">putCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putConsistentHash">putConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putIap">putIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLocalityLbPolicies">putLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putOutlierDetection">putOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putSecuritySettings">putSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putStrongSessionAffinityCookie">putStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetAffinityCookieTtlSec">resetAffinityCookieTtlSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCircuitBreakers">resetCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCompressionMode">resetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConnectionDrainingTimeoutSec">resetConnectionDrainingTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConsistentHash">resetConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomRequestHeaders">resetCustomRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomResponseHeaders">resetCustomResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEdgeSecurityPolicy">resetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEnableCdn">resetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetHealthChecks">resetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIap">resetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIpAddressSelectionPolicy">resetIpAddressSelectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicies">resetLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicy">resetLocalityLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOutlierDetection">resetOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetServiceLbPolicy">resetServiceLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetStrongSessionAffinityCookie">resetStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackend` <a name="putBackend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putBackend"></a>

```java
public void putBackend(IResolvable OR java.util.List<GoogleComputeBackendServiceBackend> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putBackend.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>>

---

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCdnPolicy"></a>

```java
public void putCdnPolicy(GoogleComputeBackendServiceCdnPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

---

##### `putCircuitBreakers` <a name="putCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCircuitBreakers"></a>

```java
public void putCircuitBreakers(GoogleComputeBackendServiceCircuitBreakers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCircuitBreakers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

---

##### `putConsistentHash` <a name="putConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putConsistentHash"></a>

```java
public void putConsistentHash(GoogleComputeBackendServiceConsistentHash value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putConsistentHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

---

##### `putIap` <a name="putIap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putIap"></a>

```java
public void putIap(GoogleComputeBackendServiceIap value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

---

##### `putLocalityLbPolicies` <a name="putLocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLocalityLbPolicies"></a>

```java
public void putLocalityLbPolicies(IResolvable OR java.util.List<GoogleComputeBackendServiceLocalityLbPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLocalityLbPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLogConfig"></a>

```java
public void putLogConfig(GoogleComputeBackendServiceLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

---

##### `putOutlierDetection` <a name="putOutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putOutlierDetection"></a>

```java
public void putOutlierDetection(GoogleComputeBackendServiceOutlierDetection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putOutlierDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

---

##### `putSecuritySettings` <a name="putSecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putSecuritySettings"></a>

```java
public void putSecuritySettings(GoogleComputeBackendServiceSecuritySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

---

##### `putStrongSessionAffinityCookie` <a name="putStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putStrongSessionAffinityCookie"></a>

```java
public void putStrongSessionAffinityCookie(GoogleComputeBackendServiceStrongSessionAffinityCookie value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putStrongSessionAffinityCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeBackendServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a>

---

##### `resetAffinityCookieTtlSec` <a name="resetAffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetAffinityCookieTtlSec"></a>

```java
public void resetAffinityCookieTtlSec()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCdnPolicy"></a>

```java
public void resetCdnPolicy()
```

##### `resetCircuitBreakers` <a name="resetCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCircuitBreakers"></a>

```java
public void resetCircuitBreakers()
```

##### `resetCompressionMode` <a name="resetCompressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCompressionMode"></a>

```java
public void resetCompressionMode()
```

##### `resetConnectionDrainingTimeoutSec` <a name="resetConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConnectionDrainingTimeoutSec"></a>

```java
public void resetConnectionDrainingTimeoutSec()
```

##### `resetConsistentHash` <a name="resetConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConsistentHash"></a>

```java
public void resetConsistentHash()
```

##### `resetCustomRequestHeaders` <a name="resetCustomRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomRequestHeaders"></a>

```java
public void resetCustomRequestHeaders()
```

##### `resetCustomResponseHeaders` <a name="resetCustomResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomResponseHeaders"></a>

```java
public void resetCustomResponseHeaders()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEdgeSecurityPolicy` <a name="resetEdgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEdgeSecurityPolicy"></a>

```java
public void resetEdgeSecurityPolicy()
```

##### `resetEnableCdn` <a name="resetEnableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEnableCdn"></a>

```java
public void resetEnableCdn()
```

##### `resetHealthChecks` <a name="resetHealthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetHealthChecks"></a>

```java
public void resetHealthChecks()
```

##### `resetIap` <a name="resetIap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIap"></a>

```java
public void resetIap()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddressSelectionPolicy` <a name="resetIpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIpAddressSelectionPolicy"></a>

```java
public void resetIpAddressSelectionPolicy()
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLoadBalancingScheme"></a>

```java
public void resetLoadBalancingScheme()
```

##### `resetLocalityLbPolicies` <a name="resetLocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicies"></a>

```java
public void resetLocalityLbPolicies()
```

##### `resetLocalityLbPolicy` <a name="resetLocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicy"></a>

```java
public void resetLocalityLbPolicy()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetOutlierDetection` <a name="resetOutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOutlierDetection"></a>

```java
public void resetOutlierDetection()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProject"></a>

```java
public void resetProject()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecuritySettings"></a>

```java
public void resetSecuritySettings()
```

##### `resetServiceLbPolicy` <a name="resetServiceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetServiceLbPolicy"></a>

```java
public void resetServiceLbPolicy()
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSessionAffinity"></a>

```java
public void resetSessionAffinity()
```

##### `resetStrongSessionAffinityCookie` <a name="resetStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetStrongSessionAffinityCookie"></a>

```java
public void resetStrongSessionAffinityCookie()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeoutSec"></a>

```java
public void resetTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendService;

GoogleComputeBackendService.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendService;

GoogleComputeBackendService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendService;

GoogleComputeBackendService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendService;

GoogleComputeBackendService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeBackendService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeBackendService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList">GoogleComputeBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference">GoogleComputeBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference">GoogleComputeBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.generatedId">generatedId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference">GoogleComputeBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicies">localityLbPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList">GoogleComputeBackendServiceLocalityLbPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference">GoogleComputeBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference">GoogleComputeBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference">GoogleComputeBackendServiceSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference">GoogleComputeBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSecInput">affinityCookieTtlSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backendInput">backendInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakersInput">circuitBreakersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionModeInput">compressionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSecInput">connectionDrainingTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHashInput">consistentHashInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeadersInput">customRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeadersInput">customResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicyInput">edgeSecurityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdnInput">enableCdnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecksInput">healthChecksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iapInput">iapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicyInput">ipAddressSelectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPoliciesInput">localityLbPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicyInput">localityLbPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetectionInput">outlierDetectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettingsInput">securitySettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicyInput">serviceLbPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookieInput">strongSessionAffinityCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSecInput">timeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeaders">customRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeaders">customResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicy">serviceLbPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backend"></a>

```java
public GoogleComputeBackendServiceBackendList getBackend();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList">GoogleComputeBackendServiceBackendList</a>

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicy"></a>

```java
public GoogleComputeBackendServiceCdnPolicyOutputReference getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyOutputReference</a>

---

##### `circuitBreakers`<sup>Required</sup> <a name="circuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakers"></a>

```java
public GoogleComputeBackendServiceCircuitBreakersOutputReference getCircuitBreakers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference">GoogleComputeBackendServiceCircuitBreakersOutputReference</a>

---

##### `consistentHash`<sup>Required</sup> <a name="consistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHash"></a>

```java
public GoogleComputeBackendServiceConsistentHashOutputReference getConsistentHash();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference">GoogleComputeBackendServiceConsistentHashOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `generatedId`<sup>Required</sup> <a name="generatedId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.generatedId"></a>

```java
public java.lang.Number getGeneratedId();
```

- *Type:* java.lang.Number

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iap"></a>

```java
public GoogleComputeBackendServiceIapOutputReference getIap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference">GoogleComputeBackendServiceIapOutputReference</a>

---

##### `localityLbPolicies`<sup>Required</sup> <a name="localityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicies"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesList getLocalityLbPolicies();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList">GoogleComputeBackendServiceLocalityLbPoliciesList</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfig"></a>

```java
public GoogleComputeBackendServiceLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference">GoogleComputeBackendServiceLogConfigOutputReference</a>

---

##### `outlierDetection`<sup>Required</sup> <a name="outlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetection"></a>

```java
public GoogleComputeBackendServiceOutlierDetectionOutputReference getOutlierDetection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference">GoogleComputeBackendServiceOutlierDetectionOutputReference</a>

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettings"></a>

```java
public GoogleComputeBackendServiceSecuritySettingsOutputReference getSecuritySettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference">GoogleComputeBackendServiceSecuritySettingsOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `strongSessionAffinityCookie`<sup>Required</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookie"></a>

```java
public GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference getStrongSessionAffinityCookie();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeouts"></a>

```java
public GoogleComputeBackendServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference">GoogleComputeBackendServiceTimeoutsOutputReference</a>

---

##### `affinityCookieTtlSecInput`<sup>Optional</sup> <a name="affinityCookieTtlSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSecInput"></a>

```java
public java.lang.Number getAffinityCookieTtlSecInput();
```

- *Type:* java.lang.Number

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backendInput"></a>

```java
public java.lang.Object getBackendInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>>

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicyInput"></a>

```java
public GoogleComputeBackendServiceCdnPolicy getCdnPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

---

##### `circuitBreakersInput`<sup>Optional</sup> <a name="circuitBreakersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakersInput"></a>

```java
public GoogleComputeBackendServiceCircuitBreakers getCircuitBreakersInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

---

##### `compressionModeInput`<sup>Optional</sup> <a name="compressionModeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionModeInput"></a>

```java
public java.lang.String getCompressionModeInput();
```

- *Type:* java.lang.String

---

##### `connectionDrainingTimeoutSecInput`<sup>Optional</sup> <a name="connectionDrainingTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSecInput"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `consistentHashInput`<sup>Optional</sup> <a name="consistentHashInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHashInput"></a>

```java
public GoogleComputeBackendServiceConsistentHash getConsistentHashInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

---

##### `customRequestHeadersInput`<sup>Optional</sup> <a name="customRequestHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getCustomRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customResponseHeadersInput`<sup>Optional</sup> <a name="customResponseHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getCustomResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `edgeSecurityPolicyInput`<sup>Optional</sup> <a name="edgeSecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicyInput"></a>

```java
public java.lang.String getEdgeSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `enableCdnInput`<sup>Optional</sup> <a name="enableCdnInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdnInput"></a>

```java
public java.lang.Object getEnableCdnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthChecksInput`<sup>Optional</sup> <a name="healthChecksInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecksInput"></a>

```java
public java.util.List<java.lang.String> getHealthChecksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iapInput`<sup>Optional</sup> <a name="iapInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iapInput"></a>

```java
public GoogleComputeBackendServiceIap getIapInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressSelectionPolicyInput`<sup>Optional</sup> <a name="ipAddressSelectionPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicyInput"></a>

```java
public java.lang.String getIpAddressSelectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `localityLbPoliciesInput`<sup>Optional</sup> <a name="localityLbPoliciesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPoliciesInput"></a>

```java
public java.lang.Object getLocalityLbPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>>

---

##### `localityLbPolicyInput`<sup>Optional</sup> <a name="localityLbPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicyInput"></a>

```java
public java.lang.String getLocalityLbPolicyInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfigInput"></a>

```java
public GoogleComputeBackendServiceLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outlierDetectionInput`<sup>Optional</sup> <a name="outlierDetectionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetectionInput"></a>

```java
public GoogleComputeBackendServiceOutlierDetection getOutlierDetectionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettingsInput"></a>

```java
public GoogleComputeBackendServiceSecuritySettings getSecuritySettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

---

##### `serviceLbPolicyInput`<sup>Optional</sup> <a name="serviceLbPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicyInput"></a>

```java
public java.lang.String getServiceLbPolicyInput();
```

- *Type:* java.lang.String

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinityInput"></a>

```java
public java.lang.String getSessionAffinityInput();
```

- *Type:* java.lang.String

---

##### `strongSessionAffinityCookieInput`<sup>Optional</sup> <a name="strongSessionAffinityCookieInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookieInput"></a>

```java
public GoogleComputeBackendServiceStrongSessionAffinityCookie getStrongSessionAffinityCookieInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSecInput"></a>

```java
public java.lang.Number getTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a>

---

##### `affinityCookieTtlSec`<sup>Required</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSec"></a>

```java
public java.lang.Number getAffinityCookieTtlSec();
```

- *Type:* java.lang.Number

---

##### `compressionMode`<sup>Required</sup> <a name="compressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionMode"></a>

```java
public java.lang.String getCompressionMode();
```

- *Type:* java.lang.String

---

##### `connectionDrainingTimeoutSec`<sup>Required</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSec"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `customRequestHeaders`<sup>Required</sup> <a name="customRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customResponseHeaders`<sup>Required</sup> <a name="customResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `edgeSecurityPolicy`<sup>Required</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicy"></a>

```java
public java.lang.String getEdgeSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `enableCdn`<sup>Required</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdn"></a>

```java
public java.lang.Object getEnableCdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecks"></a>

```java
public java.util.List<java.lang.String> getHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddressSelectionPolicy`<sup>Required</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicy"></a>

```java
public java.lang.String getIpAddressSelectionPolicy();
```

- *Type:* java.lang.String

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `localityLbPolicy`<sup>Required</sup> <a name="localityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicy"></a>

```java
public java.lang.String getLocalityLbPolicy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `serviceLbPolicy`<sup>Required</sup> <a name="serviceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicy"></a>

```java
public java.lang.String getServiceLbPolicy();
```

- *Type:* java.lang.String

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBackendServiceBackend <a name="GoogleComputeBackendServiceBackend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceBackend;

GoogleComputeBackendServiceBackend.builder()
    .group(java.lang.String)
//  .balancingMode(java.lang.String)
//  .capacityScaler(java.lang.Number)
//  .description(java.lang.String)
//  .maxConnections(java.lang.Number)
//  .maxConnectionsPerEndpoint(java.lang.Number)
//  .maxConnectionsPerInstance(java.lang.Number)
//  .maxRate(java.lang.Number)
//  .maxRatePerEndpoint(java.lang.Number)
//  .maxRatePerInstance(java.lang.Number)
//  .maxUtilization(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.group">group</a></code> | <code>java.lang.String</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.balancingMode">balancingMode</a></code> | <code>java.lang.String</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.capacityScaler">capacityScaler</a></code> | <code>java.lang.Number</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>java.lang.Number</code> | The max number of simultaneous connections that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>java.lang.Number</code> | The max number of simultaneous connections that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | The max requests per second (RPS) of the group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>java.lang.Number</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>java.lang.Number</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxUtilization">maxUtilization</a></code> | <code>java.lang.Number</code> | Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0]. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The fully-qualified URL of an Instance Group or Network Endpoint Group resource.

In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.

For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.

Backend services cannot mix Instance Group and
Network Endpoint Group backends.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#group GoogleComputeBackendService#group}

---

##### `balancingMode`<sup>Optional</sup> <a name="balancingMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.balancingMode"></a>

```java
public java.lang.String getBalancingMode();
```

- *Type:* java.lang.String

Specifies the balancing mode for this backend.

For global HTTP(S) or TCP/SSL load balancing, the default is
UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))
and CONNECTION (for TCP/SSL).

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#balancing_mode GoogleComputeBackendService#balancing_mode}

---

##### `capacityScaler`<sup>Optional</sup> <a name="capacityScaler" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.capacityScaler"></a>

```java
public java.lang.Number getCapacityScaler();
```

- *Type:* java.lang.Number

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

Default value is 1, which means the group will serve up to 100%
of its configured capacity (depending on balancingMode). A
setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#capacity_scaler GoogleComputeBackendService#capacity_scaler}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#description GoogleComputeBackendService#description}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_connections GoogleComputeBackendService#max_connections}

---

##### `maxConnectionsPerEndpoint`<sup>Optional</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpoint();
```

- *Type:* java.lang.Number

The max number of simultaneous connections that a single backend network endpoint can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either
maxConnections or maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_connections_per_endpoint GoogleComputeBackendService#max_connections_per_endpoint}

---

##### `maxConnectionsPerInstance`<sup>Optional</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```java
public java.lang.Number getMaxConnectionsPerInstance();
```

- *Type:* java.lang.Number

The max number of simultaneous connections that a single backend instance can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_connections_per_instance GoogleComputeBackendService#max_connections_per_instance}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

The max requests per second (RPS) of the group.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. For RATE mode, either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_rate GoogleComputeBackendService#max_rate}

---

##### `maxRatePerEndpoint`<sup>Optional</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerEndpoint"></a>

```java
public java.lang.Number getMaxRatePerEndpoint();
```

- *Type:* java.lang.Number

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_rate_per_endpoint GoogleComputeBackendService#max_rate_per_endpoint}

---

##### `maxRatePerInstance`<sup>Optional</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerInstance"></a>

```java
public java.lang.Number getMaxRatePerInstance();
```

- *Type:* java.lang.Number

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_rate_per_instance GoogleComputeBackendService#max_rate_per_instance}

---

##### `maxUtilization`<sup>Optional</sup> <a name="maxUtilization" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxUtilization"></a>

```java
public java.lang.Number getMaxUtilization();
```

- *Type:* java.lang.Number

Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_utilization GoogleComputeBackendService#max_utilization}

---

### GoogleComputeBackendServiceCdnPolicy <a name="GoogleComputeBackendServiceCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicy;

GoogleComputeBackendServiceCdnPolicy.builder()
//  .bypassCacheOnRequestHeaders(IResolvable)
//  .bypassCacheOnRequestHeaders(java.util.List<GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders>)
//  .cacheKeyPolicy(GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy)
//  .cacheMode(java.lang.String)
//  .clientTtl(java.lang.Number)
//  .defaultTtl(java.lang.Number)
//  .maxTtl(java.lang.Number)
//  .negativeCaching(java.lang.Boolean)
//  .negativeCaching(IResolvable)
//  .negativeCachingPolicy(IResolvable)
//  .negativeCachingPolicy(java.util.List<GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy>)
//  .serveWhileStale(java.lang.Number)
//  .signedUrlCacheMaxAgeSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>></code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>></code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.serveWhileStale">serveWhileStale</a></code> | <code>java.lang.Number</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>java.lang.Number</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `bypassCacheOnRequestHeaders`<sup>Optional</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```java
public java.lang.Object getBypassCacheOnRequestHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>>

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#bypass_cache_on_request_headers GoogleComputeBackendService#bypass_cache_on_request_headers}

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```java
public GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#cache_key_policy GoogleComputeBackendService#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#cache_mode GoogleComputeBackendService#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.clientTtl"></a>

```java
public java.lang.Number getClientTtl();
```

- *Type:* java.lang.Number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#client_ttl GoogleComputeBackendService#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#default_ttl GoogleComputeBackendService#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_ttl GoogleComputeBackendService#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#negative_caching GoogleComputeBackendService#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```java
public java.lang.Object getNegativeCachingPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>>

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#negative_caching_policy GoogleComputeBackendService#negative_caching_policy}

---

##### `serveWhileStale`<sup>Optional</sup> <a name="serveWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.serveWhileStale"></a>

```java
public java.lang.Number getServeWhileStale();
```

- *Type:* java.lang.Number

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#serve_while_stale GoogleComputeBackendService#serve_while_stale}

---

##### `signedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSec();
```

- *Type:* java.lang.Number

Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s).

After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#signed_url_cache_max_age_sec GoogleComputeBackendService#signed_url_cache_max_age_sec}

---

### GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders <a name="GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders;

GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.builder()
    .headerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#header_name GoogleComputeBackendService#header_name}

---

### GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy <a name="GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy;

GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.builder()
//  .includeHost(java.lang.Boolean)
//  .includeHost(IResolvable)
//  .includeHttpHeaders(java.util.List<java.lang.String>)
//  .includeNamedCookies(java.util.List<java.lang.String>)
//  .includeProtocol(java.lang.Boolean)
//  .includeProtocol(IResolvable)
//  .includeQueryString(java.lang.Boolean)
//  .includeQueryString(IResolvable)
//  .queryStringBlacklist(java.util.List<java.lang.String>)
//  .queryStringWhitelist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">includeHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">includeNamedCookies</a></code> | <code>java.util.List<java.lang.String></code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">includeProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">includeQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Names of query string parameters to include in cache keys. |

---

##### `includeHost`<sup>Optional</sup> <a name="includeHost" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```java
public java.lang.Object getIncludeHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_host GoogleComputeBackendService#include_host}

---

##### `includeHttpHeaders`<sup>Optional</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```java
public java.util.List<java.lang.String> getIncludeHttpHeaders();
```

- *Type:* java.util.List<java.lang.String>

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_http_headers GoogleComputeBackendService#include_http_headers}

---

##### `includeNamedCookies`<sup>Optional</sup> <a name="includeNamedCookies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookies();
```

- *Type:* java.util.List<java.lang.String>

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_named_cookies GoogleComputeBackendService#include_named_cookies}

---

##### `includeProtocol`<sup>Optional</sup> <a name="includeProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```java
public java.lang.Object getIncludeProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_protocol GoogleComputeBackendService#include_protocol}

---

##### `includeQueryString`<sup>Optional</sup> <a name="includeQueryString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```java
public java.lang.Object getIncludeQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#include_query_string GoogleComputeBackendService#include_query_string}

---

##### `queryStringBlacklist`<sup>Optional</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklist();
```

- *Type:* java.util.List<java.lang.String>

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#query_string_blacklist GoogleComputeBackendService#query_string_blacklist}

---

##### `queryStringWhitelist`<sup>Optional</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#query_string_whitelist GoogleComputeBackendService#query_string_whitelist}

---

### GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy <a name="GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy;

GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.builder()
//  .code(java.lang.Number)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>java.lang.Number</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#code GoogleComputeBackendService#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}

---

### GoogleComputeBackendServiceCircuitBreakers <a name="GoogleComputeBackendServiceCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCircuitBreakers;

GoogleComputeBackendServiceCircuitBreakers.builder()
//  .connectTimeout(GoogleComputeBackendServiceCircuitBreakersConnectTimeout)
//  .maxConnections(java.lang.Number)
//  .maxPendingRequests(java.lang.Number)
//  .maxRequests(java.lang.Number)
//  .maxRequestsPerConnection(java.lang.Number)
//  .maxRetries(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.connectTimeout">connectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a></code> | connect_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxPendingRequests">maxPendingRequests</a></code> | <code>java.lang.Number</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>java.lang.Number</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.connectTimeout"></a>

```java
public GoogleComputeBackendServiceCircuitBreakersConnectTimeout getConnectTimeout();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

connect_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#connect_timeout GoogleComputeBackendService#connect_timeout}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_connections GoogleComputeBackendService#max_connections}

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="maxPendingRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```java
public java.lang.Number getMaxPendingRequests();
```

- *Type:* java.lang.Number

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_pending_requests GoogleComputeBackendService#max_pending_requests}

---

##### `maxRequests`<sup>Optional</sup> <a name="maxRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_requests GoogleComputeBackendService#max_requests}

---

##### `maxRequestsPerConnection`<sup>Optional</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```java
public java.lang.Number getMaxRequestsPerConnection();
```

- *Type:* java.lang.Number

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_requests_per_connection GoogleComputeBackendService#max_requests_per_connection}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_retries GoogleComputeBackendService#max_retries}

---

### GoogleComputeBackendServiceCircuitBreakersConnectTimeout <a name="GoogleComputeBackendServiceCircuitBreakersConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCircuitBreakersConnectTimeout;

GoogleComputeBackendServiceCircuitBreakersConnectTimeout.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceConfig <a name="GoogleComputeBackendServiceConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceConfig;

GoogleComputeBackendServiceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .affinityCookieTtlSec(java.lang.Number)
//  .backend(IResolvable)
//  .backend(java.util.List<GoogleComputeBackendServiceBackend>)
//  .cdnPolicy(GoogleComputeBackendServiceCdnPolicy)
//  .circuitBreakers(GoogleComputeBackendServiceCircuitBreakers)
//  .compressionMode(java.lang.String)
//  .connectionDrainingTimeoutSec(java.lang.Number)
//  .consistentHash(GoogleComputeBackendServiceConsistentHash)
//  .customRequestHeaders(java.util.List<java.lang.String>)
//  .customResponseHeaders(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .edgeSecurityPolicy(java.lang.String)
//  .enableCdn(java.lang.Boolean)
//  .enableCdn(IResolvable)
//  .healthChecks(java.util.List<java.lang.String>)
//  .iap(GoogleComputeBackendServiceIap)
//  .id(java.lang.String)
//  .ipAddressSelectionPolicy(java.lang.String)
//  .loadBalancingScheme(java.lang.String)
//  .localityLbPolicies(IResolvable)
//  .localityLbPolicies(java.util.List<GoogleComputeBackendServiceLocalityLbPolicies>)
//  .localityLbPolicy(java.lang.String)
//  .logConfig(GoogleComputeBackendServiceLogConfig)
//  .outlierDetection(GoogleComputeBackendServiceOutlierDetection)
//  .portName(java.lang.String)
//  .project(java.lang.String)
//  .protocol(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .securitySettings(GoogleComputeBackendServiceSecuritySettings)
//  .serviceLbPolicy(java.lang.String)
//  .sessionAffinity(java.lang.String)
//  .strongSessionAffinityCookie(GoogleComputeBackendServiceStrongSessionAffinityCookie)
//  .timeouts(GoogleComputeBackendServiceTimeouts)
//  .timeoutSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.backend">backend</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>></code> | backend block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customRequestHeaders">customRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customResponseHeaders">customResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | The resource URL for the edge security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable Cloud CDN for this BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#id GoogleComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Indicates whether the backend service will be used with internal or external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicies">localityLbPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>></code> | locality_lb_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.portName">portName</a></code> | <code>java.lang.String</code> | Name of backend port. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#project GoogleComputeBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol this BackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.serviceLbPolicy">serviceLbPolicy</a></code> | <code>java.lang.String</code> | URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `affinityCookieTtlSec`<sup>Optional</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.affinityCookieTtlSec"></a>

```java
public java.lang.Number getAffinityCookieTtlSec();
```

- *Type:* java.lang.Number

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#affinity_cookie_ttl_sec GoogleComputeBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.backend"></a>

```java
public java.lang.Object getBackend();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#backend GoogleComputeBackendService#backend}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.cdnPolicy"></a>

```java
public GoogleComputeBackendServiceCdnPolicy getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#cdn_policy GoogleComputeBackendService#cdn_policy}

---

##### `circuitBreakers`<sup>Optional</sup> <a name="circuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.circuitBreakers"></a>

```java
public GoogleComputeBackendServiceCircuitBreakers getCircuitBreakers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#circuit_breakers GoogleComputeBackendService#circuit_breakers}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.compressionMode"></a>

```java
public java.lang.String getCompressionMode();
```

- *Type:* java.lang.String

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#compression_mode GoogleComputeBackendService#compression_mode}

---

##### `connectionDrainingTimeoutSec`<sup>Optional</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSec();
```

- *Type:* java.lang.Number

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#connection_draining_timeout_sec GoogleComputeBackendService#connection_draining_timeout_sec}

---

##### `consistentHash`<sup>Optional</sup> <a name="consistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.consistentHash"></a>

```java
public GoogleComputeBackendServiceConsistentHash getConsistentHash();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#consistent_hash GoogleComputeBackendService#consistent_hash}

---

##### `customRequestHeaders`<sup>Optional</sup> <a name="customRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#custom_request_headers GoogleComputeBackendService#custom_request_headers}

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#custom_response_headers GoogleComputeBackendService#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#description GoogleComputeBackendService#description}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.edgeSecurityPolicy"></a>

```java
public java.lang.String getEdgeSecurityPolicy();
```

- *Type:* java.lang.String

The resource URL for the edge security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#edge_security_policy GoogleComputeBackendService#edge_security_policy}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.enableCdn"></a>

```java
public java.lang.Object getEnableCdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable Cloud CDN for this BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enable_cdn GoogleComputeBackendService#enable_cdn}

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.healthChecks"></a>

```java
public java.util.List<java.lang.String> getHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService.

Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#health_checks GoogleComputeBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.iap"></a>

```java
public GoogleComputeBackendServiceIap getIap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#iap GoogleComputeBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#id GoogleComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressSelectionPolicy`<sup>Optional</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.ipAddressSelectionPolicy"></a>

```java
public java.lang.String getIpAddressSelectionPolicy();
```

- *Type:* java.lang.String

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#ip_address_selection_policy GoogleComputeBackendService#ip_address_selection_policy}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

Indicates whether the backend service will be used with internal or external load balancing.

A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#load_balancing_scheme GoogleComputeBackendService#load_balancing_scheme}

---

##### `localityLbPolicies`<sup>Optional</sup> <a name="localityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicies"></a>

```java
public java.lang.Object getLocalityLbPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>>

locality_lb_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#locality_lb_policies GoogleComputeBackendService#locality_lb_policies}

---

##### `localityLbPolicy`<sup>Optional</sup> <a name="localityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicy"></a>

```java
public java.lang.String getLocalityLbPolicy();
```

- *Type:* java.lang.String

The load balancing algorithm used within the scope of the locality. The possible values are:.

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824
* 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
  reported weights. Only applicable to loadBalancingScheme
  EXTERNAL. If set, the Backend Service must
  configure a non legacy HTTP-based Health Check, and
  health check replies are expected to contain
  non-standard HTTP response header field
  X-Load-Balancing-Endpoint-Weight to specify the
  per-instance weights. If set, Load Balancing is weight
  based on the per-instance weights reported in the last
  processed health check replies, as long as every
  instance either reported a valid weight or had
  UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
  equal-weight.

locality_lb_policy is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#locality_lb_policy GoogleComputeBackendService#locality_lb_policy}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.logConfig"></a>

```java
public GoogleComputeBackendServiceLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#log_config GoogleComputeBackendService#log_config}

---

##### `outlierDetection`<sup>Optional</sup> <a name="outlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.outlierDetection"></a>

```java
public GoogleComputeBackendServiceOutlierDetection getOutlierDetection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#outlier_detection GoogleComputeBackendService#outlier_detection}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Name of backend port.

The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#port_name GoogleComputeBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#project GoogleComputeBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The protocol this BackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#protocol GoogleComputeBackendService#protocol}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#security_policy GoogleComputeBackendService#security_policy}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securitySettings"></a>

```java
public GoogleComputeBackendServiceSecuritySettings getSecuritySettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#security_settings GoogleComputeBackendService#security_settings}

---

##### `serviceLbPolicy`<sup>Optional</sup> <a name="serviceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.serviceLbPolicy"></a>

```java
public java.lang.String getServiceLbPolicy();
```

- *Type:* java.lang.String

URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#service_lb_policy GoogleComputeBackendService#service_lb_policy}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#session_affinity GoogleComputeBackendService#session_affinity}

---

##### `strongSessionAffinityCookie`<sup>Optional</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.strongSessionAffinityCookie"></a>

```java
public GoogleComputeBackendServiceStrongSessionAffinityCookie getStrongSessionAffinityCookie();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#strong_session_affinity_cookie GoogleComputeBackendService#strong_session_affinity_cookie}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeouts"></a>

```java
public GoogleComputeBackendServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#timeouts GoogleComputeBackendService#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#timeout_sec GoogleComputeBackendService#timeout_sec}

---

### GoogleComputeBackendServiceConsistentHash <a name="GoogleComputeBackendServiceConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceConsistentHash;

GoogleComputeBackendServiceConsistentHash.builder()
//  .httpCookie(GoogleComputeBackendServiceConsistentHashHttpCookie)
//  .httpHeaderName(java.lang.String)
//  .minimumRingSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpHeaderName">httpHeaderName</a></code> | <code>java.lang.String</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.minimumRingSize">minimumRingSize</a></code> | <code>java.lang.Number</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `httpCookie`<sup>Optional</sup> <a name="httpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpCookie"></a>

```java
public GoogleComputeBackendServiceConsistentHashHttpCookie getHttpCookie();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#http_cookie GoogleComputeBackendService#http_cookie}

---

##### `httpHeaderName`<sup>Optional</sup> <a name="httpHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpHeaderName"></a>

```java
public java.lang.String getHttpHeaderName();
```

- *Type:* java.lang.String

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#http_header_name GoogleComputeBackendService#http_header_name}

---

##### `minimumRingSize`<sup>Optional</sup> <a name="minimumRingSize" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.minimumRingSize"></a>

```java
public java.lang.Number getMinimumRingSize();
```

- *Type:* java.lang.Number

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#minimum_ring_size GoogleComputeBackendService#minimum_ring_size}

---

### GoogleComputeBackendServiceConsistentHashHttpCookie <a name="GoogleComputeBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceConsistentHashHttpCookie;

GoogleComputeBackendServiceConsistentHashHttpCookie.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
//  .ttl(GoogleComputeBackendServiceConsistentHashHttpCookieTtl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.name">name</a></code> | <code>java.lang.String</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.path">path</a></code> | <code>java.lang.String</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#path GoogleComputeBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```java
public GoogleComputeBackendServiceConsistentHashHttpCookieTtl getTtl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}

---

### GoogleComputeBackendServiceConsistentHashHttpCookieTtl <a name="GoogleComputeBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceConsistentHashHttpCookieTtl;

GoogleComputeBackendServiceConsistentHashHttpCookieTtl.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceIap <a name="GoogleComputeBackendServiceIap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceIap;

GoogleComputeBackendServiceIap.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .oauth2ClientId(java.lang.String)
//  .oauth2ClientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the serving infrastructure will authenticate and authorize all incoming requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientId">oauth2ClientId</a></code> | <code>java.lang.String</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>java.lang.String</code> | OAuth2 Client Secret for IAP. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the serving infrastructure will authenticate and authorize all incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enabled GoogleComputeBackendService#enabled}

---

##### `oauth2ClientId`<sup>Optional</sup> <a name="oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientId"></a>

```java
public java.lang.String getOauth2ClientId();
```

- *Type:* java.lang.String

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#oauth2_client_id GoogleComputeBackendService#oauth2_client_id}

---

##### `oauth2ClientSecret`<sup>Optional</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientSecret"></a>

```java
public java.lang.String getOauth2ClientSecret();
```

- *Type:* java.lang.String

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#oauth2_client_secret GoogleComputeBackendService#oauth2_client_secret}

---

### GoogleComputeBackendServiceLocalityLbPolicies <a name="GoogleComputeBackendServiceLocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceLocalityLbPolicies;

GoogleComputeBackendServiceLocalityLbPolicies.builder()
//  .customPolicy(GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy)
//  .policy(GoogleComputeBackendServiceLocalityLbPoliciesPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | policy block. |

---

##### `customPolicy`<sup>Optional</sup> <a name="customPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.customPolicy"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy getCustomPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#custom_policy GoogleComputeBackendService#custom_policy}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.policy"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesPolicy getPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#policy GoogleComputeBackendService#policy}

---

### GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy <a name="GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy;

GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.builder()
    .name(java.lang.String)
//  .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name">name</a></code> | <code>java.lang.String</code> | Identifies the custom policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data">data</a></code> | <code>java.lang.String</code> | An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifies the custom policy.

The value should match the type the custom implementation is registered
with on the gRPC clients. It should follow protocol buffer
message naming conventions and include the full path (e.g.
myorg.CustomLbPolicy). The maximum length is 256 characters.

Note that specifying the same custom policy more than once for a
backend is not a valid configuration and will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#data GoogleComputeBackendService#data}

---

### GoogleComputeBackendServiceLocalityLbPoliciesPolicy <a name="GoogleComputeBackendServiceLocalityLbPoliciesPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceLocalityLbPoliciesPolicy;

GoogleComputeBackendServiceLocalityLbPoliciesPolicy.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy.property.name">name</a></code> | <code>java.lang.String</code> | The name of a locality load balancer policy to be used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of a locality load balancer policy to be used.

The value
should be one of the predefined ones as supported by localityLbPolicy,
although at the moment only ROUND_ROBIN is supported.

This field should only be populated when the customPolicy field is not
used.

Note that specifying the same policy more than once for a backend is
not a valid configuration and will be rejected.

The possible values are:

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824 Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

### GoogleComputeBackendServiceLogConfig <a name="GoogleComputeBackendServiceLogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceLogConfig;

GoogleComputeBackendServiceLogConfig.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .sampleRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enable GoogleComputeBackendService#enable}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#sample_rate GoogleComputeBackendService#sample_rate}

---

### GoogleComputeBackendServiceOutlierDetection <a name="GoogleComputeBackendServiceOutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceOutlierDetection;

GoogleComputeBackendServiceOutlierDetection.builder()
//  .baseEjectionTime(GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime)
//  .consecutiveErrors(java.lang.Number)
//  .consecutiveGatewayFailure(java.lang.Number)
//  .enforcingConsecutiveErrors(java.lang.Number)
//  .enforcingConsecutiveGatewayFailure(java.lang.Number)
//  .enforcingSuccessRate(java.lang.Number)
//  .interval(GoogleComputeBackendServiceOutlierDetectionInterval)
//  .maxEjectionPercent(java.lang.Number)
//  .successRateMinimumHosts(java.lang.Number)
//  .successRateRequestVolume(java.lang.Number)
//  .successRateStdevFactor(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveErrors">consecutiveErrors</a></code> | <code>java.lang.Number</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>java.lang.Number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>java.lang.Number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>java.lang.Number</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>java.lang.Number</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>java.lang.Number</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>java.lang.Number</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `baseEjectionTime`<sup>Optional</sup> <a name="baseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```java
public GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime getBaseEjectionTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#base_ejection_time GoogleComputeBackendService#base_ejection_time}

---

##### `consecutiveErrors`<sup>Optional</sup> <a name="consecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```java
public java.lang.Number getConsecutiveErrors();
```

- *Type:* java.lang.Number

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#consecutive_errors GoogleComputeBackendService#consecutive_errors}

---

##### `consecutiveGatewayFailure`<sup>Optional</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```java
public java.lang.Number getConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#consecutive_gateway_failure GoogleComputeBackendService#consecutive_gateway_failure}

---

##### `enforcingConsecutiveErrors`<sup>Optional</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrors();
```

- *Type:* java.lang.Number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enforcing_consecutive_errors GoogleComputeBackendService#enforcing_consecutive_errors}

---

##### `enforcingConsecutiveGatewayFailure`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enforcing_consecutive_gateway_failure GoogleComputeBackendService#enforcing_consecutive_gateway_failure}

---

##### `enforcingSuccessRate`<sup>Optional</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```java
public java.lang.Number getEnforcingSuccessRate();
```

- *Type:* java.lang.Number

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#enforcing_success_rate GoogleComputeBackendService#enforcing_success_rate}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.interval"></a>

```java
public GoogleComputeBackendServiceOutlierDetectionInterval getInterval();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#interval GoogleComputeBackendService#interval}

---

##### `maxEjectionPercent`<sup>Optional</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```java
public java.lang.Number getMaxEjectionPercent();
```

- *Type:* java.lang.Number

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#max_ejection_percent GoogleComputeBackendService#max_ejection_percent}

---

##### `successRateMinimumHosts`<sup>Optional</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```java
public java.lang.Number getSuccessRateMinimumHosts();
```

- *Type:* java.lang.Number

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#success_rate_minimum_hosts GoogleComputeBackendService#success_rate_minimum_hosts}

---

##### `successRateRequestVolume`<sup>Optional</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```java
public java.lang.Number getSuccessRateRequestVolume();
```

- *Type:* java.lang.Number

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#success_rate_request_volume GoogleComputeBackendService#success_rate_request_volume}

---

##### `successRateStdevFactor`<sup>Optional</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

```java
public java.lang.Number getSuccessRateStdevFactor();
```

- *Type:* java.lang.Number

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#success_rate_stdev_factor GoogleComputeBackendService#success_rate_stdev_factor}

---

### GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime <a name="GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime;

GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceOutlierDetectionInterval <a name="GoogleComputeBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceOutlierDetectionInterval;

GoogleComputeBackendServiceOutlierDetectionInterval.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceSecuritySettings <a name="GoogleComputeBackendServiceSecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceSecuritySettings;

GoogleComputeBackendServiceSecuritySettings.builder()
//  .awsV4Authentication(GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication)
//  .clientTlsPolicy(java.lang.String)
//  .subjectAltNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.awsV4Authentication">awsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.clientTlsPolicy">clientTlsPolicy</a></code> | <code>java.lang.String</code> | ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.subjectAltNames">subjectAltNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of alternate names to verify the subject identity in the certificate. |

---

##### `awsV4Authentication`<sup>Optional</sup> <a name="awsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.awsV4Authentication"></a>

```java
public GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication getAwsV4Authentication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#aws_v4_authentication GoogleComputeBackendService#aws_v4_authentication}

---

##### `clientTlsPolicy`<sup>Optional</sup> <a name="clientTlsPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.clientTlsPolicy"></a>

```java
public java.lang.String getClientTlsPolicy();
```

- *Type:* java.lang.String

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service.

This resource itself does not affect
configuration unless it is attached to a backend service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#client_tls_policy GoogleComputeBackendService#client_tls_policy}

---

##### `subjectAltNames`<sup>Optional</sup> <a name="subjectAltNames" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.subjectAltNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAltNames();
```

- *Type:* java.util.List<java.lang.String>

A list of alternate names to verify the subject identity in the certificate.

If specified, the client will verify that the server certificate's subject
alt name matches one of the specified values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#subject_alt_names GoogleComputeBackendService#subject_alt_names}

---

### GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication <a name="GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication;

GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.builder()
//  .accessKey(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .accessKeyVersion(java.lang.String)
//  .originRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | The identifier of an access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion">accessKeyVersion</a></code> | <code>java.lang.String</code> | The optional version identifier for the access key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion">originRegion</a></code> | <code>java.lang.String</code> | The name of the cloud region of your origin. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

The access key used for s3 bucket authentication.

Required for updating or creating a backend that uses AWS v4 signature authentication, but will not be returned as part of the configuration when queried with a REST API GET request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#access_key GoogleComputeBackendService#access_key}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

The identifier of an access key used for s3 bucket authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#access_key_id GoogleComputeBackendService#access_key_id}

---

##### `accessKeyVersion`<sup>Optional</sup> <a name="accessKeyVersion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion"></a>

```java
public java.lang.String getAccessKeyVersion();
```

- *Type:* java.lang.String

The optional version identifier for the access key.

You can use this to keep track of different iterations of your access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#access_key_version GoogleComputeBackendService#access_key_version}

---

##### `originRegion`<sup>Optional</sup> <a name="originRegion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion"></a>

```java
public java.lang.String getOriginRegion();
```

- *Type:* java.lang.String

The name of the cloud region of your origin.

This is a free-form field with the name of the region your cloud uses to host your origin.
For example, "us-east-1" for AWS or "us-ashburn-1" for OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#origin_region GoogleComputeBackendService#origin_region}

---

### GoogleComputeBackendServiceStrongSessionAffinityCookie <a name="GoogleComputeBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceStrongSessionAffinityCookie;

GoogleComputeBackendServiceStrongSessionAffinityCookie.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
//  .ttl(GoogleComputeBackendServiceStrongSessionAffinityCookieTtl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.name">name</a></code> | <code>java.lang.String</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.path">path</a></code> | <code>java.lang.String</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#path GoogleComputeBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.ttl"></a>

```java
public GoogleComputeBackendServiceStrongSessionAffinityCookieTtl getTtl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}

---

### GoogleComputeBackendServiceStrongSessionAffinityCookieTtl <a name="GoogleComputeBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl;

GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceTimeouts <a name="GoogleComputeBackendServiceTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceTimeouts;

GoogleComputeBackendServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#create GoogleComputeBackendService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#delete GoogleComputeBackendService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#update GoogleComputeBackendService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#create GoogleComputeBackendService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#delete GoogleComputeBackendService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_backend_service#update GoogleComputeBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBackendServiceBackendList <a name="GoogleComputeBackendServiceBackendList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceBackendList;

new GoogleComputeBackendServiceBackendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.get"></a>

```java
public GoogleComputeBackendServiceBackendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>>

---


### GoogleComputeBackendServiceBackendOutputReference <a name="GoogleComputeBackendServiceBackendOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceBackendOutputReference;

new GoogleComputeBackendServiceBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetBalancingMode">resetBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetCapacityScaler">resetCapacityScaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">resetMaxConnectionsPerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">resetMaxConnectionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">resetMaxRatePerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance">resetMaxRatePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxUtilization">resetMaxUtilization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBalancingMode` <a name="resetBalancingMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetBalancingMode"></a>

```java
public void resetBalancingMode()
```

##### `resetCapacityScaler` <a name="resetCapacityScaler" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```java
public void resetCapacityScaler()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnections"></a>

```java
public void resetMaxConnections()
```

##### `resetMaxConnectionsPerEndpoint` <a name="resetMaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```java
public void resetMaxConnectionsPerEndpoint()
```

##### `resetMaxConnectionsPerInstance` <a name="resetMaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```java
public void resetMaxConnectionsPerInstance()
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRate"></a>

```java
public void resetMaxRate()
```

##### `resetMaxRatePerEndpoint` <a name="resetMaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```java
public void resetMaxRatePerEndpoint()
```

##### `resetMaxRatePerInstance` <a name="resetMaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```java
public void resetMaxRatePerInstance()
```

##### `resetMaxUtilization` <a name="resetMaxUtilization" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```java
public void resetMaxUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingModeInput">balancingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScalerInput">capacityScalerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">maxConnectionsPerEndpointInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">maxConnectionsPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">maxRatePerEndpointInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">maxRatePerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilizationInput">maxUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingMode">balancingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScaler">capacityScaler</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilization">maxUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `balancingModeInput`<sup>Optional</sup> <a name="balancingModeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```java
public java.lang.String getBalancingModeInput();
```

- *Type:* java.lang.String

---

##### `capacityScalerInput`<sup>Optional</sup> <a name="capacityScalerInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```java
public java.lang.Number getCapacityScalerInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```java
public java.lang.Number getMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerEndpointInput`<sup>Optional</sup> <a name="maxConnectionsPerEndpointInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpointInput();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerInstanceInput`<sup>Optional</sup> <a name="maxConnectionsPerInstanceInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```java
public java.lang.Number getMaxConnectionsPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRateInput"></a>

```java
public java.lang.Number getMaxRateInput();
```

- *Type:* java.lang.Number

---

##### `maxRatePerEndpointInput`<sup>Optional</sup> <a name="maxRatePerEndpointInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```java
public java.lang.Number getMaxRatePerEndpointInput();
```

- *Type:* java.lang.Number

---

##### `maxRatePerInstanceInput`<sup>Optional</sup> <a name="maxRatePerInstanceInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```java
public java.lang.Number getMaxRatePerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `maxUtilizationInput`<sup>Optional</sup> <a name="maxUtilizationInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```java
public java.lang.Number getMaxUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `balancingMode`<sup>Required</sup> <a name="balancingMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingMode"></a>

```java
public java.lang.String getBalancingMode();
```

- *Type:* java.lang.String

---

##### `capacityScaler`<sup>Required</sup> <a name="capacityScaler" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScaler"></a>

```java
public java.lang.Number getCapacityScaler();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerEndpoint`<sup>Required</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpoint();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerInstance`<sup>Required</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```java
public java.lang.Number getMaxConnectionsPerInstance();
```

- *Type:* java.lang.Number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

---

##### `maxRatePerEndpoint`<sup>Required</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```java
public java.lang.Number getMaxRatePerEndpoint();
```

- *Type:* java.lang.Number

---

##### `maxRatePerInstance`<sup>Required</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```java
public java.lang.Number getMaxRatePerInstance();
```

- *Type:* java.lang.Number

---

##### `maxUtilization`<sup>Required</sup> <a name="maxUtilization" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilization"></a>

```java
public java.lang.Number getMaxUtilization();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend">GoogleComputeBackendServiceBackend</a>

---


### GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList <a name="GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList;

new GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```java
public GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>>

---


### GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference;

new GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>

---


### GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference;

new GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">resetIncludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">resetIncludeHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">resetIncludeNamedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">resetIncludeProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">resetIncludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">resetQueryStringBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">resetQueryStringWhitelist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeHost` <a name="resetIncludeHost" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```java
public void resetIncludeHost()
```

##### `resetIncludeHttpHeaders` <a name="resetIncludeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```java
public void resetIncludeHttpHeaders()
```

##### `resetIncludeNamedCookies` <a name="resetIncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```java
public void resetIncludeNamedCookies()
```

##### `resetIncludeProtocol` <a name="resetIncludeProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```java
public void resetIncludeProtocol()
```

##### `resetIncludeQueryString` <a name="resetIncludeQueryString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```java
public void resetIncludeQueryString()
```

##### `resetQueryStringBlacklist` <a name="resetQueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```java
public void resetQueryStringBlacklist()
```

##### `resetQueryStringWhitelist` <a name="resetQueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```java
public void resetQueryStringWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">includeHostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">includeHttpHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">includeNamedCookiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">includeProtocolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">includeQueryStringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">queryStringBlacklistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">queryStringWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">includeHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">includeNamedCookies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">includeProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">includeQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeHostInput`<sup>Optional</sup> <a name="includeHostInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```java
public java.lang.Object getIncludeHostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeHttpHeadersInput`<sup>Optional</sup> <a name="includeHttpHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```java
public java.util.List<java.lang.String> getIncludeHttpHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeNamedCookiesInput`<sup>Optional</sup> <a name="includeNamedCookiesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeProtocolInput`<sup>Optional</sup> <a name="includeProtocolInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```java
public java.lang.Object getIncludeProtocolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeQueryStringInput`<sup>Optional</sup> <a name="includeQueryStringInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```java
public java.lang.Object getIncludeQueryStringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryStringBlacklistInput`<sup>Optional</sup> <a name="queryStringBlacklistInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringWhitelistInput`<sup>Optional</sup> <a name="queryStringWhitelistInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeHost`<sup>Required</sup> <a name="includeHost" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```java
public java.lang.Object getIncludeHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeHttpHeaders`<sup>Required</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```java
public java.util.List<java.lang.String> getIncludeHttpHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeNamedCookies`<sup>Required</sup> <a name="includeNamedCookies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeProtocol`<sup>Required</sup> <a name="includeProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```java
public java.lang.Object getIncludeProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeQueryString`<sup>Required</sup> <a name="includeQueryString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```java
public java.lang.Object getIncludeQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryStringBlacklist`<sup>Required</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringWhitelist`<sup>Required</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList <a name="GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList;

new GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```java
public GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>>

---


### GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference;

new GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```java
public void resetCode()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>

---


### GoogleComputeBackendServiceCdnPolicyOutputReference <a name="GoogleComputeBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCdnPolicyOutputReference;

new GoogleComputeBackendServiceCdnPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">putBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">putNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">resetBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale">resetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">resetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBypassCacheOnRequestHeaders` <a name="putBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```java
public void putBypassCacheOnRequestHeaders(IResolvable OR java.util.List<GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>>

---

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```java
public void putCacheKeyPolicy(GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `putNegativeCachingPolicy` <a name="putNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```java
public void putNegativeCachingPolicy(IResolvable OR java.util.List<GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>>

---

##### `resetBypassCacheOnRequestHeaders` <a name="resetBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```java
public void resetBypassCacheOnRequestHeaders()
```

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```java
public void resetCacheKeyPolicy()
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```java
public void resetCacheMode()
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```java
public void resetClientTtl()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```java
public void resetNegativeCaching()
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```java
public void resetNegativeCachingPolicy()
```

##### `resetServeWhileStale` <a name="resetServeWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```java
public void resetServeWhileStale()
```

##### `resetSignedUrlCacheMaxAgeSec` <a name="resetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```java
public void resetSignedUrlCacheMaxAgeSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">bypassCacheOnRequestHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">serveWhileStaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signedUrlCacheMaxAgeSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale">serveWhileStale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bypassCacheOnRequestHeaders`<sup>Required</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```java
public GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList getBypassCacheOnRequestHeaders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```java
public GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```java
public GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList getNegativeCachingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `bypassCacheOnRequestHeadersInput`<sup>Optional</sup> <a name="bypassCacheOnRequestHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```java
public java.lang.Object getBypassCacheOnRequestHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>>

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```java
public GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy getCacheKeyPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```java
public java.lang.String getCacheModeInput();
```

- *Type:* java.lang.String

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```java
public java.lang.Number getClientTtlInput();
```

- *Type:* java.lang.Number

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```java
public java.lang.Object getNegativeCachingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```java
public java.lang.Object getNegativeCachingPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>>

---

##### `serveWhileStaleInput`<sup>Optional</sup> <a name="serveWhileStaleInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```java
public java.lang.Number getServeWhileStaleInput();
```

- *Type:* java.lang.Number

---

##### `signedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSecInput();
```

- *Type:* java.lang.Number

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```java
public java.lang.Number getClientTtl();
```

- *Type:* java.lang.Number

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serveWhileStale`<sup>Required</sup> <a name="serveWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```java
public java.lang.Number getServeWhileStale();
```

- *Type:* java.lang.Number

---

##### `signedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceCdnPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

---


### GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference <a name="GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference;

new GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceCircuitBreakersConnectTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

---


### GoogleComputeBackendServiceCircuitBreakersOutputReference <a name="GoogleComputeBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceCircuitBreakersOutputReference;

new GoogleComputeBackendServiceCircuitBreakersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.putConnectTimeout">putConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">resetMaxPendingRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests">resetMaxRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">resetMaxRequestsPerConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectTimeout` <a name="putConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.putConnectTimeout"></a>

```java
public void putConnectTimeout(GoogleComputeBackendServiceCircuitBreakersConnectTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.putConnectTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```java
public void resetMaxConnections()
```

##### `resetMaxPendingRequests` <a name="resetMaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```java
public void resetMaxPendingRequests()
```

##### `resetMaxRequests` <a name="resetMaxRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```java
public void resetMaxRequests()
```

##### `resetMaxRequestsPerConnection` <a name="resetMaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```java
public void resetMaxRequestsPerConnection()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeout">connectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">maxPendingRequestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">maxRequestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">maxRequestsPerConnectionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeout"></a>

```java
public GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference getConnectTimeout();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference</a>

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput"></a>

```java
public GoogleComputeBackendServiceCircuitBreakersConnectTimeout getConnectTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```java
public java.lang.Number getMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxPendingRequestsInput`<sup>Optional</sup> <a name="maxPendingRequestsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```java
public java.lang.Number getMaxPendingRequestsInput();
```

- *Type:* java.lang.Number

---

##### `maxRequestsInput`<sup>Optional</sup> <a name="maxRequestsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```java
public java.lang.Number getMaxRequestsInput();
```

- *Type:* java.lang.Number

---

##### `maxRequestsPerConnectionInput`<sup>Optional</sup> <a name="maxRequestsPerConnectionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```java
public java.lang.Number getMaxRequestsPerConnectionInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```java
public java.lang.Number getMaxPendingRequests();
```

- *Type:* java.lang.Number

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

---

##### `maxRequestsPerConnection`<sup>Required</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```java
public java.lang.Number getMaxRequestsPerConnection();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceCircuitBreakers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

---


### GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference <a name="GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference;

new GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```java
public void putTtl(GoogleComputeBackendServiceConsistentHashHttpCookieTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```java
public GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference getTtl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```java
public GoogleComputeBackendServiceConsistentHashHttpCookieTtl getTtlInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceConsistentHashHttpCookie getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

---


### GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference;

new GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceConsistentHashHttpCookieTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---


### GoogleComputeBackendServiceConsistentHashOutputReference <a name="GoogleComputeBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceConsistentHashOutputReference;

new GoogleComputeBackendServiceConsistentHashOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.putHttpCookie">putHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpCookie">resetHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName">resetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize">resetMinimumRingSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpCookie` <a name="putHttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```java
public void putHttpCookie(GoogleComputeBackendServiceConsistentHashHttpCookie value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `resetHttpCookie` <a name="resetHttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```java
public void resetHttpCookie()
```

##### `resetHttpHeaderName` <a name="resetHttpHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```java
public void resetHttpHeaderName()
```

##### `resetMinimumRingSize` <a name="resetMinimumRingSize" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```java
public void resetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput">httpCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">httpHeaderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">minimumRingSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize">minimumRingSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpCookie`<sup>Required</sup> <a name="httpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```java
public GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference getHttpCookie();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `httpCookieInput`<sup>Optional</sup> <a name="httpCookieInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```java
public GoogleComputeBackendServiceConsistentHashHttpCookie getHttpCookieInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `httpHeaderNameInput`<sup>Optional</sup> <a name="httpHeaderNameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```java
public java.lang.String getHttpHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `minimumRingSizeInput`<sup>Optional</sup> <a name="minimumRingSizeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```java
public java.lang.Number getMinimumRingSizeInput();
```

- *Type:* java.lang.Number

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```java
public java.lang.String getHttpHeaderName();
```

- *Type:* java.lang.String

---

##### `minimumRingSize`<sup>Required</sup> <a name="minimumRingSize" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```java
public java.lang.Number getMinimumRingSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceConsistentHash getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

---


### GoogleComputeBackendServiceIapOutputReference <a name="GoogleComputeBackendServiceIapOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceIapOutputReference;

new GoogleComputeBackendServiceIapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientId">resetOauth2ClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientSecret">resetOauth2ClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauth2ClientId` <a name="resetOauth2ClientId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientId"></a>

```java
public void resetOauth2ClientId()
```

##### `resetOauth2ClientSecret` <a name="resetOauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientSecret"></a>

```java
public void resetOauth2ClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">oauth2ClientSecretSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput">oauth2ClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput">oauth2ClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientId">oauth2ClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecretSha256`<sup>Required</sup> <a name="oauth2ClientSecretSha256" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```java
public java.lang.String getOauth2ClientSecretSha256();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauth2ClientIdInput`<sup>Optional</sup> <a name="oauth2ClientIdInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```java
public java.lang.String getOauth2ClientIdInput();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecretInput`<sup>Optional</sup> <a name="oauth2ClientSecretInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```java
public java.lang.String getOauth2ClientSecretInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```java
public java.lang.String getOauth2ClientId();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecret`<sup>Required</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```java
public java.lang.String getOauth2ClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceIap getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

---


### GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference <a name="GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference;

new GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData"></a>

```java
public void resetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---


### GoogleComputeBackendServiceLocalityLbPoliciesList <a name="GoogleComputeBackendServiceLocalityLbPoliciesList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceLocalityLbPoliciesList;

new GoogleComputeBackendServiceLocalityLbPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.get"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>>

---


### GoogleComputeBackendServiceLocalityLbPoliciesOutputReference <a name="GoogleComputeBackendServiceLocalityLbPoliciesOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference;

new GoogleComputeBackendServiceLocalityLbPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy">putCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy">resetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPolicy` <a name="putCustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy"></a>

```java
public void putCustomPolicy(GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy"></a>

```java
public void putPolicy(GoogleComputeBackendServiceLocalityLbPoliciesPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `resetCustomPolicy` <a name="resetCustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy"></a>

```java
public void resetCustomPolicy()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput">customPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput">policyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPolicy`<sup>Required</sup> <a name="customPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference getCustomPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference getPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a>

---

##### `customPolicyInput`<sup>Optional</sup> <a name="customPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy getCustomPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesPolicy getPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies">GoogleComputeBackendServiceLocalityLbPolicies</a>

---


### GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference <a name="GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference;

new GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceLocalityLbPoliciesPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---


### GoogleComputeBackendServiceLogConfigOutputReference <a name="GoogleComputeBackendServiceLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceLogConfigOutputReference;

new GoogleComputeBackendServiceLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```java
public void resetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```java
public java.lang.Number getSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

---


### GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference;

new GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference <a name="GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference;

new GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceOutlierDetectionInterval getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

---


### GoogleComputeBackendServiceOutlierDetectionOutputReference <a name="GoogleComputeBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceOutlierDetectionOutputReference;

new GoogleComputeBackendServiceOutlierDetectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">putBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putInterval">putInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">resetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">resetConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">resetConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">resetEnforcingConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">resetEnforcingConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">resetEnforcingSuccessRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">resetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">resetSuccessRateMinimumHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">resetSuccessRateRequestVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">resetSuccessRateStdevFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseEjectionTime` <a name="putBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```java
public void putBaseEjectionTime(GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `putInterval` <a name="putInterval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```java
public void putInterval(GoogleComputeBackendServiceOutlierDetectionInterval value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

---

##### `resetBaseEjectionTime` <a name="resetBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```java
public void resetBaseEjectionTime()
```

##### `resetConsecutiveErrors` <a name="resetConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```java
public void resetConsecutiveErrors()
```

##### `resetConsecutiveGatewayFailure` <a name="resetConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```java
public void resetConsecutiveGatewayFailure()
```

##### `resetEnforcingConsecutiveErrors` <a name="resetEnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```java
public void resetEnforcingConsecutiveErrors()
```

##### `resetEnforcingConsecutiveGatewayFailure` <a name="resetEnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```java
public void resetEnforcingConsecutiveGatewayFailure()
```

##### `resetEnforcingSuccessRate` <a name="resetEnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```java
public void resetEnforcingSuccessRate()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetMaxEjectionPercent` <a name="resetMaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```java
public void resetMaxEjectionPercent()
```

##### `resetSuccessRateMinimumHosts` <a name="resetSuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```java
public void resetSuccessRateMinimumHosts()
```

##### `resetSuccessRateRequestVolume` <a name="resetSuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```java
public void resetSuccessRateRequestVolume()
```

##### `resetSuccessRateStdevFactor` <a name="resetSuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```java
public void resetSuccessRateStdevFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">baseEjectionTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">consecutiveErrorsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">consecutiveGatewayFailureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">enforcingConsecutiveErrorsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">enforcingConsecutiveGatewayFailureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">enforcingSuccessRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput">intervalInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">maxEjectionPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">successRateMinimumHostsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">successRateRequestVolumeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">successRateStdevFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">consecutiveErrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseEjectionTime`<sup>Required</sup> <a name="baseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```java
public GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference getBaseEjectionTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```java
public GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference getInterval();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `baseEjectionTimeInput`<sup>Optional</sup> <a name="baseEjectionTimeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```java
public GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime getBaseEjectionTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `consecutiveErrorsInput`<sup>Optional</sup> <a name="consecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```java
public java.lang.Number getConsecutiveErrorsInput();
```

- *Type:* java.lang.Number

---

##### `consecutiveGatewayFailureInput`<sup>Optional</sup> <a name="consecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```java
public java.lang.Number getConsecutiveGatewayFailureInput();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveErrorsInput`<sup>Optional</sup> <a name="enforcingConsecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrorsInput();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailureInput();
```

- *Type:* java.lang.Number

---

##### `enforcingSuccessRateInput`<sup>Optional</sup> <a name="enforcingSuccessRateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```java
public java.lang.Number getEnforcingSuccessRateInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```java
public GoogleComputeBackendServiceOutlierDetectionInterval getIntervalInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

---

##### `maxEjectionPercentInput`<sup>Optional</sup> <a name="maxEjectionPercentInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```java
public java.lang.Number getMaxEjectionPercentInput();
```

- *Type:* java.lang.Number

---

##### `successRateMinimumHostsInput`<sup>Optional</sup> <a name="successRateMinimumHostsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```java
public java.lang.Number getSuccessRateMinimumHostsInput();
```

- *Type:* java.lang.Number

---

##### `successRateRequestVolumeInput`<sup>Optional</sup> <a name="successRateRequestVolumeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```java
public java.lang.Number getSuccessRateRequestVolumeInput();
```

- *Type:* java.lang.Number

---

##### `successRateStdevFactorInput`<sup>Optional</sup> <a name="successRateStdevFactorInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```java
public java.lang.Number getSuccessRateStdevFactorInput();
```

- *Type:* java.lang.Number

---

##### `consecutiveErrors`<sup>Required</sup> <a name="consecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```java
public java.lang.Number getConsecutiveErrors();
```

- *Type:* java.lang.Number

---

##### `consecutiveGatewayFailure`<sup>Required</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```java
public java.lang.Number getConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveErrors`<sup>Required</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrors();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

---

##### `enforcingSuccessRate`<sup>Required</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```java
public java.lang.Number getEnforcingSuccessRate();
```

- *Type:* java.lang.Number

---

##### `maxEjectionPercent`<sup>Required</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```java
public java.lang.Number getMaxEjectionPercent();
```

- *Type:* java.lang.Number

---

##### `successRateMinimumHosts`<sup>Required</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```java
public java.lang.Number getSuccessRateMinimumHosts();
```

- *Type:* java.lang.Number

---

##### `successRateRequestVolume`<sup>Required</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```java
public java.lang.Number getSuccessRateRequestVolume();
```

- *Type:* java.lang.Number

---

##### `successRateStdevFactor`<sup>Required</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```java
public java.lang.Number getSuccessRateStdevFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceOutlierDetection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

---


### GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference <a name="GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference;

new GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion">resetAccessKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion">resetOriginRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetAccessKeyVersion` <a name="resetAccessKeyVersion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion"></a>

```java
public void resetAccessKeyVersion()
```

##### `resetOriginRegion` <a name="resetOriginRegion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion"></a>

```java
public void resetOriginRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput">accessKeyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput">originRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion">accessKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion">originRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `accessKeyVersionInput`<sup>Optional</sup> <a name="accessKeyVersionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput"></a>

```java
public java.lang.String getAccessKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `originRegionInput`<sup>Optional</sup> <a name="originRegionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput"></a>

```java
public java.lang.String getOriginRegionInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `accessKeyVersion`<sup>Required</sup> <a name="accessKeyVersion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion"></a>

```java
public java.lang.String getAccessKeyVersion();
```

- *Type:* java.lang.String

---

##### `originRegion`<sup>Required</sup> <a name="originRegion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion"></a>

```java
public java.lang.String getOriginRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---


### GoogleComputeBackendServiceSecuritySettingsOutputReference <a name="GoogleComputeBackendServiceSecuritySettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceSecuritySettingsOutputReference;

new GoogleComputeBackendServiceSecuritySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication">putAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication">resetAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy">resetClientTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames">resetSubjectAltNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsV4Authentication` <a name="putAwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication"></a>

```java
public void putAwsV4Authentication(GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `resetAwsV4Authentication` <a name="resetAwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication"></a>

```java
public void resetAwsV4Authentication()
```

##### `resetClientTlsPolicy` <a name="resetClientTlsPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy"></a>

```java
public void resetClientTlsPolicy()
```

##### `resetSubjectAltNames` <a name="resetSubjectAltNames" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames"></a>

```java
public void resetSubjectAltNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication">awsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput">awsV4AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput">clientTlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput">subjectAltNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy">clientTlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames">subjectAltNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsV4Authentication`<sup>Required</sup> <a name="awsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication"></a>

```java
public GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference getAwsV4Authentication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a>

---

##### `awsV4AuthenticationInput`<sup>Optional</sup> <a name="awsV4AuthenticationInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput"></a>

```java
public GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication getAwsV4AuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `clientTlsPolicyInput`<sup>Optional</sup> <a name="clientTlsPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput"></a>

```java
public java.lang.String getClientTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `subjectAltNamesInput`<sup>Optional</sup> <a name="subjectAltNamesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput"></a>

```java
public java.util.List<java.lang.String> getSubjectAltNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientTlsPolicy`<sup>Required</sup> <a name="clientTlsPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy"></a>

```java
public java.lang.String getClientTlsPolicy();
```

- *Type:* java.lang.String

---

##### `subjectAltNames`<sup>Required</sup> <a name="subjectAltNames" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAltNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceSecuritySettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

---


### GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference <a name="GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference;

new GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl"></a>

```java
public void putTtl(GoogleComputeBackendServiceStrongSessionAffinityCookieTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```java
public GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference getTtl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput"></a>

```java
public GoogleComputeBackendServiceStrongSessionAffinityCookieTtl getTtlInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceStrongSessionAffinityCookie getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---


### GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference;

new GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendServiceStrongSessionAffinityCookieTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---


### GoogleComputeBackendServiceTimeoutsOutputReference <a name="GoogleComputeBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_service.GoogleComputeBackendServiceTimeoutsOutputReference;

new GoogleComputeBackendServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a>

---



