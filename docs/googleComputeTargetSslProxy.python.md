# `googleComputeTargetSslProxy` Submodule <a name="`googleComputeTargetSslProxy` Submodule" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeTargetSslProxy <a name="GoogleComputeTargetSslProxy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy google_compute_target_ssl_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_ssl_proxy

googleComputeTargetSslProxy.GoogleComputeTargetSslProxy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_service: str,
  name: str,
  certificate_map: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  proxy_header: str = None,
  ssl_certificates: typing.List[str] = None,
  ssl_policy: str = None,
  timeouts: GoogleComputeTargetSslProxyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.backendService">backend_service</a></code> | <code>str</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.certificateMap">certificate_map</a></code> | <code>str</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#id GoogleComputeTargetSslProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#project GoogleComputeTargetSslProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | A list of SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.sslPolicy">ssl_policy</a></code> | <code>str</code> | A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.backendService"></a>

- *Type:* str

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#backend_service GoogleComputeTargetSslProxy#backend_service}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#name GoogleComputeTargetSslProxy#name}

---

##### `certificate_map`<sup>Optional</sup> <a name="certificate_map" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.certificateMap"></a>

- *Type:* str

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field can only be set for global target proxies.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#certificate_map GoogleComputeTargetSslProxy#certificate_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#description GoogleComputeTargetSslProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#id GoogleComputeTargetSslProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#project GoogleComputeTargetSslProxy#project}.

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#proxy_header GoogleComputeTargetSslProxy#proxy_header}

---

##### `ssl_certificates`<sup>Optional</sup> <a name="ssl_certificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.sslCertificates"></a>

- *Type:* typing.List[str]

A list of SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one
SSL certificate must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#ssl_certificates GoogleComputeTargetSslProxy#ssl_certificates}

---

##### `ssl_policy`<sup>Optional</sup> <a name="ssl_policy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.sslPolicy"></a>

- *Type:* str

A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource.

If not set, the TargetSslProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#ssl_policy GoogleComputeTargetSslProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#timeouts GoogleComputeTargetSslProxy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetCertificateMap">reset_certificate_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslCertificates">reset_ssl_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslPolicy">reset_ssl_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#create GoogleComputeTargetSslProxy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#delete GoogleComputeTargetSslProxy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#update GoogleComputeTargetSslProxy#update}.

---

##### `reset_certificate_map` <a name="reset_certificate_map" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetCertificateMap"></a>

```python
def reset_certificate_map() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_ssl_certificates` <a name="reset_ssl_certificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslCertificates"></a>

```python
def reset_ssl_certificates() -> None
```

##### `reset_ssl_policy` <a name="reset_ssl_policy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetSslPolicy"></a>

```python
def reset_ssl_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeTargetSslProxy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_ssl_proxy

googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_ssl_proxy

googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_ssl_proxy

googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_ssl_proxy

googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeTargetSslProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeTargetSslProxy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeTargetSslProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeTargetSslProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyId">proxy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference">GoogleComputeTargetSslProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendServiceInput">backend_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMapInput">certificate_map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificatesInput">ssl_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicyInput">ssl_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendService">backend_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMap">certificate_map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyId"></a>

```python
proxy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeouts"></a>

```python
timeouts: GoogleComputeTargetSslProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference">GoogleComputeTargetSslProxyTimeoutsOutputReference</a>

---

##### `backend_service_input`<sup>Optional</sup> <a name="backend_service_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendServiceInput"></a>

```python
backend_service_input: str
```

- *Type:* str

---

##### `certificate_map_input`<sup>Optional</sup> <a name="certificate_map_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMapInput"></a>

```python
certificate_map_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `ssl_certificates_input`<sup>Optional</sup> <a name="ssl_certificates_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificatesInput"></a>

```python
ssl_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssl_policy_input`<sup>Optional</sup> <a name="ssl_policy_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicyInput"></a>

```python
ssl_policy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeTargetSslProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

---

##### `certificate_map`<sup>Required</sup> <a name="certificate_map" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.certificateMap"></a>

```python
certificate_map: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `ssl_certificates`<sup>Required</sup> <a name="ssl_certificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslCertificates"></a>

```python
ssl_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssl_policy`<sup>Required</sup> <a name="ssl_policy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeTargetSslProxyConfig <a name="GoogleComputeTargetSslProxyConfig" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_ssl_proxy

googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_service: str,
  name: str,
  certificate_map: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  proxy_header: str = None,
  ssl_certificates: typing.List[str] = None,
  ssl_policy: str = None,
  timeouts: GoogleComputeTargetSslProxyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.backendService">backend_service</a></code> | <code>str</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.certificateMap">certificate_map</a></code> | <code>str</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#id GoogleComputeTargetSslProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#project GoogleComputeTargetSslProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | A list of SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#backend_service GoogleComputeTargetSslProxy#backend_service}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#name GoogleComputeTargetSslProxy#name}

---

##### `certificate_map`<sup>Optional</sup> <a name="certificate_map" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.certificateMap"></a>

```python
certificate_map: str
```

- *Type:* str

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field can only be set for global target proxies.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#certificate_map GoogleComputeTargetSslProxy#certificate_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#description GoogleComputeTargetSslProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#id GoogleComputeTargetSslProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#project GoogleComputeTargetSslProxy#project}.

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#proxy_header GoogleComputeTargetSslProxy#proxy_header}

---

##### `ssl_certificates`<sup>Optional</sup> <a name="ssl_certificates" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslCertificates"></a>

```python
ssl_certificates: typing.List[str]
```

- *Type:* typing.List[str]

A list of SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one
SSL certificate must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#ssl_certificates GoogleComputeTargetSslProxy#ssl_certificates}

---

##### `ssl_policy`<sup>Optional</sup> <a name="ssl_policy" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

A reference to the SslPolicy resource that will be associated with the TargetSslProxy resource.

If not set, the TargetSslProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#ssl_policy GoogleComputeTargetSslProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeTargetSslProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#timeouts GoogleComputeTargetSslProxy#timeouts}

---

### GoogleComputeTargetSslProxyTimeouts <a name="GoogleComputeTargetSslProxyTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_ssl_proxy

googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#create GoogleComputeTargetSslProxy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#delete GoogleComputeTargetSslProxy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#update GoogleComputeTargetSslProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#create GoogleComputeTargetSslProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#delete GoogleComputeTargetSslProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_target_ssl_proxy#update GoogleComputeTargetSslProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeTargetSslProxyTimeoutsOutputReference <a name="GoogleComputeTargetSslProxyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_ssl_proxy

googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeTargetSslProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeTargetSslProxy.GoogleComputeTargetSslProxyTimeouts">GoogleComputeTargetSslProxyTimeouts</a>]

---



