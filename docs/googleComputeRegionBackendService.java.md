# `googleComputeRegionBackendService` Submodule <a name="`googleComputeRegionBackendService` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionBackendService <a name="GoogleComputeRegionBackendService" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service google_compute_region_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendService;

GoogleComputeRegionBackendService.Builder.create(Construct scope, java.lang.String id)
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
//  .backend(java.util.List<GoogleComputeRegionBackendServiceBackend>)
//  .cdnPolicy(GoogleComputeRegionBackendServiceCdnPolicy)
//  .circuitBreakers(GoogleComputeRegionBackendServiceCircuitBreakers)
//  .connectionDrainingTimeoutSec(java.lang.Number)
//  .connectionTrackingPolicy(GoogleComputeRegionBackendServiceConnectionTrackingPolicy)
//  .consistentHash(GoogleComputeRegionBackendServiceConsistentHash)
//  .description(java.lang.String)
//  .enableCdn(java.lang.Boolean)
//  .enableCdn(IResolvable)
//  .failoverPolicy(GoogleComputeRegionBackendServiceFailoverPolicy)
//  .healthChecks(java.util.List<java.lang.String>)
//  .iap(GoogleComputeRegionBackendServiceIap)
//  .id(java.lang.String)
//  .ipAddressSelectionPolicy(java.lang.String)
//  .loadBalancingScheme(java.lang.String)
//  .localityLbPolicy(java.lang.String)
//  .logConfig(GoogleComputeRegionBackendServiceLogConfig)
//  .network(java.lang.String)
//  .outlierDetection(GoogleComputeRegionBackendServiceOutlierDetection)
//  .portName(java.lang.String)
//  .project(java.lang.String)
//  .protocol(java.lang.String)
//  .region(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .sessionAffinity(java.lang.String)
//  .strongSessionAffinityCookie(GoogleComputeRegionBackendServiceStrongSessionAffinityCookie)
//  .subsetting(GoogleComputeRegionBackendServiceSubsetting)
//  .timeouts(GoogleComputeRegionBackendServiceTimeouts)
//  .timeoutSec(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.backend">backend</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>></code> | backend block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.connectionTrackingPolicy">connectionTrackingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | connection_tracking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable Cloud CDN for this RegionBackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.failoverPolicy">failoverPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | failover_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.iap">iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#id GoogleComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Indicates what kind of load balancing this regional backend service will be used for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The URL of the network to which this backend service belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.portName">portName</a></code> | <code>java.lang.String</code> | A named port on a backend instance group representing the port for communication to the backend VMs in that group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#project GoogleComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol this RegionBackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.subsetting">subsetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | subsetting block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `affinityCookieTtlSec`<sup>Optional</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.affinityCookieTtlSec"></a>

- *Type:* java.lang.Number

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#affinity_cookie_ttl_sec GoogleComputeRegionBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.backend"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#backend GoogleComputeRegionBackendService#backend}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.cdnPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#cdn_policy GoogleComputeRegionBackendService#cdn_policy}

---

##### `circuitBreakers`<sup>Optional</sup> <a name="circuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.circuitBreakers"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#circuit_breakers GoogleComputeRegionBackendService#circuit_breakers}

---

##### `connectionDrainingTimeoutSec`<sup>Optional</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.connectionDrainingTimeoutSec"></a>

- *Type:* java.lang.Number

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#connection_draining_timeout_sec GoogleComputeRegionBackendService#connection_draining_timeout_sec}

---

##### `connectionTrackingPolicy`<sup>Optional</sup> <a name="connectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.connectionTrackingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

connection_tracking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#connection_tracking_policy GoogleComputeRegionBackendService#connection_tracking_policy}

---

##### `consistentHash`<sup>Optional</sup> <a name="consistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.consistentHash"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#consistent_hash GoogleComputeRegionBackendService#consistent_hash}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#description GoogleComputeRegionBackendService#description}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.enableCdn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable Cloud CDN for this RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#enable_cdn GoogleComputeRegionBackendService#enable_cdn}

---

##### `failoverPolicy`<sup>Optional</sup> <a name="failoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.failoverPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#failover_policy GoogleComputeRegionBackendService#failover_policy}

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.healthChecks"></a>

- *Type:* java.util.List<java.lang.String>

The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#health_checks GoogleComputeRegionBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.iap"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#iap GoogleComputeRegionBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#id GoogleComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressSelectionPolicy`<sup>Optional</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.ipAddressSelectionPolicy"></a>

- *Type:* java.lang.String

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#ip_address_selection_policy GoogleComputeRegionBackendService#ip_address_selection_policy}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* java.lang.String

Indicates what kind of load balancing this regional backend service will be used for.

A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "INTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#load_balancing_scheme GoogleComputeRegionBackendService#load_balancing_scheme}

---

##### `localityLbPolicy`<sup>Optional</sup> <a name="localityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.localityLbPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#locality_lb_policy GoogleComputeRegionBackendService#locality_lb_policy}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#log_config GoogleComputeRegionBackendService#log_config}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The URL of the network to which this backend service belongs.

This field can only be specified when the load balancing scheme is set to INTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#network GoogleComputeRegionBackendService#network}

---

##### `outlierDetection`<sup>Optional</sup> <a name="outlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.outlierDetection"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#outlier_detection GoogleComputeRegionBackendService#outlier_detection}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.portName"></a>

- *Type:* java.lang.String

A named port on a backend instance group representing the port for communication to the backend VMs in that group.

Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#port_name GoogleComputeRegionBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#project GoogleComputeRegionBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The protocol this RegionBackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#protocol GoogleComputeRegionBackendService#protocol}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#region GoogleComputeRegionBackendService#region}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.securityPolicy"></a>

- *Type:* java.lang.String

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#security_policy GoogleComputeRegionBackendService#security_policy}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.sessionAffinity"></a>

- *Type:* java.lang.String

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#session_affinity GoogleComputeRegionBackendService#session_affinity}

---

##### `strongSessionAffinityCookie`<sup>Optional</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.strongSessionAffinityCookie"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#strong_session_affinity_cookie GoogleComputeRegionBackendService#strong_session_affinity_cookie}

---

##### `subsetting`<sup>Optional</sup> <a name="subsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.subsetting"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

subsetting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#subsetting GoogleComputeRegionBackendService#subsetting}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#timeouts GoogleComputeRegionBackendService#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.Initializer.parameter.timeoutSec"></a>

- *Type:* java.lang.Number

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#timeout_sec GoogleComputeRegionBackendService#timeout_sec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putBackend">putBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCircuitBreakers">putCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConnectionTrackingPolicy">putConnectionTrackingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConsistentHash">putConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putFailoverPolicy">putFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putIap">putIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putOutlierDetection">putOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putStrongSessionAffinityCookie">putStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putSubsetting">putSubsetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetAffinityCookieTtlSec">resetAffinityCookieTtlSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCircuitBreakers">resetCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionDrainingTimeoutSec">resetConnectionDrainingTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionTrackingPolicy">resetConnectionTrackingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConsistentHash">resetConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetEnableCdn">resetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetFailoverPolicy">resetFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetHealthChecks">resetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIap">resetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIpAddressSelectionPolicy">resetIpAddressSelectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLocalityLbPolicy">resetLocalityLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOutlierDetection">resetOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetStrongSessionAffinityCookie">resetStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSubsetting">resetSubsetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackend` <a name="putBackend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putBackend"></a>

```java
public void putBackend(IResolvable OR java.util.List<GoogleComputeRegionBackendServiceBackend> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putBackend.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>>

---

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCdnPolicy"></a>

```java
public void putCdnPolicy(GoogleComputeRegionBackendServiceCdnPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

---

##### `putCircuitBreakers` <a name="putCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCircuitBreakers"></a>

```java
public void putCircuitBreakers(GoogleComputeRegionBackendServiceCircuitBreakers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putCircuitBreakers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

---

##### `putConnectionTrackingPolicy` <a name="putConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConnectionTrackingPolicy"></a>

```java
public void putConnectionTrackingPolicy(GoogleComputeRegionBackendServiceConnectionTrackingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConnectionTrackingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---

##### `putConsistentHash` <a name="putConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConsistentHash"></a>

```java
public void putConsistentHash(GoogleComputeRegionBackendServiceConsistentHash value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putConsistentHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

---

##### `putFailoverPolicy` <a name="putFailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putFailoverPolicy"></a>

```java
public void putFailoverPolicy(GoogleComputeRegionBackendServiceFailoverPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

---

##### `putIap` <a name="putIap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putIap"></a>

```java
public void putIap(GoogleComputeRegionBackendServiceIap value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putLogConfig"></a>

```java
public void putLogConfig(GoogleComputeRegionBackendServiceLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

---

##### `putOutlierDetection` <a name="putOutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putOutlierDetection"></a>

```java
public void putOutlierDetection(GoogleComputeRegionBackendServiceOutlierDetection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putOutlierDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

---

##### `putStrongSessionAffinityCookie` <a name="putStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putStrongSessionAffinityCookie"></a>

```java
public void putStrongSessionAffinityCookie(GoogleComputeRegionBackendServiceStrongSessionAffinityCookie value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putStrongSessionAffinityCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---

##### `putSubsetting` <a name="putSubsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putSubsetting"></a>

```java
public void putSubsetting(GoogleComputeRegionBackendServiceSubsetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putSubsetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRegionBackendServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

---

##### `resetAffinityCookieTtlSec` <a name="resetAffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetAffinityCookieTtlSec"></a>

```java
public void resetAffinityCookieTtlSec()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCdnPolicy"></a>

```java
public void resetCdnPolicy()
```

##### `resetCircuitBreakers` <a name="resetCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetCircuitBreakers"></a>

```java
public void resetCircuitBreakers()
```

##### `resetConnectionDrainingTimeoutSec` <a name="resetConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionDrainingTimeoutSec"></a>

```java
public void resetConnectionDrainingTimeoutSec()
```

##### `resetConnectionTrackingPolicy` <a name="resetConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConnectionTrackingPolicy"></a>

```java
public void resetConnectionTrackingPolicy()
```

##### `resetConsistentHash` <a name="resetConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetConsistentHash"></a>

```java
public void resetConsistentHash()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableCdn` <a name="resetEnableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetEnableCdn"></a>

```java
public void resetEnableCdn()
```

##### `resetFailoverPolicy` <a name="resetFailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetFailoverPolicy"></a>

```java
public void resetFailoverPolicy()
```

##### `resetHealthChecks` <a name="resetHealthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetHealthChecks"></a>

```java
public void resetHealthChecks()
```

##### `resetIap` <a name="resetIap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIap"></a>

```java
public void resetIap()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddressSelectionPolicy` <a name="resetIpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetIpAddressSelectionPolicy"></a>

```java
public void resetIpAddressSelectionPolicy()
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLoadBalancingScheme"></a>

```java
public void resetLoadBalancingScheme()
```

##### `resetLocalityLbPolicy` <a name="resetLocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLocalityLbPolicy"></a>

```java
public void resetLocalityLbPolicy()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetOutlierDetection` <a name="resetOutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetOutlierDetection"></a>

```java
public void resetOutlierDetection()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProject"></a>

```java
public void resetProject()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSessionAffinity"></a>

```java
public void resetSessionAffinity()
```

##### `resetStrongSessionAffinityCookie` <a name="resetStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetStrongSessionAffinityCookie"></a>

```java
public void resetStrongSessionAffinityCookie()
```

##### `resetSubsetting` <a name="resetSubsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetSubsetting"></a>

```java
public void resetSubsetting()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.resetTimeoutSec"></a>

```java
public void resetTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendService;

GoogleComputeRegionBackendService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendService;

GoogleComputeRegionBackendService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendService;

GoogleComputeRegionBackendService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendService;

GoogleComputeRegionBackendService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRegionBackendService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRegionBackendService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRegionBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList">GoogleComputeRegionBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicy">connectionTrackingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference">GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference">GoogleComputeRegionBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicy">failoverPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference">GoogleComputeRegionBackendServiceFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.generatedId">generatedId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference">GoogleComputeRegionBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference">GoogleComputeRegionBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsetting">subsetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference">GoogleComputeRegionBackendServiceSubsettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference">GoogleComputeRegionBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSecInput">affinityCookieTtlSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backendInput">backendInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakersInput">circuitBreakersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSecInput">connectionDrainingTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicyInput">connectionTrackingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHashInput">consistentHashInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdnInput">enableCdnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicyInput">failoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecksInput">healthChecksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iapInput">iapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicyInput">ipAddressSelectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicyInput">localityLbPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetectionInput">outlierDetectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookieInput">strongSessionAffinityCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsettingInput">subsettingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSecInput">timeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backend"></a>

```java
public GoogleComputeRegionBackendServiceBackendList getBackend();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList">GoogleComputeRegionBackendServiceBackendList</a>

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicy"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicyOutputReference getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyOutputReference</a>

---

##### `circuitBreakers`<sup>Required</sup> <a name="circuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakers"></a>

```java
public GoogleComputeRegionBackendServiceCircuitBreakersOutputReference getCircuitBreakers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersOutputReference</a>

---

##### `connectionTrackingPolicy`<sup>Required</sup> <a name="connectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicy"></a>

```java
public GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference getConnectionTrackingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference">GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference</a>

---

##### `consistentHash`<sup>Required</sup> <a name="consistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHash"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHashOutputReference getConsistentHash();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference">GoogleComputeRegionBackendServiceConsistentHashOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `failoverPolicy`<sup>Required</sup> <a name="failoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicy"></a>

```java
public GoogleComputeRegionBackendServiceFailoverPolicyOutputReference getFailoverPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference">GoogleComputeRegionBackendServiceFailoverPolicyOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `generatedId`<sup>Required</sup> <a name="generatedId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.generatedId"></a>

```java
public java.lang.Number getGeneratedId();
```

- *Type:* java.lang.Number

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iap"></a>

```java
public GoogleComputeRegionBackendServiceIapOutputReference getIap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference">GoogleComputeRegionBackendServiceIapOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfig"></a>

```java
public GoogleComputeRegionBackendServiceLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference">GoogleComputeRegionBackendServiceLogConfigOutputReference</a>

---

##### `outlierDetection`<sup>Required</sup> <a name="outlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetection"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetectionOutputReference getOutlierDetection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `strongSessionAffinityCookie`<sup>Required</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookie"></a>

```java
public GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference getStrongSessionAffinityCookie();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference</a>

---

##### `subsetting`<sup>Required</sup> <a name="subsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsetting"></a>

```java
public GoogleComputeRegionBackendServiceSubsettingOutputReference getSubsetting();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference">GoogleComputeRegionBackendServiceSubsettingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeouts"></a>

```java
public GoogleComputeRegionBackendServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference">GoogleComputeRegionBackendServiceTimeoutsOutputReference</a>

---

##### `affinityCookieTtlSecInput`<sup>Optional</sup> <a name="affinityCookieTtlSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSecInput"></a>

```java
public java.lang.Number getAffinityCookieTtlSecInput();
```

- *Type:* java.lang.Number

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.backendInput"></a>

```java
public java.lang.Object getBackendInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>>

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.cdnPolicyInput"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicy getCdnPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

---

##### `circuitBreakersInput`<sup>Optional</sup> <a name="circuitBreakersInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.circuitBreakersInput"></a>

```java
public GoogleComputeRegionBackendServiceCircuitBreakers getCircuitBreakersInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

---

##### `connectionDrainingTimeoutSecInput`<sup>Optional</sup> <a name="connectionDrainingTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSecInput"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `connectionTrackingPolicyInput`<sup>Optional</sup> <a name="connectionTrackingPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionTrackingPolicyInput"></a>

```java
public GoogleComputeRegionBackendServiceConnectionTrackingPolicy getConnectionTrackingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---

##### `consistentHashInput`<sup>Optional</sup> <a name="consistentHashInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.consistentHashInput"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHash getConsistentHashInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableCdnInput`<sup>Optional</sup> <a name="enableCdnInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdnInput"></a>

```java
public java.lang.Object getEnableCdnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failoverPolicyInput`<sup>Optional</sup> <a name="failoverPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.failoverPolicyInput"></a>

```java
public GoogleComputeRegionBackendServiceFailoverPolicy getFailoverPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

---

##### `healthChecksInput`<sup>Optional</sup> <a name="healthChecksInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecksInput"></a>

```java
public java.util.List<java.lang.String> getHealthChecksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iapInput`<sup>Optional</sup> <a name="iapInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.iapInput"></a>

```java
public GoogleComputeRegionBackendServiceIap getIapInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressSelectionPolicyInput`<sup>Optional</sup> <a name="ipAddressSelectionPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicyInput"></a>

```java
public java.lang.String getIpAddressSelectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `localityLbPolicyInput`<sup>Optional</sup> <a name="localityLbPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicyInput"></a>

```java
public java.lang.String getLocalityLbPolicyInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.logConfigInput"></a>

```java
public GoogleComputeRegionBackendServiceLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `outlierDetectionInput`<sup>Optional</sup> <a name="outlierDetectionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.outlierDetectionInput"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetection getOutlierDetectionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinityInput"></a>

```java
public java.lang.String getSessionAffinityInput();
```

- *Type:* java.lang.String

---

##### `strongSessionAffinityCookieInput`<sup>Optional</sup> <a name="strongSessionAffinityCookieInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.strongSessionAffinityCookieInput"></a>

```java
public GoogleComputeRegionBackendServiceStrongSessionAffinityCookie getStrongSessionAffinityCookieInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---

##### `subsettingInput`<sup>Optional</sup> <a name="subsettingInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.subsettingInput"></a>

```java
public GoogleComputeRegionBackendServiceSubsetting getSubsettingInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSecInput"></a>

```java
public java.lang.Number getTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

---

##### `affinityCookieTtlSec`<sup>Required</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.affinityCookieTtlSec"></a>

```java
public java.lang.Number getAffinityCookieTtlSec();
```

- *Type:* java.lang.Number

---

##### `connectionDrainingTimeoutSec`<sup>Required</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableCdn`<sup>Required</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.enableCdn"></a>

```java
public java.lang.Object getEnableCdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.healthChecks"></a>

```java
public java.util.List<java.lang.String> getHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddressSelectionPolicy`<sup>Required</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.ipAddressSelectionPolicy"></a>

```java
public java.lang.String getIpAddressSelectionPolicy();
```

- *Type:* java.lang.String

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `localityLbPolicy`<sup>Required</sup> <a name="localityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.localityLbPolicy"></a>

```java
public java.lang.String getLocalityLbPolicy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionBackendServiceBackend <a name="GoogleComputeRegionBackendServiceBackend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceBackend;

GoogleComputeRegionBackendServiceBackend.builder()
    .group(java.lang.String)
//  .balancingMode(java.lang.String)
//  .capacityScaler(java.lang.Number)
//  .description(java.lang.String)
//  .failover(java.lang.Boolean)
//  .failover(IResolvable)
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.group">group</a></code> | <code>java.lang.String</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.balancingMode">balancingMode</a></code> | <code>java.lang.String</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.capacityScaler">capacityScaler</a></code> | <code>java.lang.Number</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.failover">failover</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field designates whether this is a failover backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | The max number of simultaneous connections for the group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>java.lang.Number</code> | The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>java.lang.Number</code> | The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>java.lang.Number</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>java.lang.Number</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxUtilization">maxUtilization</a></code> | <code>java.lang.Number</code> | Used when balancingMode is UTILIZATION. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.group"></a>

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

When the 'load_balancing_scheme' is INTERNAL, only instance groups
are supported.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#group GoogleComputeRegionBackendService#group}

---

##### `balancingMode`<sup>Optional</sup> <a name="balancingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.balancingMode"></a>

```java
public java.lang.String getBalancingMode();
```

- *Type:* java.lang.String

Specifies the balancing mode for this backend.

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#balancing_mode GoogleComputeRegionBackendService#balancing_mode}

---

##### `capacityScaler`<sup>Optional</sup> <a name="capacityScaler" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.capacityScaler"></a>

```java
public java.lang.Number getCapacityScaler();
```

- *Type:* java.lang.Number

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

~>**NOTE**: This field cannot be set for
INTERNAL region backend services (default loadBalancingScheme),
but is required for non-INTERNAL backend service. The total
capacity_scaler for all backends must be non-zero.

A setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#capacity_scaler GoogleComputeRegionBackendService#capacity_scaler}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#description GoogleComputeRegionBackendService#description}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.failover"></a>

```java
public java.lang.Object getFailover();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field designates whether this is a failover backend.

More
than one failover backend can be configured for a given RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#failover GoogleComputeRegionBackendService#failover}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

The max number of simultaneous connections for the group.

Can
be used with either CONNECTION or UTILIZATION balancing modes.
Cannot be set for INTERNAL backend services.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_connections GoogleComputeRegionBackendService#max_connections}

---

##### `maxConnectionsPerEndpoint`<sup>Optional</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpoint();
```

- *Type:* java.lang.Number

The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group. Can be
used in either CONNECTION or UTILIZATION balancing modes. For
CONNECTION mode, either maxConnections or
maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_connections_per_endpoint GoogleComputeRegionBackendService#max_connections_per_endpoint}

---

##### `maxConnectionsPerInstance`<sup>Optional</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```java
public java.lang.Number getMaxConnectionsPerInstance();
```

- *Type:* java.lang.Number

The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group.
Can be used in either CONNECTION or UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_connections_per_instance GoogleComputeRegionBackendService#max_connections_per_instance}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. Either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_rate GoogleComputeRegionBackendService#max_rate}

---

##### `maxRatePerEndpoint`<sup>Optional</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerEndpoint"></a>

```java
public java.lang.Number getMaxRatePerEndpoint();
```

- *Type:* java.lang.Number

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_rate_per_endpoint GoogleComputeRegionBackendService#max_rate_per_endpoint}

---

##### `maxRatePerInstance`<sup>Optional</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxRatePerInstance"></a>

```java
public java.lang.Number getMaxRatePerInstance();
```

- *Type:* java.lang.Number

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_rate_per_instance GoogleComputeRegionBackendService#max_rate_per_instance}

---

##### `maxUtilization`<sup>Optional</sup> <a name="maxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend.property.maxUtilization"></a>

```java
public java.lang.Number getMaxUtilization();
```

- *Type:* java.lang.Number

Used when balancingMode is UTILIZATION.

This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
Cannot be set for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_utilization GoogleComputeRegionBackendService#max_utilization}

---

### GoogleComputeRegionBackendServiceCdnPolicy <a name="GoogleComputeRegionBackendServiceCdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCdnPolicy;

GoogleComputeRegionBackendServiceCdnPolicy.builder()
//  .cacheKeyPolicy(GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy)
//  .cacheMode(java.lang.String)
//  .clientTtl(java.lang.Number)
//  .defaultTtl(java.lang.Number)
//  .maxTtl(java.lang.Number)
//  .negativeCaching(java.lang.Boolean)
//  .negativeCaching(IResolvable)
//  .negativeCachingPolicy(IResolvable)
//  .negativeCachingPolicy(java.util.List<GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy>)
//  .serveWhileStale(java.lang.Number)
//  .signedUrlCacheMaxAgeSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>></code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.serveWhileStale">serveWhileStale</a></code> | <code>java.lang.Number</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>java.lang.Number</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#cache_key_policy GoogleComputeRegionBackendService#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#cache_mode GoogleComputeRegionBackendService#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.clientTtl"></a>

```java
public java.lang.Number getClientTtl();
```

- *Type:* java.lang.Number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#client_ttl GoogleComputeRegionBackendService#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#default_ttl GoogleComputeRegionBackendService#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_ttl GoogleComputeRegionBackendService#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#negative_caching GoogleComputeRegionBackendService#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```java
public java.lang.Object getNegativeCachingPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>>

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#negative_caching_policy GoogleComputeRegionBackendService#negative_caching_policy}

---

##### `serveWhileStale`<sup>Optional</sup> <a name="serveWhileStale" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.serveWhileStale"></a>

```java
public java.lang.Number getServeWhileStale();
```

- *Type:* java.lang.Number

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#serve_while_stale GoogleComputeRegionBackendService#serve_while_stale}

---

##### `signedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#signed_url_cache_max_age_sec GoogleComputeRegionBackendService#signed_url_cache_max_age_sec}

---

### GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy <a name="GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy;

GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.builder()
//  .includeHost(java.lang.Boolean)
//  .includeHost(IResolvable)
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">includeHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">includeNamedCookies</a></code> | <code>java.util.List<java.lang.String></code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">includeProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">includeQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Names of query string parameters to include in cache keys. |

---

##### `includeHost`<sup>Optional</sup> <a name="includeHost" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```java
public java.lang.Object getIncludeHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#include_host GoogleComputeRegionBackendService#include_host}

---

##### `includeNamedCookies`<sup>Optional</sup> <a name="includeNamedCookies" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookies();
```

- *Type:* java.util.List<java.lang.String>

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#include_named_cookies GoogleComputeRegionBackendService#include_named_cookies}

---

##### `includeProtocol`<sup>Optional</sup> <a name="includeProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```java
public java.lang.Object getIncludeProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#include_protocol GoogleComputeRegionBackendService#include_protocol}

---

##### `includeQueryString`<sup>Optional</sup> <a name="includeQueryString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```java
public java.lang.Object getIncludeQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#include_query_string GoogleComputeRegionBackendService#include_query_string}

---

##### `queryStringBlacklist`<sup>Optional</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklist();
```

- *Type:* java.util.List<java.lang.String>

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#query_string_blacklist GoogleComputeRegionBackendService#query_string_blacklist}

---

##### `queryStringWhitelist`<sup>Optional</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#query_string_whitelist GoogleComputeRegionBackendService#query_string_whitelist}

---

### GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy <a name="GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy;

GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.builder()
//  .code(java.lang.Number)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>java.lang.Number</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#code GoogleComputeRegionBackendService#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}

---

### GoogleComputeRegionBackendServiceCircuitBreakers <a name="GoogleComputeRegionBackendServiceCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCircuitBreakers;

GoogleComputeRegionBackendServiceCircuitBreakers.builder()
//  .connectTimeout(GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout)
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.connectTimeout">connectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | connect_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests">maxPendingRequests</a></code> | <code>java.lang.Number</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>java.lang.Number</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.connectTimeout"></a>

```java
public GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout getConnectTimeout();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

connect_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#connect_timeout GoogleComputeRegionBackendService#connect_timeout}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_connections GoogleComputeRegionBackendService#max_connections}

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="maxPendingRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```java
public java.lang.Number getMaxPendingRequests();
```

- *Type:* java.lang.Number

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_pending_requests GoogleComputeRegionBackendService#max_pending_requests}

---

##### `maxRequests`<sup>Optional</sup> <a name="maxRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_requests GoogleComputeRegionBackendService#max_requests}

---

##### `maxRequestsPerConnection`<sup>Optional</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```java
public java.lang.Number getMaxRequestsPerConnection();
```

- *Type:* java.lang.Number

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_requests_per_connection GoogleComputeRegionBackendService#max_requests_per_connection}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_retries GoogleComputeRegionBackendService#max_retries}

---

### GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout <a name="GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout;

GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceConfig <a name="GoogleComputeRegionBackendServiceConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceConfig;

GoogleComputeRegionBackendServiceConfig.builder()
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
//  .backend(java.util.List<GoogleComputeRegionBackendServiceBackend>)
//  .cdnPolicy(GoogleComputeRegionBackendServiceCdnPolicy)
//  .circuitBreakers(GoogleComputeRegionBackendServiceCircuitBreakers)
//  .connectionDrainingTimeoutSec(java.lang.Number)
//  .connectionTrackingPolicy(GoogleComputeRegionBackendServiceConnectionTrackingPolicy)
//  .consistentHash(GoogleComputeRegionBackendServiceConsistentHash)
//  .description(java.lang.String)
//  .enableCdn(java.lang.Boolean)
//  .enableCdn(IResolvable)
//  .failoverPolicy(GoogleComputeRegionBackendServiceFailoverPolicy)
//  .healthChecks(java.util.List<java.lang.String>)
//  .iap(GoogleComputeRegionBackendServiceIap)
//  .id(java.lang.String)
//  .ipAddressSelectionPolicy(java.lang.String)
//  .loadBalancingScheme(java.lang.String)
//  .localityLbPolicy(java.lang.String)
//  .logConfig(GoogleComputeRegionBackendServiceLogConfig)
//  .network(java.lang.String)
//  .outlierDetection(GoogleComputeRegionBackendServiceOutlierDetection)
//  .portName(java.lang.String)
//  .project(java.lang.String)
//  .protocol(java.lang.String)
//  .region(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .sessionAffinity(java.lang.String)
//  .strongSessionAffinityCookie(GoogleComputeRegionBackendServiceStrongSessionAffinityCookie)
//  .subsetting(GoogleComputeRegionBackendServiceSubsetting)
//  .timeouts(GoogleComputeRegionBackendServiceTimeouts)
//  .timeoutSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.backend">backend</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>></code> | backend block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionTrackingPolicy">connectionTrackingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | connection_tracking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable Cloud CDN for this RegionBackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.failoverPolicy">failoverPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | failover_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#id GoogleComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Indicates what kind of load balancing this regional backend service will be used for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.network">network</a></code> | <code>java.lang.String</code> | The URL of the network to which this backend service belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.portName">portName</a></code> | <code>java.lang.String</code> | A named port on a backend instance group representing the port for communication to the backend VMs in that group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#project GoogleComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol this RegionBackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.subsetting">subsetting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | subsetting block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `affinityCookieTtlSec`<sup>Optional</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.affinityCookieTtlSec"></a>

```java
public java.lang.Number getAffinityCookieTtlSec();
```

- *Type:* java.lang.Number

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#affinity_cookie_ttl_sec GoogleComputeRegionBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.backend"></a>

```java
public java.lang.Object getBackend();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#backend GoogleComputeRegionBackendService#backend}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.cdnPolicy"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicy getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#cdn_policy GoogleComputeRegionBackendService#cdn_policy}

---

##### `circuitBreakers`<sup>Optional</sup> <a name="circuitBreakers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.circuitBreakers"></a>

```java
public GoogleComputeRegionBackendServiceCircuitBreakers getCircuitBreakers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#circuit_breakers GoogleComputeRegionBackendService#circuit_breakers}

---

##### `connectionDrainingTimeoutSec`<sup>Optional</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSec();
```

- *Type:* java.lang.Number

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#connection_draining_timeout_sec GoogleComputeRegionBackendService#connection_draining_timeout_sec}

---

##### `connectionTrackingPolicy`<sup>Optional</sup> <a name="connectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.connectionTrackingPolicy"></a>

```java
public GoogleComputeRegionBackendServiceConnectionTrackingPolicy getConnectionTrackingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

connection_tracking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#connection_tracking_policy GoogleComputeRegionBackendService#connection_tracking_policy}

---

##### `consistentHash`<sup>Optional</sup> <a name="consistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.consistentHash"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHash getConsistentHash();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#consistent_hash GoogleComputeRegionBackendService#consistent_hash}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#description GoogleComputeRegionBackendService#description}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.enableCdn"></a>

```java
public java.lang.Object getEnableCdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable Cloud CDN for this RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#enable_cdn GoogleComputeRegionBackendService#enable_cdn}

---

##### `failoverPolicy`<sup>Optional</sup> <a name="failoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.failoverPolicy"></a>

```java
public GoogleComputeRegionBackendServiceFailoverPolicy getFailoverPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#failover_policy GoogleComputeRegionBackendService#failover_policy}

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.healthChecks"></a>

```java
public java.util.List<java.lang.String> getHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#health_checks GoogleComputeRegionBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.iap"></a>

```java
public GoogleComputeRegionBackendServiceIap getIap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#iap GoogleComputeRegionBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#id GoogleComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressSelectionPolicy`<sup>Optional</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.ipAddressSelectionPolicy"></a>

```java
public java.lang.String getIpAddressSelectionPolicy();
```

- *Type:* java.lang.String

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#ip_address_selection_policy GoogleComputeRegionBackendService#ip_address_selection_policy}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

Indicates what kind of load balancing this regional backend service will be used for.

A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "INTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#load_balancing_scheme GoogleComputeRegionBackendService#load_balancing_scheme}

---

##### `localityLbPolicy`<sup>Optional</sup> <a name="localityLbPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.localityLbPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#locality_lb_policy GoogleComputeRegionBackendService#locality_lb_policy}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.logConfig"></a>

```java
public GoogleComputeRegionBackendServiceLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#log_config GoogleComputeRegionBackendService#log_config}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The URL of the network to which this backend service belongs.

This field can only be specified when the load balancing scheme is set to INTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#network GoogleComputeRegionBackendService#network}

---

##### `outlierDetection`<sup>Optional</sup> <a name="outlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.outlierDetection"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetection getOutlierDetection();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#outlier_detection GoogleComputeRegionBackendService#outlier_detection}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

A named port on a backend instance group representing the port for communication to the backend VMs in that group.

Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#port_name GoogleComputeRegionBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#project GoogleComputeRegionBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The protocol this RegionBackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#protocol GoogleComputeRegionBackendService#protocol}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#region GoogleComputeRegionBackendService#region}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#security_policy GoogleComputeRegionBackendService#security_policy}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#session_affinity GoogleComputeRegionBackendService#session_affinity}

---

##### `strongSessionAffinityCookie`<sup>Optional</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.strongSessionAffinityCookie"></a>

```java
public GoogleComputeRegionBackendServiceStrongSessionAffinityCookie getStrongSessionAffinityCookie();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#strong_session_affinity_cookie GoogleComputeRegionBackendService#strong_session_affinity_cookie}

---

##### `subsetting`<sup>Optional</sup> <a name="subsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.subsetting"></a>

```java
public GoogleComputeRegionBackendServiceSubsetting getSubsetting();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

subsetting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#subsetting GoogleComputeRegionBackendService#subsetting}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeouts"></a>

```java
public GoogleComputeRegionBackendServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#timeouts GoogleComputeRegionBackendService#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConfig.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#timeout_sec GoogleComputeRegionBackendService#timeout_sec}

---

### GoogleComputeRegionBackendServiceConnectionTrackingPolicy <a name="GoogleComputeRegionBackendServiceConnectionTrackingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceConnectionTrackingPolicy;

GoogleComputeRegionBackendServiceConnectionTrackingPolicy.builder()
//  .connectionPersistenceOnUnhealthyBackends(java.lang.String)
//  .enableStrongAffinity(java.lang.Boolean)
//  .enableStrongAffinity(IResolvable)
//  .idleTimeoutSec(java.lang.Number)
//  .trackingMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.connectionPersistenceOnUnhealthyBackends">connectionPersistenceOnUnhealthyBackends</a></code> | <code>java.lang.String</code> | Specifies connection persistence when backends are unhealthy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.enableStrongAffinity">enableStrongAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.idleTimeoutSec">idleTimeoutSec</a></code> | <code>java.lang.Number</code> | Specifies how long to keep a Connection Tracking entry while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.trackingMode">trackingMode</a></code> | <code>java.lang.String</code> | Specifies the key used for connection tracking. |

---

##### `connectionPersistenceOnUnhealthyBackends`<sup>Optional</sup> <a name="connectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.connectionPersistenceOnUnhealthyBackends"></a>

```java
public java.lang.String getConnectionPersistenceOnUnhealthyBackends();
```

- *Type:* java.lang.String

Specifies connection persistence when backends are unhealthy.

If set to 'DEFAULT_FOR_PROTOCOL', the existing connections persist on
unhealthy backends only for connection-oriented protocols (TCP and SCTP)
and only if the Tracking Mode is PER_CONNECTION (default tracking mode)
or the Session Affinity is configured for 5-tuple. They do not persist
for UDP.

If set to 'NEVER_PERSIST', after a backend becomes unhealthy, the existing
connections on the unhealthy backend are never persisted on the unhealthy
backend. They are always diverted to newly selected healthy backends
(unless all backends are unhealthy).

If set to 'ALWAYS_PERSIST', existing connections always persist on
unhealthy backends regardless of protocol and session affinity. It is
generally not recommended to use this mode overriding the default. Default value: "DEFAULT_FOR_PROTOCOL" Possible values: ["DEFAULT_FOR_PROTOCOL", "NEVER_PERSIST", "ALWAYS_PERSIST"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#connection_persistence_on_unhealthy_backends GoogleComputeRegionBackendService#connection_persistence_on_unhealthy_backends}

---

##### `enableStrongAffinity`<sup>Optional</sup> <a name="enableStrongAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.enableStrongAffinity"></a>

```java
public java.lang.Object getEnableStrongAffinity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#enable_strong_affinity GoogleComputeRegionBackendService#enable_strong_affinity}

---

##### `idleTimeoutSec`<sup>Optional</sup> <a name="idleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.idleTimeoutSec"></a>

```java
public java.lang.Number getIdleTimeoutSec();
```

- *Type:* java.lang.Number

Specifies how long to keep a Connection Tracking entry while there is no matching traffic (in seconds).

For L4 ILB the minimum(default) is 10 minutes and maximum is 16 hours.

For NLB the minimum(default) is 60 seconds and the maximum is 16 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#idle_timeout_sec GoogleComputeRegionBackendService#idle_timeout_sec}

---

##### `trackingMode`<sup>Optional</sup> <a name="trackingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy.property.trackingMode"></a>

```java
public java.lang.String getTrackingMode();
```

- *Type:* java.lang.String

Specifies the key used for connection tracking.

There are two options:
'PER_CONNECTION': The Connection Tracking is performed as per the
Connection Key (default Hash Method) for the specific protocol.

'PER_SESSION': The Connection Tracking is performed as per the
configured Session Affinity. It matches the configured Session Affinity. Default value: "PER_CONNECTION" Possible values: ["PER_CONNECTION", "PER_SESSION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#tracking_mode GoogleComputeRegionBackendService#tracking_mode}

---

### GoogleComputeRegionBackendServiceConsistentHash <a name="GoogleComputeRegionBackendServiceConsistentHash" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceConsistentHash;

GoogleComputeRegionBackendServiceConsistentHash.builder()
//  .httpCookie(GoogleComputeRegionBackendServiceConsistentHashHttpCookie)
//  .httpHeaderName(java.lang.String)
//  .minimumRingSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpHeaderName">httpHeaderName</a></code> | <code>java.lang.String</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.minimumRingSize">minimumRingSize</a></code> | <code>java.lang.Number</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `httpCookie`<sup>Optional</sup> <a name="httpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpCookie"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHashHttpCookie getHttpCookie();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#http_cookie GoogleComputeRegionBackendService#http_cookie}

---

##### `httpHeaderName`<sup>Optional</sup> <a name="httpHeaderName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.httpHeaderName"></a>

```java
public java.lang.String getHttpHeaderName();
```

- *Type:* java.lang.String

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#http_header_name GoogleComputeRegionBackendService#http_header_name}

---

##### `minimumRingSize`<sup>Optional</sup> <a name="minimumRingSize" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash.property.minimumRingSize"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#minimum_ring_size GoogleComputeRegionBackendService#minimum_ring_size}

---

### GoogleComputeRegionBackendServiceConsistentHashHttpCookie <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceConsistentHashHttpCookie;

GoogleComputeRegionBackendServiceConsistentHashHttpCookie.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
//  .ttl(GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.name">name</a></code> | <code>java.lang.String</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.path">path</a></code> | <code>java.lang.String</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#path GoogleComputeRegionBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl getTtl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}

---

### GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl;

GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceFailoverPolicy <a name="GoogleComputeRegionBackendServiceFailoverPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceFailoverPolicy;

GoogleComputeRegionBackendServiceFailoverPolicy.builder()
//  .disableConnectionDrainOnFailover(java.lang.Boolean)
//  .disableConnectionDrainOnFailover(IResolvable)
//  .dropTrafficIfUnhealthy(java.lang.Boolean)
//  .dropTrafficIfUnhealthy(IResolvable)
//  .failoverRatio(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover">disableConnectionDrainOnFailover</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | On failover or failback, this field indicates whether connection drain will be honored. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy">dropTrafficIfUnhealthy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This option is used only when no healthy VMs are detected in the primary and backup instance groups. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.failoverRatio">failoverRatio</a></code> | <code>java.lang.Number</code> | The value of the field must be in [0, 1]. |

---

##### `disableConnectionDrainOnFailover`<sup>Optional</sup> <a name="disableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover"></a>

```java
public java.lang.Object getDisableConnectionDrainOnFailover();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

On failover or failback, this field indicates whether connection drain will be honored.

Setting this to true has the following effect: connections
to the old active pool are not drained. Connections to the new active pool
use the timeout of 10 min (currently fixed). Setting to false has the
following effect: both old and new connections will have a drain timeout
of 10 min.
This can be set to true only if the protocol is TCP.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#disable_connection_drain_on_failover GoogleComputeRegionBackendService#disable_connection_drain_on_failover}

---

##### `dropTrafficIfUnhealthy`<sup>Optional</sup> <a name="dropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy"></a>

```java
public java.lang.Object getDropTrafficIfUnhealthy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This option is used only when no healthy VMs are detected in the primary and backup instance groups.

When set to true, traffic is dropped. When
set to false, new connections are sent across all VMs in the primary group.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#drop_traffic_if_unhealthy GoogleComputeRegionBackendService#drop_traffic_if_unhealthy}

---

##### `failoverRatio`<sup>Optional</sup> <a name="failoverRatio" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy.property.failoverRatio"></a>

```java
public java.lang.Number getFailoverRatio();
```

- *Type:* java.lang.Number

The value of the field must be in [0, 1].

If the ratio of the healthy
VMs in the primary backend is at or below this number, traffic arriving
at the load-balanced IP will be directed to the failover backend.
In case where 'failoverRatio' is not set or all the VMs in the backup
backend are unhealthy, the traffic will be directed back to the primary
backend in the "force" mode, where traffic will be spread to the healthy
VMs with the best effort, or to all VMs when no VM is healthy.
This field is only used with l4 load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#failover_ratio GoogleComputeRegionBackendService#failover_ratio}

---

### GoogleComputeRegionBackendServiceIap <a name="GoogleComputeRegionBackendServiceIap" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceIap;

GoogleComputeRegionBackendServiceIap.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .oauth2ClientId(java.lang.String)
//  .oauth2ClientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the serving infrastructure will authenticate and authorize all incoming requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientId">oauth2ClientId</a></code> | <code>java.lang.String</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>java.lang.String</code> | OAuth2 Client Secret for IAP. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the serving infrastructure will authenticate and authorize all incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#enabled GoogleComputeRegionBackendService#enabled}

---

##### `oauth2ClientId`<sup>Optional</sup> <a name="oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientId"></a>

```java
public java.lang.String getOauth2ClientId();
```

- *Type:* java.lang.String

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#oauth2_client_id GoogleComputeRegionBackendService#oauth2_client_id}

---

##### `oauth2ClientSecret`<sup>Optional</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap.property.oauth2ClientSecret"></a>

```java
public java.lang.String getOauth2ClientSecret();
```

- *Type:* java.lang.String

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#oauth2_client_secret GoogleComputeRegionBackendService#oauth2_client_secret}

---

### GoogleComputeRegionBackendServiceLogConfig <a name="GoogleComputeRegionBackendServiceLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceLogConfig;

GoogleComputeRegionBackendServiceLogConfig.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .sampleRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#enable GoogleComputeRegionBackendService#enable}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#sample_rate GoogleComputeRegionBackendService#sample_rate}

---

### GoogleComputeRegionBackendServiceOutlierDetection <a name="GoogleComputeRegionBackendServiceOutlierDetection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceOutlierDetection;

GoogleComputeRegionBackendServiceOutlierDetection.builder()
//  .baseEjectionTime(GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime)
//  .consecutiveErrors(java.lang.Number)
//  .consecutiveGatewayFailure(java.lang.Number)
//  .enforcingConsecutiveErrors(java.lang.Number)
//  .enforcingConsecutiveGatewayFailure(java.lang.Number)
//  .enforcingSuccessRate(java.lang.Number)
//  .interval(GoogleComputeRegionBackendServiceOutlierDetectionInterval)
//  .maxEjectionPercent(java.lang.Number)
//  .successRateMinimumHosts(java.lang.Number)
//  .successRateRequestVolume(java.lang.Number)
//  .successRateStdevFactor(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors">consecutiveErrors</a></code> | <code>java.lang.Number</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>java.lang.Number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>java.lang.Number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>java.lang.Number</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>java.lang.Number</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>java.lang.Number</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>java.lang.Number</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `baseEjectionTime`<sup>Optional</sup> <a name="baseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime getBaseEjectionTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#base_ejection_time GoogleComputeRegionBackendService#base_ejection_time}

---

##### `consecutiveErrors`<sup>Optional</sup> <a name="consecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```java
public java.lang.Number getConsecutiveErrors();
```

- *Type:* java.lang.Number

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#consecutive_errors GoogleComputeRegionBackendService#consecutive_errors}

---

##### `consecutiveGatewayFailure`<sup>Optional</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```java
public java.lang.Number getConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#consecutive_gateway_failure GoogleComputeRegionBackendService#consecutive_gateway_failure}

---

##### `enforcingConsecutiveErrors`<sup>Optional</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrors();
```

- *Type:* java.lang.Number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#enforcing_consecutive_errors GoogleComputeRegionBackendService#enforcing_consecutive_errors}

---

##### `enforcingConsecutiveGatewayFailure`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#enforcing_consecutive_gateway_failure GoogleComputeRegionBackendService#enforcing_consecutive_gateway_failure}

---

##### `enforcingSuccessRate`<sup>Optional</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```java
public java.lang.Number getEnforcingSuccessRate();
```

- *Type:* java.lang.Number

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#enforcing_success_rate GoogleComputeRegionBackendService#enforcing_success_rate}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.interval"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetectionInterval getInterval();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#interval GoogleComputeRegionBackendService#interval}

---

##### `maxEjectionPercent`<sup>Optional</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```java
public java.lang.Number getMaxEjectionPercent();
```

- *Type:* java.lang.Number

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#max_ejection_percent GoogleComputeRegionBackendService#max_ejection_percent}

---

##### `successRateMinimumHosts`<sup>Optional</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```java
public java.lang.Number getSuccessRateMinimumHosts();
```

- *Type:* java.lang.Number

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#success_rate_minimum_hosts GoogleComputeRegionBackendService#success_rate_minimum_hosts}

---

##### `successRateRequestVolume`<sup>Optional</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```java
public java.lang.Number getSuccessRateRequestVolume();
```

- *Type:* java.lang.Number

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#success_rate_request_volume GoogleComputeRegionBackendService#success_rate_request_volume}

---

##### `successRateStdevFactor`<sup>Optional</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#success_rate_stdev_factor GoogleComputeRegionBackendService#success_rate_stdev_factor}

---

### GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime <a name="GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime;

GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceOutlierDetectionInterval <a name="GoogleComputeRegionBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceOutlierDetectionInterval;

GoogleComputeRegionBackendServiceOutlierDetectionInterval.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceStrongSessionAffinityCookie <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie;

GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
//  .ttl(GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.name">name</a></code> | <code>java.lang.String</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.path">path</a></code> | <code>java.lang.String</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#path GoogleComputeRegionBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie.property.ttl"></a>

```java
public GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl getTtl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}

---

### GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl;

GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}

---

### GoogleComputeRegionBackendServiceSubsetting <a name="GoogleComputeRegionBackendServiceSubsetting" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceSubsetting;

GoogleComputeRegionBackendServiceSubsetting.builder()
    .policy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting.property.policy">policy</a></code> | <code>java.lang.String</code> | The algorithm used for subsetting. Possible values: ["CONSISTENT_HASH_SUBSETTING"]. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

The algorithm used for subsetting. Possible values: ["CONSISTENT_HASH_SUBSETTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#policy GoogleComputeRegionBackendService#policy}

---

### GoogleComputeRegionBackendServiceTimeouts <a name="GoogleComputeRegionBackendServiceTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceTimeouts;

GoogleComputeRegionBackendServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#create GoogleComputeRegionBackendService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#delete GoogleComputeRegionBackendService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#update GoogleComputeRegionBackendService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#create GoogleComputeRegionBackendService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#delete GoogleComputeRegionBackendService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_region_backend_service#update GoogleComputeRegionBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionBackendServiceBackendList <a name="GoogleComputeRegionBackendServiceBackendList" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceBackendList;

new GoogleComputeRegionBackendServiceBackendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.get"></a>

```java
public GoogleComputeRegionBackendServiceBackendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>>

---


### GoogleComputeRegionBackendServiceBackendOutputReference <a name="GoogleComputeRegionBackendServiceBackendOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceBackendOutputReference;

new GoogleComputeRegionBackendServiceBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetBalancingMode">resetBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler">resetCapacityScaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetFailover">resetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">resetMaxConnectionsPerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">resetMaxConnectionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">resetMaxRatePerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance">resetMaxRatePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization">resetMaxUtilization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBalancingMode` <a name="resetBalancingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetBalancingMode"></a>

```java
public void resetBalancingMode()
```

##### `resetCapacityScaler` <a name="resetCapacityScaler" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```java
public void resetCapacityScaler()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFailover` <a name="resetFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetFailover"></a>

```java
public void resetFailover()
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnections"></a>

```java
public void resetMaxConnections()
```

##### `resetMaxConnectionsPerEndpoint` <a name="resetMaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```java
public void resetMaxConnectionsPerEndpoint()
```

##### `resetMaxConnectionsPerInstance` <a name="resetMaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```java
public void resetMaxConnectionsPerInstance()
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRate"></a>

```java
public void resetMaxRate()
```

##### `resetMaxRatePerEndpoint` <a name="resetMaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```java
public void resetMaxRatePerEndpoint()
```

##### `resetMaxRatePerInstance` <a name="resetMaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```java
public void resetMaxRatePerInstance()
```

##### `resetMaxUtilization` <a name="resetMaxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```java
public void resetMaxUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput">balancingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput">capacityScalerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failoverInput">failoverInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">maxConnectionsPerEndpointInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">maxConnectionsPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">maxRatePerEndpointInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">maxRatePerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput">maxUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode">balancingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler">capacityScaler</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failover">failover</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization">maxUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `balancingModeInput`<sup>Optional</sup> <a name="balancingModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```java
public java.lang.String getBalancingModeInput();
```

- *Type:* java.lang.String

---

##### `capacityScalerInput`<sup>Optional</sup> <a name="capacityScalerInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```java
public java.lang.Number getCapacityScalerInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failoverInput"></a>

```java
public java.lang.Object getFailoverInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```java
public java.lang.Number getMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerEndpointInput`<sup>Optional</sup> <a name="maxConnectionsPerEndpointInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpointInput();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerInstanceInput`<sup>Optional</sup> <a name="maxConnectionsPerInstanceInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```java
public java.lang.Number getMaxConnectionsPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRateInput"></a>

```java
public java.lang.Number getMaxRateInput();
```

- *Type:* java.lang.Number

---

##### `maxRatePerEndpointInput`<sup>Optional</sup> <a name="maxRatePerEndpointInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```java
public java.lang.Number getMaxRatePerEndpointInput();
```

- *Type:* java.lang.Number

---

##### `maxRatePerInstanceInput`<sup>Optional</sup> <a name="maxRatePerInstanceInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```java
public java.lang.Number getMaxRatePerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `maxUtilizationInput`<sup>Optional</sup> <a name="maxUtilizationInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```java
public java.lang.Number getMaxUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `balancingMode`<sup>Required</sup> <a name="balancingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode"></a>

```java
public java.lang.String getBalancingMode();
```

- *Type:* java.lang.String

---

##### `capacityScaler`<sup>Required</sup> <a name="capacityScaler" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler"></a>

```java
public java.lang.Number getCapacityScaler();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.failover"></a>

```java
public java.lang.Object getFailover();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerEndpoint`<sup>Required</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpoint();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerInstance`<sup>Required</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```java
public java.lang.Number getMaxConnectionsPerInstance();
```

- *Type:* java.lang.Number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

---

##### `maxRatePerEndpoint`<sup>Required</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```java
public java.lang.Number getMaxRatePerEndpoint();
```

- *Type:* java.lang.Number

---

##### `maxRatePerInstance`<sup>Required</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```java
public java.lang.Number getMaxRatePerInstance();
```

- *Type:* java.lang.Number

---

##### `maxUtilization`<sup>Required</sup> <a name="maxUtilization" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization"></a>

```java
public java.lang.Number getMaxUtilization();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceBackend">GoogleComputeRegionBackendServiceBackend</a>

---


### GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference;

new GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">resetIncludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">resetIncludeNamedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">resetIncludeProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">resetIncludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">resetQueryStringBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">resetQueryStringWhitelist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeHost` <a name="resetIncludeHost" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```java
public void resetIncludeHost()
```

##### `resetIncludeNamedCookies` <a name="resetIncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```java
public void resetIncludeNamedCookies()
```

##### `resetIncludeProtocol` <a name="resetIncludeProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```java
public void resetIncludeProtocol()
```

##### `resetIncludeQueryString` <a name="resetIncludeQueryString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```java
public void resetIncludeQueryString()
```

##### `resetQueryStringBlacklist` <a name="resetQueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```java
public void resetQueryStringBlacklist()
```

##### `resetQueryStringWhitelist` <a name="resetQueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```java
public void resetQueryStringWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">includeHostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">includeNamedCookiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">includeProtocolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">includeQueryStringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">queryStringBlacklistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">queryStringWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">includeHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">includeNamedCookies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">includeProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">includeQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeHostInput`<sup>Optional</sup> <a name="includeHostInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```java
public java.lang.Object getIncludeHostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeNamedCookiesInput`<sup>Optional</sup> <a name="includeNamedCookiesInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeProtocolInput`<sup>Optional</sup> <a name="includeProtocolInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```java
public java.lang.Object getIncludeProtocolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeQueryStringInput`<sup>Optional</sup> <a name="includeQueryStringInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```java
public java.lang.Object getIncludeQueryStringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryStringBlacklistInput`<sup>Optional</sup> <a name="queryStringBlacklistInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringWhitelistInput`<sup>Optional</sup> <a name="queryStringWhitelistInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeHost`<sup>Required</sup> <a name="includeHost" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```java
public java.lang.Object getIncludeHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeNamedCookies`<sup>Required</sup> <a name="includeNamedCookies" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeProtocol`<sup>Required</sup> <a name="includeProtocol" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```java
public java.lang.Object getIncludeProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeQueryString`<sup>Required</sup> <a name="includeQueryString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```java
public java.lang.Object getIncludeQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryStringBlacklist`<sup>Required</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringWhitelist`<sup>Required</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList <a name="GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList;

new GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>>

---


### GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference;

new GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```java
public void resetCode()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>

---


### GoogleComputeRegionBackendServiceCdnPolicyOutputReference <a name="GoogleComputeRegionBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCdnPolicyOutputReference;

new GoogleComputeRegionBackendServiceCdnPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">putNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale">resetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">resetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```java
public void putCacheKeyPolicy(GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `putNegativeCachingPolicy` <a name="putNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```java
public void putNegativeCachingPolicy(IResolvable OR java.util.List<GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>>

---

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```java
public void resetCacheKeyPolicy()
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```java
public void resetCacheMode()
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```java
public void resetClientTtl()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```java
public void resetNegativeCaching()
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```java
public void resetNegativeCachingPolicy()
```

##### `resetServeWhileStale` <a name="resetServeWhileStale" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```java
public void resetServeWhileStale()
```

##### `resetSignedUrlCacheMaxAgeSec` <a name="resetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```java
public void resetSignedUrlCacheMaxAgeSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">serveWhileStaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signedUrlCacheMaxAgeSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale">serveWhileStale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList getNegativeCachingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy getCacheKeyPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```java
public java.lang.String getCacheModeInput();
```

- *Type:* java.lang.String

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```java
public java.lang.Number getClientTtlInput();
```

- *Type:* java.lang.Number

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```java
public java.lang.Object getNegativeCachingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```java
public java.lang.Object getNegativeCachingPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>>

---

##### `serveWhileStaleInput`<sup>Optional</sup> <a name="serveWhileStaleInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```java
public java.lang.Number getServeWhileStaleInput();
```

- *Type:* java.lang.Number

---

##### `signedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSecInput();
```

- *Type:* java.lang.Number

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```java
public java.lang.Number getClientTtl();
```

- *Type:* java.lang.Number

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serveWhileStale`<sup>Required</sup> <a name="serveWhileStale" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```java
public java.lang.Number getServeWhileStale();
```

- *Type:* java.lang.Number

---

##### `signedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceCdnPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCdnPolicy">GoogleComputeRegionBackendServiceCdnPolicy</a>

---


### GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference <a name="GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference;

new GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---


### GoogleComputeRegionBackendServiceCircuitBreakersOutputReference <a name="GoogleComputeRegionBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference;

new GoogleComputeRegionBackendServiceCircuitBreakersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.putConnectTimeout">putConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">resetMaxPendingRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests">resetMaxRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">resetMaxRequestsPerConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectTimeout` <a name="putConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.putConnectTimeout"></a>

```java
public void putConnectTimeout(GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.putConnectTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```java
public void resetMaxConnections()
```

##### `resetMaxPendingRequests` <a name="resetMaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```java
public void resetMaxPendingRequests()
```

##### `resetMaxRequests` <a name="resetMaxRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```java
public void resetMaxRequests()
```

##### `resetMaxRequestsPerConnection` <a name="resetMaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```java
public void resetMaxRequestsPerConnection()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout">connectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">maxPendingRequestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">maxRequestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">maxRequestsPerConnectionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout"></a>

```java
public GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference getConnectTimeout();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference</a>

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput"></a>

```java
public GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout getConnectTimeoutInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```java
public java.lang.Number getMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxPendingRequestsInput`<sup>Optional</sup> <a name="maxPendingRequestsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```java
public java.lang.Number getMaxPendingRequestsInput();
```

- *Type:* java.lang.Number

---

##### `maxRequestsInput`<sup>Optional</sup> <a name="maxRequestsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```java
public java.lang.Number getMaxRequestsInput();
```

- *Type:* java.lang.Number

---

##### `maxRequestsPerConnectionInput`<sup>Optional</sup> <a name="maxRequestsPerConnectionInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```java
public java.lang.Number getMaxRequestsPerConnectionInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```java
public java.lang.Number getMaxPendingRequests();
```

- *Type:* java.lang.Number

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

---

##### `maxRequestsPerConnection`<sup>Required</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```java
public java.lang.Number getMaxRequestsPerConnection();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceCircuitBreakers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceCircuitBreakers">GoogleComputeRegionBackendServiceCircuitBreakers</a>

---


### GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference <a name="GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference;

new GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetConnectionPersistenceOnUnhealthyBackends">resetConnectionPersistenceOnUnhealthyBackends</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetEnableStrongAffinity">resetEnableStrongAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetIdleTimeoutSec">resetIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetTrackingMode">resetTrackingMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionPersistenceOnUnhealthyBackends` <a name="resetConnectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetConnectionPersistenceOnUnhealthyBackends"></a>

```java
public void resetConnectionPersistenceOnUnhealthyBackends()
```

##### `resetEnableStrongAffinity` <a name="resetEnableStrongAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetEnableStrongAffinity"></a>

```java
public void resetEnableStrongAffinity()
```

##### `resetIdleTimeoutSec` <a name="resetIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetIdleTimeoutSec"></a>

```java
public void resetIdleTimeoutSec()
```

##### `resetTrackingMode` <a name="resetTrackingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resetTrackingMode"></a>

```java
public void resetTrackingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackendsInput">connectionPersistenceOnUnhealthyBackendsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinityInput">enableStrongAffinityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSecInput">idleTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingModeInput">trackingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends">connectionPersistenceOnUnhealthyBackends</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity">enableStrongAffinity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec">idleTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode">trackingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionPersistenceOnUnhealthyBackendsInput`<sup>Optional</sup> <a name="connectionPersistenceOnUnhealthyBackendsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackendsInput"></a>

```java
public java.lang.String getConnectionPersistenceOnUnhealthyBackendsInput();
```

- *Type:* java.lang.String

---

##### `enableStrongAffinityInput`<sup>Optional</sup> <a name="enableStrongAffinityInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinityInput"></a>

```java
public java.lang.Object getEnableStrongAffinityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idleTimeoutSecInput`<sup>Optional</sup> <a name="idleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSecInput"></a>

```java
public java.lang.Number getIdleTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `trackingModeInput`<sup>Optional</sup> <a name="trackingModeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingModeInput"></a>

```java
public java.lang.String getTrackingModeInput();
```

- *Type:* java.lang.String

---

##### `connectionPersistenceOnUnhealthyBackends`<sup>Required</sup> <a name="connectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends"></a>

```java
public java.lang.String getConnectionPersistenceOnUnhealthyBackends();
```

- *Type:* java.lang.String

---

##### `enableStrongAffinity`<sup>Required</sup> <a name="enableStrongAffinity" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity"></a>

```java
public java.lang.Object getEnableStrongAffinity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idleTimeoutSec`<sup>Required</sup> <a name="idleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec"></a>

```java
public java.lang.Number getIdleTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `trackingMode`<sup>Required</sup> <a name="trackingMode" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode"></a>

```java
public java.lang.String getTrackingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceConnectionTrackingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConnectionTrackingPolicy">GoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---


### GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference;

new GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```java
public void putTtl(GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference getTtl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl getTtlInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHashHttpCookie getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---


### GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference;

new GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---


### GoogleComputeRegionBackendServiceConsistentHashOutputReference <a name="GoogleComputeRegionBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceConsistentHashOutputReference;

new GoogleComputeRegionBackendServiceConsistentHashOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie">putHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie">resetHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName">resetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize">resetMinimumRingSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpCookie` <a name="putHttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```java
public void putHttpCookie(GoogleComputeRegionBackendServiceConsistentHashHttpCookie value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---

##### `resetHttpCookie` <a name="resetHttpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```java
public void resetHttpCookie()
```

##### `resetHttpHeaderName` <a name="resetHttpHeaderName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```java
public void resetHttpHeaderName()
```

##### `resetMinimumRingSize` <a name="resetMinimumRingSize" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```java
public void resetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput">httpCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">httpHeaderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">minimumRingSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize">minimumRingSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpCookie`<sup>Required</sup> <a name="httpCookie" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference getHttpCookie();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `httpCookieInput`<sup>Optional</sup> <a name="httpCookieInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHashHttpCookie getHttpCookieInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashHttpCookie">GoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---

##### `httpHeaderNameInput`<sup>Optional</sup> <a name="httpHeaderNameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```java
public java.lang.String getHttpHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `minimumRingSizeInput`<sup>Optional</sup> <a name="minimumRingSizeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```java
public java.lang.Number getMinimumRingSizeInput();
```

- *Type:* java.lang.Number

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```java
public java.lang.String getHttpHeaderName();
```

- *Type:* java.lang.String

---

##### `minimumRingSize`<sup>Required</sup> <a name="minimumRingSize" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```java
public java.lang.Number getMinimumRingSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceConsistentHash getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceConsistentHash">GoogleComputeRegionBackendServiceConsistentHash</a>

---


### GoogleComputeRegionBackendServiceFailoverPolicyOutputReference <a name="GoogleComputeRegionBackendServiceFailoverPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference;

new GoogleComputeRegionBackendServiceFailoverPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover">resetDisableConnectionDrainOnFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy">resetDropTrafficIfUnhealthy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio">resetFailoverRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableConnectionDrainOnFailover` <a name="resetDisableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover"></a>

```java
public void resetDisableConnectionDrainOnFailover()
```

##### `resetDropTrafficIfUnhealthy` <a name="resetDropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy"></a>

```java
public void resetDropTrafficIfUnhealthy()
```

##### `resetFailoverRatio` <a name="resetFailoverRatio" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio"></a>

```java
public void resetFailoverRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput">disableConnectionDrainOnFailoverInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput">dropTrafficIfUnhealthyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput">failoverRatioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover">disableConnectionDrainOnFailover</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy">dropTrafficIfUnhealthy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio">failoverRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableConnectionDrainOnFailoverInput`<sup>Optional</sup> <a name="disableConnectionDrainOnFailoverInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput"></a>

```java
public java.lang.Object getDisableConnectionDrainOnFailoverInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dropTrafficIfUnhealthyInput`<sup>Optional</sup> <a name="dropTrafficIfUnhealthyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput"></a>

```java
public java.lang.Object getDropTrafficIfUnhealthyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failoverRatioInput`<sup>Optional</sup> <a name="failoverRatioInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput"></a>

```java
public java.lang.Number getFailoverRatioInput();
```

- *Type:* java.lang.Number

---

##### `disableConnectionDrainOnFailover`<sup>Required</sup> <a name="disableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover"></a>

```java
public java.lang.Object getDisableConnectionDrainOnFailover();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dropTrafficIfUnhealthy`<sup>Required</sup> <a name="dropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy"></a>

```java
public java.lang.Object getDropTrafficIfUnhealthy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failoverRatio`<sup>Required</sup> <a name="failoverRatio" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio"></a>

```java
public java.lang.Number getFailoverRatio();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceFailoverPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceFailoverPolicy">GoogleComputeRegionBackendServiceFailoverPolicy</a>

---


### GoogleComputeRegionBackendServiceIapOutputReference <a name="GoogleComputeRegionBackendServiceIapOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceIapOutputReference;

new GoogleComputeRegionBackendServiceIapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientId">resetOauth2ClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientSecret">resetOauth2ClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauth2ClientId` <a name="resetOauth2ClientId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientId"></a>

```java
public void resetOauth2ClientId()
```

##### `resetOauth2ClientSecret` <a name="resetOauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.resetOauth2ClientSecret"></a>

```java
public void resetOauth2ClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">oauth2ClientSecretSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput">oauth2ClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput">oauth2ClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId">oauth2ClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecretSha256`<sup>Required</sup> <a name="oauth2ClientSecretSha256" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```java
public java.lang.String getOauth2ClientSecretSha256();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauth2ClientIdInput`<sup>Optional</sup> <a name="oauth2ClientIdInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```java
public java.lang.String getOauth2ClientIdInput();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecretInput`<sup>Optional</sup> <a name="oauth2ClientSecretInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```java
public java.lang.String getOauth2ClientSecretInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```java
public java.lang.String getOauth2ClientId();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecret`<sup>Required</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```java
public java.lang.String getOauth2ClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIapOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceIap getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceIap">GoogleComputeRegionBackendServiceIap</a>

---


### GoogleComputeRegionBackendServiceLogConfigOutputReference <a name="GoogleComputeRegionBackendServiceLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceLogConfigOutputReference;

new GoogleComputeRegionBackendServiceLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```java
public void resetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```java
public java.lang.Number getSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceLogConfig">GoogleComputeRegionBackendServiceLogConfig</a>

---


### GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference;

new GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference <a name="GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference;

new GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetectionInterval getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---


### GoogleComputeRegionBackendServiceOutlierDetectionOutputReference <a name="GoogleComputeRegionBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference;

new GoogleComputeRegionBackendServiceOutlierDetectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">putBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval">putInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">resetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">resetConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">resetConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">resetEnforcingConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">resetEnforcingConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">resetEnforcingSuccessRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">resetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">resetSuccessRateMinimumHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">resetSuccessRateRequestVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">resetSuccessRateStdevFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseEjectionTime` <a name="putBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```java
public void putBaseEjectionTime(GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `putInterval` <a name="putInterval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```java
public void putInterval(GoogleComputeRegionBackendServiceOutlierDetectionInterval value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---

##### `resetBaseEjectionTime` <a name="resetBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```java
public void resetBaseEjectionTime()
```

##### `resetConsecutiveErrors` <a name="resetConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```java
public void resetConsecutiveErrors()
```

##### `resetConsecutiveGatewayFailure` <a name="resetConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```java
public void resetConsecutiveGatewayFailure()
```

##### `resetEnforcingConsecutiveErrors` <a name="resetEnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```java
public void resetEnforcingConsecutiveErrors()
```

##### `resetEnforcingConsecutiveGatewayFailure` <a name="resetEnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```java
public void resetEnforcingConsecutiveGatewayFailure()
```

##### `resetEnforcingSuccessRate` <a name="resetEnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```java
public void resetEnforcingSuccessRate()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetMaxEjectionPercent` <a name="resetMaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```java
public void resetMaxEjectionPercent()
```

##### `resetSuccessRateMinimumHosts` <a name="resetSuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```java
public void resetSuccessRateMinimumHosts()
```

##### `resetSuccessRateRequestVolume` <a name="resetSuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```java
public void resetSuccessRateRequestVolume()
```

##### `resetSuccessRateStdevFactor` <a name="resetSuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```java
public void resetSuccessRateStdevFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">baseEjectionTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">consecutiveErrorsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">consecutiveGatewayFailureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">enforcingConsecutiveErrorsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">enforcingConsecutiveGatewayFailureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">enforcingSuccessRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput">intervalInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">maxEjectionPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">successRateMinimumHostsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">successRateRequestVolumeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">successRateStdevFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">consecutiveErrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseEjectionTime`<sup>Required</sup> <a name="baseEjectionTime" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference getBaseEjectionTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference getInterval();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `baseEjectionTimeInput`<sup>Optional</sup> <a name="baseEjectionTimeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime getBaseEjectionTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `consecutiveErrorsInput`<sup>Optional</sup> <a name="consecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```java
public java.lang.Number getConsecutiveErrorsInput();
```

- *Type:* java.lang.Number

---

##### `consecutiveGatewayFailureInput`<sup>Optional</sup> <a name="consecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```java
public java.lang.Number getConsecutiveGatewayFailureInput();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveErrorsInput`<sup>Optional</sup> <a name="enforcingConsecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrorsInput();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailureInput();
```

- *Type:* java.lang.Number

---

##### `enforcingSuccessRateInput`<sup>Optional</sup> <a name="enforcingSuccessRateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```java
public java.lang.Number getEnforcingSuccessRateInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetectionInterval getIntervalInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionInterval">GoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---

##### `maxEjectionPercentInput`<sup>Optional</sup> <a name="maxEjectionPercentInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```java
public java.lang.Number getMaxEjectionPercentInput();
```

- *Type:* java.lang.Number

---

##### `successRateMinimumHostsInput`<sup>Optional</sup> <a name="successRateMinimumHostsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```java
public java.lang.Number getSuccessRateMinimumHostsInput();
```

- *Type:* java.lang.Number

---

##### `successRateRequestVolumeInput`<sup>Optional</sup> <a name="successRateRequestVolumeInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```java
public java.lang.Number getSuccessRateRequestVolumeInput();
```

- *Type:* java.lang.Number

---

##### `successRateStdevFactorInput`<sup>Optional</sup> <a name="successRateStdevFactorInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```java
public java.lang.Number getSuccessRateStdevFactorInput();
```

- *Type:* java.lang.Number

---

##### `consecutiveErrors`<sup>Required</sup> <a name="consecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```java
public java.lang.Number getConsecutiveErrors();
```

- *Type:* java.lang.Number

---

##### `consecutiveGatewayFailure`<sup>Required</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```java
public java.lang.Number getConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveErrors`<sup>Required</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrors();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

---

##### `enforcingSuccessRate`<sup>Required</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```java
public java.lang.Number getEnforcingSuccessRate();
```

- *Type:* java.lang.Number

---

##### `maxEjectionPercent`<sup>Required</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```java
public java.lang.Number getMaxEjectionPercent();
```

- *Type:* java.lang.Number

---

##### `successRateMinimumHosts`<sup>Required</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```java
public java.lang.Number getSuccessRateMinimumHosts();
```

- *Type:* java.lang.Number

---

##### `successRateRequestVolume`<sup>Required</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```java
public java.lang.Number getSuccessRateRequestVolume();
```

- *Type:* java.lang.Number

---

##### `successRateStdevFactor`<sup>Required</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```java
public java.lang.Number getSuccessRateStdevFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceOutlierDetection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceOutlierDetection">GoogleComputeRegionBackendServiceOutlierDetection</a>

---


### GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference;

new GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.putTtl"></a>

```java
public void putTtl(GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```java
public GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference getTtl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput"></a>

```java
public GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl getTtlInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceStrongSessionAffinityCookie getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookie">GoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---


### GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference;

new GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---


### GoogleComputeRegionBackendServiceSubsettingOutputReference <a name="GoogleComputeRegionBackendServiceSubsettingOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceSubsettingOutputReference;

new GoogleComputeRegionBackendServiceSubsettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionBackendServiceSubsetting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceSubsetting">GoogleComputeRegionBackendServiceSubsetting</a>

---


### GoogleComputeRegionBackendServiceTimeoutsOutputReference <a name="GoogleComputeRegionBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_backend_service.GoogleComputeRegionBackendServiceTimeoutsOutputReference;

new GoogleComputeRegionBackendServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionBackendService.GoogleComputeRegionBackendServiceTimeouts">GoogleComputeRegionBackendServiceTimeouts</a>

---



