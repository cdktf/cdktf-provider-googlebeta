# `googleComputeTargetGrpcProxy` Submodule <a name="`googleComputeTargetGrpcProxy` Submodule" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeTargetGrpcProxy <a name="GoogleComputeTargetGrpcProxy" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy google_compute_target_grpc_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_grpc_proxy

googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy(
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
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeTargetGrpcProxyTimeouts = None,
  url_map: str = None,
  validate_for_proxyless: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#id GoogleComputeTargetGrpcProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#project GoogleComputeTargetGrpcProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.urlMap">url_map</a></code> | <code>str</code> | URL to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.validateForProxyless">validate_for_proxyless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource
is created. The name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long
and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#name GoogleComputeTargetGrpcProxy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#description GoogleComputeTargetGrpcProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#id GoogleComputeTargetGrpcProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#project GoogleComputeTargetGrpcProxy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#timeouts GoogleComputeTargetGrpcProxy#timeouts}

---

##### `url_map`<sup>Optional</sup> <a name="url_map" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.urlMap"></a>

- *Type:* str

URL to the UrlMap resource that defines the mapping from URL to the BackendService.

The protocol field in the BackendService
must be set to GRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#url_map GoogleComputeTargetGrpcProxy#url_map}

---

##### `validate_for_proxyless`<sup>Optional</sup> <a name="validate_for_proxyless" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.validateForProxyless"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy.

This will enable configuration checks on urlMap
and its referenced BackendServices to not allow unsupported features.
A gRPC application must use "xds:///" scheme in the target URI
of the service it is connecting to. If false, indicates that the
BackendServices referenced by the urlMap will be accessed by gRPC
applications via a sidecar proxy. In this case, a gRPC application
must not use "xds:///" scheme in the target URI of the service
it is connecting to

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#validate_for_proxyless GoogleComputeTargetGrpcProxy#validate_for_proxyless}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetUrlMap">reset_url_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetValidateForProxyless">reset_validate_for_proxyless</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#create GoogleComputeTargetGrpcProxy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#delete GoogleComputeTargetGrpcProxy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#update GoogleComputeTargetGrpcProxy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_url_map` <a name="reset_url_map" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetUrlMap"></a>

```python
def reset_url_map() -> None
```

##### `reset_validate_for_proxyless` <a name="reset_validate_for_proxyless" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetValidateForProxyless"></a>

```python
def reset_validate_for_proxyless() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeTargetGrpcProxy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_grpc_proxy

googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_grpc_proxy

googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_grpc_proxy

googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_grpc_proxy

googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeTargetGrpcProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeTargetGrpcProxy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeTargetGrpcProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeTargetGrpcProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.selfLinkWithId">self_link_with_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference">GoogleComputeTargetGrpcProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.urlMapInput">url_map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.validateForProxylessInput">validate_for_proxyless_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.urlMap">url_map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.validateForProxyless">validate_for_proxyless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_with_id`<sup>Required</sup> <a name="self_link_with_id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.selfLinkWithId"></a>

```python
self_link_with_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.timeouts"></a>

```python
timeouts: GoogleComputeTargetGrpcProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference">GoogleComputeTargetGrpcProxyTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeTargetGrpcProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a>]

---

##### `url_map_input`<sup>Optional</sup> <a name="url_map_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.urlMapInput"></a>

```python
url_map_input: str
```

- *Type:* str

---

##### `validate_for_proxyless_input`<sup>Optional</sup> <a name="validate_for_proxyless_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.validateForProxylessInput"></a>

```python
validate_for_proxyless_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.urlMap"></a>

```python
url_map: str
```

- *Type:* str

---

##### `validate_for_proxyless`<sup>Required</sup> <a name="validate_for_proxyless" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.validateForProxyless"></a>

```python
validate_for_proxyless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeTargetGrpcProxyConfig <a name="GoogleComputeTargetGrpcProxyConfig" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_grpc_proxy

googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeTargetGrpcProxyTimeouts = None,
  url_map: str = None,
  validate_for_proxyless: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#id GoogleComputeTargetGrpcProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#project GoogleComputeTargetGrpcProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.urlMap">url_map</a></code> | <code>str</code> | URL to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.validateForProxyless">validate_for_proxyless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource
is created. The name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long
and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#name GoogleComputeTargetGrpcProxy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#description GoogleComputeTargetGrpcProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#id GoogleComputeTargetGrpcProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#project GoogleComputeTargetGrpcProxy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeTargetGrpcProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#timeouts GoogleComputeTargetGrpcProxy#timeouts}

---

##### `url_map`<sup>Optional</sup> <a name="url_map" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.urlMap"></a>

```python
url_map: str
```

- *Type:* str

URL to the UrlMap resource that defines the mapping from URL to the BackendService.

The protocol field in the BackendService
must be set to GRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#url_map GoogleComputeTargetGrpcProxy#url_map}

---

##### `validate_for_proxyless`<sup>Optional</sup> <a name="validate_for_proxyless" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.validateForProxyless"></a>

```python
validate_for_proxyless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy.

This will enable configuration checks on urlMap
and its referenced BackendServices to not allow unsupported features.
A gRPC application must use "xds:///" scheme in the target URI
of the service it is connecting to. If false, indicates that the
BackendServices referenced by the urlMap will be accessed by gRPC
applications via a sidecar proxy. In this case, a gRPC application
must not use "xds:///" scheme in the target URI of the service
it is connecting to

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#validate_for_proxyless GoogleComputeTargetGrpcProxy#validate_for_proxyless}

---

### GoogleComputeTargetGrpcProxyTimeouts <a name="GoogleComputeTargetGrpcProxyTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_grpc_proxy

googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#create GoogleComputeTargetGrpcProxy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#delete GoogleComputeTargetGrpcProxy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#update GoogleComputeTargetGrpcProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#create GoogleComputeTargetGrpcProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#delete GoogleComputeTargetGrpcProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_target_grpc_proxy#update GoogleComputeTargetGrpcProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeTargetGrpcProxyTimeoutsOutputReference <a name="GoogleComputeTargetGrpcProxyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_target_grpc_proxy

googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeTargetGrpcProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a>]

---



