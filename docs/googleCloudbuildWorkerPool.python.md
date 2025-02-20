# `googleCloudbuildWorkerPool` Submodule <a name="`googleCloudbuildWorkerPool` Submodule" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudbuildWorkerPool <a name="GoogleCloudbuildWorkerPool" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  network_config: GoogleCloudbuildWorkerPoolNetworkConfig = None,
  private_service_connect: GoogleCloudbuildWorkerPoolPrivateServiceConnect = None,
  project: str = None,
  timeouts: GoogleCloudbuildWorkerPoolTimeouts = None,
  worker_config: GoogleCloudbuildWorkerPoolWorkerConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.name">name</a></code> | <code>str</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#id GoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.privateServiceConnect">private_service_connect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | private_service_connect block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.workerConfig">worker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | worker_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#location GoogleCloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.name"></a>

- *Type:* str

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#name GoogleCloudbuildWorkerPool#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#annotations GoogleCloudbuildWorkerPool#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.displayName"></a>

- *Type:* str

A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#display_name GoogleCloudbuildWorkerPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#id GoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#network_config GoogleCloudbuildWorkerPool#network_config}

---

##### `private_service_connect`<sup>Optional</sup> <a name="private_service_connect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.privateServiceConnect"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

private_service_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#private_service_connect GoogleCloudbuildWorkerPool#private_service_connect}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#project GoogleCloudbuildWorkerPool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#timeouts GoogleCloudbuildWorkerPool#timeouts}

---

##### `worker_config`<sup>Optional</sup> <a name="worker_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.Initializer.parameter.workerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#worker_config GoogleCloudbuildWorkerPool#worker_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect">put_private_service_connect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig">put_worker_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetPrivateServiceConnect">reset_private_service_connect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetWorkerConfig">reset_worker_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig"></a>

```python
def put_network_config(
  peered_network: str,
  peered_network_ip_range: str = None
) -> None
```

###### `peered_network`<sup>Required</sup> <a name="peered_network" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig.parameter.peeredNetwork"></a>

- *Type:* str

Required.

Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project}/global/networks/{network}`, where `{project}` is a project number, such as `12345`, and `{network}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/cloud-build/docs/custom-workers/set-up-custom-worker-pool-environment#understanding_the_network_configuration_options)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#peered_network GoogleCloudbuildWorkerPool#peered_network}

---

###### `peered_network_ip_range`<sup>Optional</sup> <a name="peered_network_ip_range" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putNetworkConfig.parameter.peeredNetworkIpRange"></a>

- *Type:* str

Optional.

Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#peered_network_ip_range GoogleCloudbuildWorkerPool#peered_network_ip_range}

---

##### `put_private_service_connect` <a name="put_private_service_connect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect"></a>

```python
def put_private_service_connect(
  network_attachment: str,
  route_all_traffic: typing.Union[bool, IResolvable] = None
) -> None
```

###### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect.parameter.networkAttachment"></a>

- *Type:* str

Required.

Immutable. The network attachment that the worker network interface is connected to. Must be in the format `projects/{project}/regions/{region}/networkAttachments/{networkAttachment}`. The region of network attachment must be the same as the worker pool. See [Network Attachments](https://cloud.google.com/vpc/docs/about-network-attachments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#network_attachment GoogleCloudbuildWorkerPool#network_attachment}

---

###### `route_all_traffic`<sup>Optional</sup> <a name="route_all_traffic" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putPrivateServiceConnect.parameter.routeAllTraffic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Immutable.

Route all traffic through PSC interface. Enable this if you want full control of traffic in the private pool. Configure Cloud NAT for the subnet of network attachment if you need to access public Internet. If false, Only route private IPs, e.g. 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 through PSC interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#route_all_traffic GoogleCloudbuildWorkerPool#route_all_traffic}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#create GoogleCloudbuildWorkerPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#delete GoogleCloudbuildWorkerPool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#update GoogleCloudbuildWorkerPool#update}.

---

##### `put_worker_config` <a name="put_worker_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig"></a>

```python
def put_worker_config(
  disk_size_gb: typing.Union[int, float] = None,
  machine_type: str = None,
  no_external_ip: typing.Union[bool, IResolvable] = None
) -> None
```

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Size of the disk attached to the worker, in GB.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#disk_size_gb GoogleCloudbuildWorkerPool#disk_size_gb}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig.parameter.machineType"></a>

- *Type:* str

Machine type of a worker, such as `n1-standard-1`.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). If left blank, Cloud Build will use `n1-standard-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#machine_type GoogleCloudbuildWorkerPool#machine_type}

---

###### `no_external_ip`<sup>Optional</sup> <a name="no_external_ip" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.putWorkerConfig.parameter.noExternalIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, workers are created without any public address, which prevents network egress to public IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#no_external_ip GoogleCloudbuildWorkerPool#no_external_ip}

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_private_service_connect` <a name="reset_private_service_connect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetPrivateServiceConnect"></a>

```python
def reset_private_service_connect() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_worker_config` <a name="reset_worker_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.resetWorkerConfig"></a>

```python
def reset_worker_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleCloudbuildWorkerPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleCloudbuildWorkerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudbuildWorkerPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference">GoogleCloudbuildWorkerPoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnect">private_service_connect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference">GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference">GoogleCloudbuildWorkerPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfig">worker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference">GoogleCloudbuildWorkerPoolWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnectInput">private_service_connect_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfigInput">worker_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfig"></a>

```python
network_config: GoogleCloudbuildWorkerPoolNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference">GoogleCloudbuildWorkerPoolNetworkConfigOutputReference</a>

---

##### `private_service_connect`<sup>Required</sup> <a name="private_service_connect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnect"></a>

```python
private_service_connect: GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference">GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeouts"></a>

```python
timeouts: GoogleCloudbuildWorkerPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference">GoogleCloudbuildWorkerPoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `worker_config`<sup>Required</sup> <a name="worker_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfig"></a>

```python
worker_config: GoogleCloudbuildWorkerPoolWorkerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference">GoogleCloudbuildWorkerPoolWorkerConfigOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.networkConfigInput"></a>

```python
network_config_input: GoogleCloudbuildWorkerPoolNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

---

##### `private_service_connect_input`<sup>Optional</sup> <a name="private_service_connect_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.privateServiceConnectInput"></a>

```python
private_service_connect_input: GoogleCloudbuildWorkerPoolPrivateServiceConnect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCloudbuildWorkerPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>]

---

##### `worker_config_input`<sup>Optional</sup> <a name="worker_config_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.workerConfigInput"></a>

```python
worker_config_input: GoogleCloudbuildWorkerPoolWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudbuildWorkerPoolConfig <a name="GoogleCloudbuildWorkerPoolConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  network_config: GoogleCloudbuildWorkerPoolNetworkConfig = None,
  private_service_connect: GoogleCloudbuildWorkerPoolPrivateServiceConnect = None,
  project: str = None,
  timeouts: GoogleCloudbuildWorkerPoolTimeouts = None,
  worker_config: GoogleCloudbuildWorkerPoolWorkerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.name">name</a></code> | <code>str</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.displayName">display_name</a></code> | <code>str</code> | A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#id GoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.privateServiceConnect">private_service_connect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | private_service_connect block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.workerConfig">worker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | worker_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#location GoogleCloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#name GoogleCloudbuildWorkerPool#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#annotations GoogleCloudbuildWorkerPool#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#display_name GoogleCloudbuildWorkerPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#id GoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.networkConfig"></a>

```python
network_config: GoogleCloudbuildWorkerPoolNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#network_config GoogleCloudbuildWorkerPool#network_config}

---

##### `private_service_connect`<sup>Optional</sup> <a name="private_service_connect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.privateServiceConnect"></a>

```python
private_service_connect: GoogleCloudbuildWorkerPoolPrivateServiceConnect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

private_service_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#private_service_connect GoogleCloudbuildWorkerPool#private_service_connect}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#project GoogleCloudbuildWorkerPool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudbuildWorkerPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#timeouts GoogleCloudbuildWorkerPool#timeouts}

---

##### `worker_config`<sup>Optional</sup> <a name="worker_config" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolConfig.property.workerConfig"></a>

```python
worker_config: GoogleCloudbuildWorkerPoolWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#worker_config GoogleCloudbuildWorkerPool#worker_config}

---

### GoogleCloudbuildWorkerPoolNetworkConfig <a name="GoogleCloudbuildWorkerPoolNetworkConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig(
  peered_network: str,
  peered_network_ip_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetwork">peered_network</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange">peered_network_ip_range</a></code> | <code>str</code> | Optional. |

---

##### `peered_network`<sup>Required</sup> <a name="peered_network" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetwork"></a>

```python
peered_network: str
```

- *Type:* str

Required.

Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project}/global/networks/{network}`, where `{project}` is a project number, such as `12345`, and `{network}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/cloud-build/docs/custom-workers/set-up-custom-worker-pool-environment#understanding_the_network_configuration_options)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#peered_network GoogleCloudbuildWorkerPool#peered_network}

---

##### `peered_network_ip_range`<sup>Optional</sup> <a name="peered_network_ip_range" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig.property.peeredNetworkIpRange"></a>

```python
peered_network_ip_range: str
```

- *Type:* str

Optional.

Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#peered_network_ip_range GoogleCloudbuildWorkerPool#peered_network_ip_range}

---

### GoogleCloudbuildWorkerPoolPrivateServiceConnect <a name="GoogleCloudbuildWorkerPoolPrivateServiceConnect" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect(
  network_attachment: str,
  route_all_traffic: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment">network_attachment</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic">route_all_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Immutable. |

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

Required.

Immutable. The network attachment that the worker network interface is connected to. Must be in the format `projects/{project}/regions/{region}/networkAttachments/{networkAttachment}`. The region of network attachment must be the same as the worker pool. See [Network Attachments](https://cloud.google.com/vpc/docs/about-network-attachments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#network_attachment GoogleCloudbuildWorkerPool#network_attachment}

---

##### `route_all_traffic`<sup>Optional</sup> <a name="route_all_traffic" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect.property.routeAllTraffic"></a>

```python
route_all_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Immutable.

Route all traffic through PSC interface. Enable this if you want full control of traffic in the private pool. Configure Cloud NAT for the subnet of network attachment if you need to access public Internet. If false, Only route private IPs, e.g. 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 through PSC interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#route_all_traffic GoogleCloudbuildWorkerPool#route_all_traffic}

---

### GoogleCloudbuildWorkerPoolTimeouts <a name="GoogleCloudbuildWorkerPoolTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#create GoogleCloudbuildWorkerPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#delete GoogleCloudbuildWorkerPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#update GoogleCloudbuildWorkerPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#create GoogleCloudbuildWorkerPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#delete GoogleCloudbuildWorkerPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#update GoogleCloudbuildWorkerPool#update}.

---

### GoogleCloudbuildWorkerPoolWorkerConfig <a name="GoogleCloudbuildWorkerPoolWorkerConfig" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig(
  disk_size_gb: typing.Union[int, float] = None,
  machine_type: str = None,
  no_external_ip: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the disk attached to the worker, in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.machineType">machine_type</a></code> | <code>str</code> | Machine type of a worker, such as `n1-standard-1`. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.noExternalIp">no_external_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, workers are created without any public address, which prevents network egress to public IPs. |

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the disk attached to the worker, in GB.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#disk_size_gb GoogleCloudbuildWorkerPool#disk_size_gb}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

Machine type of a worker, such as `n1-standard-1`.

See [Worker pool config file](https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). If left blank, Cloud Build will use `n1-standard-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#machine_type GoogleCloudbuildWorkerPool#machine_type}

---

##### `no_external_ip`<sup>Optional</sup> <a name="no_external_ip" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig.property.noExternalIp"></a>

```python
no_external_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, workers are created without any public address, which prevents network egress to public IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_cloudbuild_worker_pool#no_external_ip GoogleCloudbuildWorkerPool#no_external_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudbuildWorkerPoolNetworkConfigOutputReference <a name="GoogleCloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange">reset_peered_network_ip_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_peered_network_ip_range` <a name="reset_peered_network_ip_range" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resetPeeredNetworkIpRange"></a>

```python
def reset_peered_network_ip_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput">peered_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput">peered_network_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">peered_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">peered_network_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peered_network_input`<sup>Optional</sup> <a name="peered_network_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkInput"></a>

```python
peered_network_input: str
```

- *Type:* str

---

##### `peered_network_ip_range_input`<sup>Optional</sup> <a name="peered_network_ip_range_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRangeInput"></a>

```python
peered_network_ip_range_input: str
```

- *Type:* str

---

##### `peered_network`<sup>Required</sup> <a name="peered_network" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```python
peered_network: str
```

- *Type:* str

---

##### `peered_network_ip_range`<sup>Required</sup> <a name="peered_network_ip_range" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```python
peered_network_ip_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudbuildWorkerPoolNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolNetworkConfig">GoogleCloudbuildWorkerPoolNetworkConfig</a>

---


### GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic">reset_route_all_traffic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_route_all_traffic` <a name="reset_route_all_traffic" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resetRouteAllTraffic"></a>

```python
def reset_route_all_traffic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput">route_all_traffic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">route_all_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `route_all_traffic_input`<sup>Optional</sup> <a name="route_all_traffic_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTrafficInput"></a>

```python
route_all_traffic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `route_all_traffic`<sup>Required</sup> <a name="route_all_traffic" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```python
route_all_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudbuildWorkerPoolPrivateServiceConnect
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolPrivateServiceConnect">GoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---


### GoogleCloudbuildWorkerPoolTimeoutsOutputReference <a name="GoogleCloudbuildWorkerPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudbuildWorkerPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolTimeouts">GoogleCloudbuildWorkerPoolTimeouts</a>]

---


### GoogleCloudbuildWorkerPoolWorkerConfigOutputReference <a name="GoogleCloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloudbuild_worker_pool

googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp">reset_no_external_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_no_external_ip` <a name="reset_no_external_ip" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resetNoExternalIp"></a>

```python
def reset_no_external_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput">no_external_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">no_external_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `no_external_ip_input`<sup>Optional</sup> <a name="no_external_ip_input" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIpInput"></a>

```python
no_external_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `no_external_ip`<sup>Required</sup> <a name="no_external_ip" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```python
no_external_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudbuildWorkerPoolWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildWorkerPool.GoogleCloudbuildWorkerPoolWorkerConfig">GoogleCloudbuildWorkerPoolWorkerConfig</a>

---



