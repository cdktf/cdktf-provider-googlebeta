# `googleNetworkServicesEdgeCacheOrigin` Submodule <a name="`googleNetworkServicesEdgeCacheOrigin` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesEdgeCacheOrigin <a name="GoogleNetworkServicesEdgeCacheOrigin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin google_network_services_edge_cache_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  origin_address: str,
  aws_v4_authentication: GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication = None,
  description: str = None,
  failover_origin: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  max_attempts: typing.Union[int, float] = None,
  origin_override_action: GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction = None,
  origin_redirect: GoogleNetworkServicesEdgeCacheOriginOriginRedirect = None,
  port: typing.Union[int, float] = None,
  project: str = None,
  protocol: str = None,
  retry_conditions: typing.List[str] = None,
  timeout: GoogleNetworkServicesEdgeCacheOriginTimeout = None,
  timeouts: GoogleNetworkServicesEdgeCacheOriginTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.originAddress">origin_address</a></code> | <code>str</code> | A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.awsV4Authentication">aws_v4_authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.failoverOrigin">failover_origin</a></code> | <code>str</code> | The Origin resource to try when the current origin cannot be reached. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#id GoogleNetworkServicesEdgeCacheOrigin#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of attempts to cache fill from this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.originOverrideAction">origin_override_action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | origin_override_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.originRedirect">origin_redirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a></code> | origin_redirect block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port to connect to the origin on. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#project GoogleNetworkServicesEdgeCacheOrigin#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The protocol to use to connect to the configured origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.retryConditions">retry_conditions</a></code> | <code>typing.List[str]</code> | Specifies one or more retry conditions for the configured origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a></code> | timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#name GoogleNetworkServicesEdgeCacheOrigin#name}

---

##### `origin_address`<sup>Required</sup> <a name="origin_address" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.originAddress"></a>

- *Type:* str

A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.

This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname

When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#origin_address GoogleNetworkServicesEdgeCacheOrigin#origin_address}

---

##### `aws_v4_authentication`<sup>Optional</sup> <a name="aws_v4_authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.awsV4Authentication"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#aws_v4_authentication GoogleNetworkServicesEdgeCacheOrigin#aws_v4_authentication}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#description GoogleNetworkServicesEdgeCacheOrigin#description}

---

##### `failover_origin`<sup>Optional</sup> <a name="failover_origin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.failoverOrigin"></a>

- *Type:* str

The Origin resource to try when the current origin cannot be reached.

After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.

The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#failover_origin GoogleNetworkServicesEdgeCacheOrigin#failover_origin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#id GoogleNetworkServicesEdgeCacheOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#labels GoogleNetworkServicesEdgeCacheOrigin#labels}

---

##### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of attempts to cache fill from this origin.

Another attempt is made when a cache fill fails with one of the retryConditions.

Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,
retryConditions and failoverOrigin to control its own cache fill failures.

The total number of allowed attempts to cache fill across this and failover origins is limited to four.
The total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.

The last valid, non-retried response from all origins will be returned to the client.
If no origin returns a valid response, an HTTP 502 will be returned to the client.

Defaults to 1. Must be a value greater than 0 and less than 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#max_attempts GoogleNetworkServicesEdgeCacheOrigin#max_attempts}

---

##### `origin_override_action`<sup>Optional</sup> <a name="origin_override_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.originOverrideAction"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a>

origin_override_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#origin_override_action GoogleNetworkServicesEdgeCacheOrigin#origin_override_action}

---

##### `origin_redirect`<sup>Optional</sup> <a name="origin_redirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.originRedirect"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a>

origin_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#origin_redirect GoogleNetworkServicesEdgeCacheOrigin#origin_redirect}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port to connect to the origin on.

Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#port GoogleNetworkServicesEdgeCacheOrigin#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#project GoogleNetworkServicesEdgeCacheOrigin#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.protocol"></a>

- *Type:* str

The protocol to use to connect to the configured origin.

Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.

When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#protocol GoogleNetworkServicesEdgeCacheOrigin#protocol}

---

##### `retry_conditions`<sup>Optional</sup> <a name="retry_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.retryConditions"></a>

- *Type:* typing.List[str]

Specifies one or more retry conditions for the configured origin.

If the failure mode during a connection attempt to the origin matches the configured retryCondition(s),
the origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.

The default retryCondition is "CONNECT_FAILURE".

retryConditions apply to this origin, and not subsequent failoverOrigin(s),
which may specify their own retryConditions and maxAttempts.

Valid values are:

* CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.
* HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.
* GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.
* RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)
* NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
* FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden). Possible values: ["CONNECT_FAILURE", "HTTP_5XX", "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND", "FORBIDDEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#retry_conditions GoogleNetworkServicesEdgeCacheOrigin#retry_conditions}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.timeout"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#timeout GoogleNetworkServicesEdgeCacheOrigin#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#timeouts GoogleNetworkServicesEdgeCacheOrigin#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putAwsV4Authentication">put_aws_v4_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginOverrideAction">put_origin_override_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginRedirect">put_origin_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeout">put_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetAwsV4Authentication">reset_aws_v4_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetFailoverOrigin">reset_failover_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetMaxAttempts">reset_max_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOriginOverrideAction">reset_origin_override_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOriginRedirect">reset_origin_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetRetryConditions">reset_retry_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_v4_authentication` <a name="put_aws_v4_authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putAwsV4Authentication"></a>

```python
def put_aws_v4_authentication(
  access_key_id: str,
  origin_region: str,
  secret_access_key_version: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putAwsV4Authentication.parameter.accessKeyId"></a>

- *Type:* str

The access key ID your origin uses to identify the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#access_key_id GoogleNetworkServicesEdgeCacheOrigin#access_key_id}

---

###### `origin_region`<sup>Required</sup> <a name="origin_region" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putAwsV4Authentication.parameter.originRegion"></a>

- *Type:* str

The name of the AWS region that your origin is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#origin_region GoogleNetworkServicesEdgeCacheOrigin#origin_region}

---

###### `secret_access_key_version`<sup>Required</sup> <a name="secret_access_key_version" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putAwsV4Authentication.parameter.secretAccessKeyVersion"></a>

- *Type:* str

The Secret Manager secret version of the secret access key used by your origin.

This is the resource name of the secret version in the format 'projects/* /secrets/* /versions/*' where the '*' values are replaced by the project, secret, and version you require.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#secret_access_key_version GoogleNetworkServicesEdgeCacheOrigin#secret_access_key_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_origin_override_action` <a name="put_origin_override_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginOverrideAction"></a>

```python
def put_origin_override_action(
  header_action: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction = None,
  url_rewrite: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite = None
) -> None
```

###### `header_action`<sup>Optional</sup> <a name="header_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginOverrideAction.parameter.headerAction"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#header_action GoogleNetworkServicesEdgeCacheOrigin#header_action}

---

###### `url_rewrite`<sup>Optional</sup> <a name="url_rewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginOverrideAction.parameter.urlRewrite"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#url_rewrite GoogleNetworkServicesEdgeCacheOrigin#url_rewrite}

---

##### `put_origin_redirect` <a name="put_origin_redirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginRedirect"></a>

```python
def put_origin_redirect(
  redirect_conditions: typing.List[str] = None
) -> None
```

###### `redirect_conditions`<sup>Optional</sup> <a name="redirect_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginRedirect.parameter.redirectConditions"></a>

- *Type:* typing.List[str]

The set of redirect response codes that the CDN follows. Values of [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions) are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#redirect_conditions GoogleNetworkServicesEdgeCacheOrigin#redirect_conditions}

---

##### `put_timeout` <a name="put_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeout"></a>

```python
def put_timeout(
  connect_timeout: str = None,
  max_attempts_timeout: str = None,
  read_timeout: str = None,
  response_timeout: str = None
) -> None
```

###### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeout.parameter.connectTimeout"></a>

- *Type:* str

The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment.

Defaults to 5 seconds. The timeout must be a value between 1s and 15s.

The connectTimeout capped by the deadline set by the request's maxAttemptsTimeout.  The last connection attempt may have a smaller connectTimeout in order to adhere to the overall maxAttemptsTimeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#connect_timeout GoogleNetworkServicesEdgeCacheOrigin#connect_timeout}

---

###### `max_attempts_timeout`<sup>Optional</sup> <a name="max_attempts_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeout.parameter.maxAttemptsTimeout"></a>

- *Type:* str

The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client.

A HTTP 504 will be returned if the timeout is reached before a response is returned.

Defaults to 15 seconds. The timeout must be a value between 1s and 30s.

If a failoverOrigin is specified, the maxAttemptsTimeout of the first configured origin sets the deadline for all connection attempts across all failoverOrigins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#max_attempts_timeout GoogleNetworkServicesEdgeCacheOrigin#max_attempts_timeout}

---

###### `read_timeout`<sup>Optional</sup> <a name="read_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeout.parameter.readTimeout"></a>

- *Type:* str

The maximum duration to wait between reads of a single HTTP connection/stream.

Defaults to 15 seconds.  The timeout must be a value between 1s and 30s.

The readTimeout is capped by the responseTimeout.  All reads of the HTTP connection/stream must be completed by the deadline set by the responseTimeout.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#read_timeout GoogleNetworkServicesEdgeCacheOrigin#read_timeout}

---

###### `response_timeout`<sup>Optional</sup> <a name="response_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeout.parameter.responseTimeout"></a>

- *Type:* str

The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream.

Defaults to 30 seconds. The timeout must be a value between 1s and 120s.

The responseTimeout starts after the connection has been established.

This also applies to HTTP Chunked Transfer Encoding responses, and/or when an open-ended Range request is made to the origin. Origins that take longer to write additional bytes to the response than the configured responseTimeout will result in an error being returned to the client.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#response_timeout GoogleNetworkServicesEdgeCacheOrigin#response_timeout}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#create GoogleNetworkServicesEdgeCacheOrigin#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#delete GoogleNetworkServicesEdgeCacheOrigin#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#update GoogleNetworkServicesEdgeCacheOrigin#update}.

---

##### `reset_aws_v4_authentication` <a name="reset_aws_v4_authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetAwsV4Authentication"></a>

```python
def reset_aws_v4_authentication() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_failover_origin` <a name="reset_failover_origin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetFailoverOrigin"></a>

```python
def reset_failover_origin() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_max_attempts` <a name="reset_max_attempts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetMaxAttempts"></a>

```python
def reset_max_attempts() -> None
```

##### `reset_origin_override_action` <a name="reset_origin_override_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOriginOverrideAction"></a>

```python
def reset_origin_override_action() -> None
```

##### `reset_origin_redirect` <a name="reset_origin_redirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOriginRedirect"></a>

```python
def reset_origin_redirect() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_retry_conditions` <a name="reset_retry_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetRetryConditions"></a>

```python
def reset_retry_conditions() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheOrigin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesEdgeCacheOrigin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesEdgeCacheOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesEdgeCacheOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.awsV4Authentication">aws_v4_authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference">GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originOverrideAction">origin_override_action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originRedirect">origin_redirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference">GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.awsV4AuthenticationInput">aws_v4_authentication_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.failoverOriginInput">failover_origin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originAddressInput">origin_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originOverrideActionInput">origin_override_action_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originRedirectInput">origin_redirect_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.retryConditionsInput">retry_conditions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeoutInput">timeout_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.failoverOrigin">failover_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originAddress">origin_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.retryConditions">retry_conditions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_v4_authentication`<sup>Required</sup> <a name="aws_v4_authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.awsV4Authentication"></a>

```python
aws_v4_authentication: GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference">GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `origin_override_action`<sup>Required</sup> <a name="origin_override_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originOverrideAction"></a>

```python
origin_override_action: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference</a>

---

##### `origin_redirect`<sup>Required</sup> <a name="origin_redirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originRedirect"></a>

```python
origin_redirect: GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeout"></a>

```python
timeout: GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference">GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference</a>

---

##### `aws_v4_authentication_input`<sup>Optional</sup> <a name="aws_v4_authentication_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.awsV4AuthenticationInput"></a>

```python
aws_v4_authentication_input: GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `failover_origin_input`<sup>Optional</sup> <a name="failover_origin_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.failoverOriginInput"></a>

```python
failover_origin_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `origin_address_input`<sup>Optional</sup> <a name="origin_address_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originAddressInput"></a>

```python
origin_address_input: str
```

- *Type:* str

---

##### `origin_override_action_input`<sup>Optional</sup> <a name="origin_override_action_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originOverrideActionInput"></a>

```python
origin_override_action_input: GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---

##### `origin_redirect_input`<sup>Optional</sup> <a name="origin_redirect_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originRedirectInput"></a>

```python
origin_redirect_input: GoogleNetworkServicesEdgeCacheOriginOriginRedirect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `retry_conditions_input`<sup>Optional</sup> <a name="retry_conditions_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.retryConditionsInput"></a>

```python
retry_conditions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeoutInput"></a>

```python
timeout_input: GoogleNetworkServicesEdgeCacheOriginTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkServicesEdgeCacheOriginTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `failover_origin`<sup>Required</sup> <a name="failover_origin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.failoverOrigin"></a>

```python
failover_origin: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin_address`<sup>Required</sup> <a name="origin_address" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originAddress"></a>

```python
origin_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `retry_conditions`<sup>Required</sup> <a name="retry_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.retryConditions"></a>

```python
retry_conditions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication <a name="GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication(
  access_key_id: str,
  origin_region: str,
  secret_access_key_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.accessKeyId">access_key_id</a></code> | <code>str</code> | The access key ID your origin uses to identify the key. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.originRegion">origin_region</a></code> | <code>str</code> | The name of the AWS region that your origin is in. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.secretAccessKeyVersion">secret_access_key_version</a></code> | <code>str</code> | The Secret Manager secret version of the secret access key used by your origin. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

The access key ID your origin uses to identify the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#access_key_id GoogleNetworkServicesEdgeCacheOrigin#access_key_id}

---

##### `origin_region`<sup>Required</sup> <a name="origin_region" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.originRegion"></a>

```python
origin_region: str
```

- *Type:* str

The name of the AWS region that your origin is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#origin_region GoogleNetworkServicesEdgeCacheOrigin#origin_region}

---

##### `secret_access_key_version`<sup>Required</sup> <a name="secret_access_key_version" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.secretAccessKeyVersion"></a>

```python
secret_access_key_version: str
```

- *Type:* str

The Secret Manager secret version of the secret access key used by your origin.

This is the resource name of the secret version in the format 'projects/* /secrets/* /versions/*' where the '*' values are replaced by the project, secret, and version you require.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#secret_access_key_version GoogleNetworkServicesEdgeCacheOrigin#secret_access_key_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleNetworkServicesEdgeCacheOriginConfig <a name="GoogleNetworkServicesEdgeCacheOriginConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  origin_address: str,
  aws_v4_authentication: GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication = None,
  description: str = None,
  failover_origin: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  max_attempts: typing.Union[int, float] = None,
  origin_override_action: GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction = None,
  origin_redirect: GoogleNetworkServicesEdgeCacheOriginOriginRedirect = None,
  port: typing.Union[int, float] = None,
  project: str = None,
  protocol: str = None,
  retry_conditions: typing.List[str] = None,
  timeout: GoogleNetworkServicesEdgeCacheOriginTimeout = None,
  timeouts: GoogleNetworkServicesEdgeCacheOriginTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originAddress">origin_address</a></code> | <code>str</code> | A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.awsV4Authentication">aws_v4_authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.failoverOrigin">failover_origin</a></code> | <code>str</code> | The Origin resource to try when the current origin cannot be reached. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#id GoogleNetworkServicesEdgeCacheOrigin#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of attempts to cache fill from this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originOverrideAction">origin_override_action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | origin_override_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originRedirect">origin_redirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a></code> | origin_redirect block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port to connect to the origin on. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#project GoogleNetworkServicesEdgeCacheOrigin#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.protocol">protocol</a></code> | <code>str</code> | The protocol to use to connect to the configured origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.retryConditions">retry_conditions</a></code> | <code>typing.List[str]</code> | Specifies one or more retry conditions for the configured origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a></code> | timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#name GoogleNetworkServicesEdgeCacheOrigin#name}

---

##### `origin_address`<sup>Required</sup> <a name="origin_address" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originAddress"></a>

```python
origin_address: str
```

- *Type:* str

A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.

This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname

When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#origin_address GoogleNetworkServicesEdgeCacheOrigin#origin_address}

---

##### `aws_v4_authentication`<sup>Optional</sup> <a name="aws_v4_authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.awsV4Authentication"></a>

```python
aws_v4_authentication: GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#aws_v4_authentication GoogleNetworkServicesEdgeCacheOrigin#aws_v4_authentication}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#description GoogleNetworkServicesEdgeCacheOrigin#description}

---

##### `failover_origin`<sup>Optional</sup> <a name="failover_origin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.failoverOrigin"></a>

```python
failover_origin: str
```

- *Type:* str

The Origin resource to try when the current origin cannot be reached.

After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.

The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#failover_origin GoogleNetworkServicesEdgeCacheOrigin#failover_origin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#id GoogleNetworkServicesEdgeCacheOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#labels GoogleNetworkServicesEdgeCacheOrigin#labels}

---

##### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of attempts to cache fill from this origin.

Another attempt is made when a cache fill fails with one of the retryConditions.

Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,
retryConditions and failoverOrigin to control its own cache fill failures.

The total number of allowed attempts to cache fill across this and failover origins is limited to four.
The total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.

The last valid, non-retried response from all origins will be returned to the client.
If no origin returns a valid response, an HTTP 502 will be returned to the client.

Defaults to 1. Must be a value greater than 0 and less than 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#max_attempts GoogleNetworkServicesEdgeCacheOrigin#max_attempts}

---

##### `origin_override_action`<sup>Optional</sup> <a name="origin_override_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originOverrideAction"></a>

```python
origin_override_action: GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a>

origin_override_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#origin_override_action GoogleNetworkServicesEdgeCacheOrigin#origin_override_action}

---

##### `origin_redirect`<sup>Optional</sup> <a name="origin_redirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originRedirect"></a>

```python
origin_redirect: GoogleNetworkServicesEdgeCacheOriginOriginRedirect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a>

origin_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#origin_redirect GoogleNetworkServicesEdgeCacheOrigin#origin_redirect}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port to connect to the origin on.

Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#port GoogleNetworkServicesEdgeCacheOrigin#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#project GoogleNetworkServicesEdgeCacheOrigin#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol to use to connect to the configured origin.

Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.

When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#protocol GoogleNetworkServicesEdgeCacheOrigin#protocol}

---

##### `retry_conditions`<sup>Optional</sup> <a name="retry_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.retryConditions"></a>

```python
retry_conditions: typing.List[str]
```

- *Type:* typing.List[str]

Specifies one or more retry conditions for the configured origin.

If the failure mode during a connection attempt to the origin matches the configured retryCondition(s),
the origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.

The default retryCondition is "CONNECT_FAILURE".

retryConditions apply to this origin, and not subsequent failoverOrigin(s),
which may specify their own retryConditions and maxAttempts.

Valid values are:

* CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.
* HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.
* GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.
* RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)
* NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
* FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden). Possible values: ["CONNECT_FAILURE", "HTTP_5XX", "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND", "FORBIDDEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#retry_conditions GoogleNetworkServicesEdgeCacheOrigin#retry_conditions}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.timeout"></a>

```python
timeout: GoogleNetworkServicesEdgeCacheOriginTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#timeout GoogleNetworkServicesEdgeCacheOrigin#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesEdgeCacheOriginTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#timeouts GoogleNetworkServicesEdgeCacheOrigin#timeouts}

---

### GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction(
  header_action: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction = None,
  url_rewrite: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.property.headerAction">header_action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.property.urlRewrite">url_rewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `header_action`<sup>Optional</sup> <a name="header_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.property.headerAction"></a>

```python
header_action: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#header_action GoogleNetworkServicesEdgeCacheOrigin#header_action}

---

##### `url_rewrite`<sup>Optional</sup> <a name="url_rewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.property.urlRewrite"></a>

```python
url_rewrite: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#url_rewrite GoogleNetworkServicesEdgeCacheOrigin#url_rewrite}

---

### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction(
  request_headers_to_add: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.property.requestHeadersToAdd">request_headers_to_add</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]]</code> | request_headers_to_add block. |

---

##### `request_headers_to_add`<sup>Optional</sup> <a name="request_headers_to_add" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.property.requestHeadersToAdd"></a>

```python
request_headers_to_add: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]]

request_headers_to_add block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#request_headers_to_add GoogleNetworkServicesEdgeCacheOrigin#request_headers_to_add}

---

### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd(
  header_name: str,
  header_value: str,
  replace: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerName">header_name</a></code> | <code>str</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerValue">header_value</a></code> | <code>str</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.replace">replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to replace all existing headers with the same name. |

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

The name of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#header_name GoogleNetworkServicesEdgeCacheOrigin#header_name}

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

The value of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#header_value GoogleNetworkServicesEdgeCacheOrigin#header_value}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.replace"></a>

```python
replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to replace all existing headers with the same name.

By default, added header values are appended
to the response or request headers with the
same field names. The added values are
separated by commas.

To overwrite existing values, set 'replace' to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#replace GoogleNetworkServicesEdgeCacheOrigin#replace}

---

### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite(
  host_rewrite: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.property.hostRewrite">host_rewrite</a></code> | <code>str</code> | Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of the hostRewrite. |

---

##### `host_rewrite`<sup>Optional</sup> <a name="host_rewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.property.hostRewrite"></a>

```python
host_rewrite: str
```

- *Type:* str

Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of the hostRewrite.

This value must be between 1 and 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#host_rewrite GoogleNetworkServicesEdgeCacheOrigin#host_rewrite}

---

### GoogleNetworkServicesEdgeCacheOriginOriginRedirect <a name="GoogleNetworkServicesEdgeCacheOriginOriginRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect(
  redirect_conditions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect.property.redirectConditions">redirect_conditions</a></code> | <code>typing.List[str]</code> | The set of redirect response codes that the CDN follows. Values of [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions) are accepted. |

---

##### `redirect_conditions`<sup>Optional</sup> <a name="redirect_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect.property.redirectConditions"></a>

```python
redirect_conditions: typing.List[str]
```

- *Type:* typing.List[str]

The set of redirect response codes that the CDN follows. Values of [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions) are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#redirect_conditions GoogleNetworkServicesEdgeCacheOrigin#redirect_conditions}

---

### GoogleNetworkServicesEdgeCacheOriginTimeout <a name="GoogleNetworkServicesEdgeCacheOriginTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout(
  connect_timeout: str = None,
  max_attempts_timeout: str = None,
  read_timeout: str = None,
  response_timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.connectTimeout">connect_timeout</a></code> | <code>str</code> | The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.maxAttemptsTimeout">max_attempts_timeout</a></code> | <code>str</code> | The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.readTimeout">read_timeout</a></code> | <code>str</code> | The maximum duration to wait between reads of a single HTTP connection/stream. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.responseTimeout">response_timeout</a></code> | <code>str</code> | The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream. |

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.connectTimeout"></a>

```python
connect_timeout: str
```

- *Type:* str

The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment.

Defaults to 5 seconds. The timeout must be a value between 1s and 15s.

The connectTimeout capped by the deadline set by the request's maxAttemptsTimeout.  The last connection attempt may have a smaller connectTimeout in order to adhere to the overall maxAttemptsTimeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#connect_timeout GoogleNetworkServicesEdgeCacheOrigin#connect_timeout}

---

##### `max_attempts_timeout`<sup>Optional</sup> <a name="max_attempts_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.maxAttemptsTimeout"></a>

```python
max_attempts_timeout: str
```

- *Type:* str

The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client.

A HTTP 504 will be returned if the timeout is reached before a response is returned.

Defaults to 15 seconds. The timeout must be a value between 1s and 30s.

If a failoverOrigin is specified, the maxAttemptsTimeout of the first configured origin sets the deadline for all connection attempts across all failoverOrigins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#max_attempts_timeout GoogleNetworkServicesEdgeCacheOrigin#max_attempts_timeout}

---

##### `read_timeout`<sup>Optional</sup> <a name="read_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.readTimeout"></a>

```python
read_timeout: str
```

- *Type:* str

The maximum duration to wait between reads of a single HTTP connection/stream.

Defaults to 15 seconds.  The timeout must be a value between 1s and 30s.

The readTimeout is capped by the responseTimeout.  All reads of the HTTP connection/stream must be completed by the deadline set by the responseTimeout.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#read_timeout GoogleNetworkServicesEdgeCacheOrigin#read_timeout}

---

##### `response_timeout`<sup>Optional</sup> <a name="response_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.responseTimeout"></a>

```python
response_timeout: str
```

- *Type:* str

The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream.

Defaults to 30 seconds. The timeout must be a value between 1s and 120s.

The responseTimeout starts after the connection has been established.

This also applies to HTTP Chunked Transfer Encoding responses, and/or when an open-ended Range request is made to the origin. Origins that take longer to write additional bytes to the response than the configured responseTimeout will result in an error being returned to the client.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#response_timeout GoogleNetworkServicesEdgeCacheOrigin#response_timeout}

---

### GoogleNetworkServicesEdgeCacheOriginTimeouts <a name="GoogleNetworkServicesEdgeCacheOriginTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#create GoogleNetworkServicesEdgeCacheOrigin#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#delete GoogleNetworkServicesEdgeCacheOrigin#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#update GoogleNetworkServicesEdgeCacheOrigin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#create GoogleNetworkServicesEdgeCacheOrigin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#delete GoogleNetworkServicesEdgeCacheOrigin#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#update GoogleNetworkServicesEdgeCacheOrigin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegionInput">origin_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersionInput">secret_access_key_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegion">origin_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersion">secret_access_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `origin_region_input`<sup>Optional</sup> <a name="origin_region_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegionInput"></a>

```python
origin_region_input: str
```

- *Type:* str

---

##### `secret_access_key_version_input`<sup>Optional</sup> <a name="secret_access_key_version_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersionInput"></a>

```python
secret_access_key_version_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `origin_region`<sup>Required</sup> <a name="origin_region" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegion"></a>

```python
origin_region: str
```

- *Type:* str

---

##### `secret_access_key_version`<sup>Required</sup> <a name="secret_access_key_version" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersion"></a>

```python
secret_access_key_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd">put_request_headers_to_add</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resetRequestHeadersToAdd">reset_request_headers_to_add</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_headers_to_add` <a name="put_request_headers_to_add" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd"></a>

```python
def put_request_headers_to_add(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]]

---

##### `reset_request_headers_to_add` <a name="reset_request_headers_to_add" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resetRequestHeadersToAdd"></a>

```python
def reset_request_headers_to_add() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAdd">request_headers_to_add</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAddInput">request_headers_to_add_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_headers_to_add`<sup>Required</sup> <a name="request_headers_to_add" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAdd"></a>

```python
request_headers_to_add: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList</a>

---

##### `request_headers_to_add_input`<sup>Optional</sup> <a name="request_headers_to_add_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAddInput"></a>

```python
request_headers_to_add_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]]

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resetReplace">reset_replace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_replace` <a name="reset_replace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resetReplace"></a>

```python
def reset_replace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValueInput">header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replaceInput">replace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replace">replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_value_input`<sup>Optional</sup> <a name="header_value_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValueInput"></a>

```python
header_value_input: str
```

- *Type:* str

---

##### `replace_input`<sup>Optional</sup> <a name="replace_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replaceInput"></a>

```python
replace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replace"></a>

```python
replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction">put_header_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite">put_url_rewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetHeaderAction">reset_header_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetUrlRewrite">reset_url_rewrite</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header_action` <a name="put_header_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction"></a>

```python
def put_header_action(
  request_headers_to_add: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd]] = None
) -> None
```

###### `request_headers_to_add`<sup>Optional</sup> <a name="request_headers_to_add" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction.parameter.requestHeadersToAdd"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd</a>]]

request_headers_to_add block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#request_headers_to_add GoogleNetworkServicesEdgeCacheOrigin#request_headers_to_add}

---

##### `put_url_rewrite` <a name="put_url_rewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite"></a>

```python
def put_url_rewrite(
  host_rewrite: str = None
) -> None
```

###### `host_rewrite`<sup>Optional</sup> <a name="host_rewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite.parameter.hostRewrite"></a>

- *Type:* str

Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of the hostRewrite.

This value must be between 1 and 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_services_edge_cache_origin#host_rewrite GoogleNetworkServicesEdgeCacheOrigin#host_rewrite}

---

##### `reset_header_action` <a name="reset_header_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetHeaderAction"></a>

```python
def reset_header_action() -> None
```

##### `reset_url_rewrite` <a name="reset_url_rewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetUrlRewrite"></a>

```python
def reset_url_rewrite() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerAction">header_action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewrite">url_rewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerActionInput">header_action_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewriteInput">url_rewrite_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_action`<sup>Required</sup> <a name="header_action" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerAction"></a>

```python
header_action: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference</a>

---

##### `url_rewrite`<sup>Required</sup> <a name="url_rewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewrite"></a>

```python
url_rewrite: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference</a>

---

##### `header_action_input`<sup>Optional</sup> <a name="header_action_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerActionInput"></a>

```python
header_action_input: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---

##### `url_rewrite_input`<sup>Optional</sup> <a name="url_rewrite_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewriteInput"></a>

```python
url_rewrite_input: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resetHostRewrite">reset_host_rewrite</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host_rewrite` <a name="reset_host_rewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resetHostRewrite"></a>

```python
def reset_host_rewrite() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewriteInput">host_rewrite_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewrite">host_rewrite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_rewrite_input`<sup>Optional</sup> <a name="host_rewrite_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```python
host_rewrite_input: str
```

- *Type:* str

---

##### `host_rewrite`<sup>Required</sup> <a name="host_rewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewrite"></a>

```python
host_rewrite: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---


### GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resetRedirectConditions">reset_redirect_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_redirect_conditions` <a name="reset_redirect_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resetRedirectConditions"></a>

```python
def reset_redirect_conditions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditionsInput">redirect_conditions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditions">redirect_conditions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_conditions_input`<sup>Optional</sup> <a name="redirect_conditions_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditionsInput"></a>

```python
redirect_conditions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redirect_conditions`<sup>Required</sup> <a name="redirect_conditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditions"></a>

```python
redirect_conditions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesEdgeCacheOriginOriginRedirect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a>

---


### GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetMaxAttemptsTimeout">reset_max_attempts_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetReadTimeout">reset_read_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetResponseTimeout">reset_response_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_max_attempts_timeout` <a name="reset_max_attempts_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetMaxAttemptsTimeout"></a>

```python
def reset_max_attempts_timeout() -> None
```

##### `reset_read_timeout` <a name="reset_read_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetReadTimeout"></a>

```python
def reset_read_timeout() -> None
```

##### `reset_response_timeout` <a name="reset_response_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetResponseTimeout"></a>

```python
def reset_response_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeoutInput">max_attempts_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeoutInput">read_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeoutInput">response_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeout">max_attempts_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeout">read_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeout">response_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeoutInput"></a>

```python
connect_timeout_input: str
```

- *Type:* str

---

##### `max_attempts_timeout_input`<sup>Optional</sup> <a name="max_attempts_timeout_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeoutInput"></a>

```python
max_attempts_timeout_input: str
```

- *Type:* str

---

##### `read_timeout_input`<sup>Optional</sup> <a name="read_timeout_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeoutInput"></a>

```python
read_timeout_input: str
```

- *Type:* str

---

##### `response_timeout_input`<sup>Optional</sup> <a name="response_timeout_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeoutInput"></a>

```python
response_timeout_input: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeout"></a>

```python
connect_timeout: str
```

- *Type:* str

---

##### `max_attempts_timeout`<sup>Required</sup> <a name="max_attempts_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeout"></a>

```python
max_attempts_timeout: str
```

- *Type:* str

---

##### `read_timeout`<sup>Required</sup> <a name="read_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeout"></a>

```python
read_timeout: str
```

- *Type:* str

---

##### `response_timeout`<sup>Required</sup> <a name="response_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeout"></a>

```python
response_timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesEdgeCacheOriginTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a>

---


### GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_origin

googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesEdgeCacheOriginTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a>]

---



