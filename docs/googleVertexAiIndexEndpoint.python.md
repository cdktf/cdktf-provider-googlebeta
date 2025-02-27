# `googleVertexAiIndexEndpoint` Submodule <a name="`googleVertexAiIndexEndpoint` Submodule" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiIndexEndpoint <a name="GoogleVertexAiIndexEndpoint" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint google_vertex_ai_index_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  private_service_connect_config: GoogleVertexAiIndexEndpointPrivateServiceConnectConfig = None,
  project: str = None,
  public_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  timeouts: GoogleVertexAiIndexEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#id GoogleVertexAiIndexEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.network">network</a></code> | <code>str</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.privateServiceConnectConfig">private_service_connect_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#project GoogleVertexAiIndexEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.publicEndpointEnabled">public_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the deployed index will be accessible through public endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the index endpoint. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#display_name GoogleVertexAiIndexEndpoint#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.description"></a>

- *Type:* str

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#description GoogleVertexAiIndexEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#id GoogleVertexAiIndexEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#labels GoogleVertexAiIndexEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.network"></a>

- *Type:* str

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#network GoogleVertexAiIndexEndpoint#network}

---

##### `private_service_connect_config`<sup>Optional</sup> <a name="private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.privateServiceConnectConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#private_service_connect_config GoogleVertexAiIndexEndpoint#private_service_connect_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#project GoogleVertexAiIndexEndpoint#project}.

---

##### `public_endpoint_enabled`<sup>Optional</sup> <a name="public_endpoint_enabled" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.publicEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the deployed index will be accessible through public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#public_endpoint_enabled GoogleVertexAiIndexEndpoint#public_endpoint_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.region"></a>

- *Type:* str

The region of the index endpoint. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#region GoogleVertexAiIndexEndpoint#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#timeouts GoogleVertexAiIndexEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig">put_private_service_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPrivateServiceConnectConfig">reset_private_service_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPublicEndpointEnabled">reset_public_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_private_service_connect_config` <a name="put_private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig"></a>

```python
def put_private_service_connect_config(
  enable_private_service_connect: typing.Union[bool, IResolvable],
  project_allowlist: typing.List[str] = None
) -> None
```

###### `enable_private_service_connect`<sup>Required</sup> <a name="enable_private_service_connect" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig.parameter.enablePrivateServiceConnect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the IndexEndpoint is created without private service access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#enable_private_service_connect GoogleVertexAiIndexEndpoint#enable_private_service_connect}

---

###### `project_allowlist`<sup>Optional</sup> <a name="project_allowlist" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig.parameter.projectAllowlist"></a>

- *Type:* typing.List[str]

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#project_allowlist GoogleVertexAiIndexEndpoint#project_allowlist}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#create GoogleVertexAiIndexEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#delete GoogleVertexAiIndexEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#update GoogleVertexAiIndexEndpoint#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_private_service_connect_config` <a name="reset_private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPrivateServiceConnectConfig"></a>

```python
def reset_private_service_connect_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_public_endpoint_enabled` <a name="reset_public_endpoint_enabled" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPublicEndpointEnabled"></a>

```python
def reset_public_endpoint_enabled() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiIndexEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiIndexEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiIndexEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiIndexEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiIndexEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfig">private_service_connect_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointDomainName">public_endpoint_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference">GoogleVertexAiIndexEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfigInput">private_service_connect_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabledInput">public_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabled">public_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_service_connect_config`<sup>Required</sup> <a name="private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfig"></a>

```python
private_service_connect_config: GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `public_endpoint_domain_name`<sup>Required</sup> <a name="public_endpoint_domain_name" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointDomainName"></a>

```python
public_endpoint_domain_name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeouts"></a>

```python
timeouts: GoogleVertexAiIndexEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference">GoogleVertexAiIndexEndpointTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `private_service_connect_config_input`<sup>Optional</sup> <a name="private_service_connect_config_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfigInput"></a>

```python
private_service_connect_config_input: GoogleVertexAiIndexEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `public_endpoint_enabled_input`<sup>Optional</sup> <a name="public_endpoint_enabled_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabledInput"></a>

```python
public_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleVertexAiIndexEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `public_endpoint_enabled`<sup>Required</sup> <a name="public_endpoint_enabled" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabled"></a>

```python
public_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiIndexEndpointConfig <a name="GoogleVertexAiIndexEndpointConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  private_service_connect_config: GoogleVertexAiIndexEndpointPrivateServiceConnectConfig = None,
  project: str = None,
  public_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  timeouts: GoogleVertexAiIndexEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.description">description</a></code> | <code>str</code> | The description of the Index. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#id GoogleVertexAiIndexEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.network">network</a></code> | <code>str</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.privateServiceConnectConfig">private_service_connect_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#project GoogleVertexAiIndexEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.publicEndpointEnabled">public_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the deployed index will be accessible through public endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.region">region</a></code> | <code>str</code> | The region of the index endpoint. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#display_name GoogleVertexAiIndexEndpoint#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#description GoogleVertexAiIndexEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#id GoogleVertexAiIndexEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#labels GoogleVertexAiIndexEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#network GoogleVertexAiIndexEndpoint#network}

---

##### `private_service_connect_config`<sup>Optional</sup> <a name="private_service_connect_config" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.privateServiceConnectConfig"></a>

```python
private_service_connect_config: GoogleVertexAiIndexEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#private_service_connect_config GoogleVertexAiIndexEndpoint#private_service_connect_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#project GoogleVertexAiIndexEndpoint#project}.

---

##### `public_endpoint_enabled`<sup>Optional</sup> <a name="public_endpoint_enabled" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.publicEndpointEnabled"></a>

```python
public_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the deployed index will be accessible through public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#public_endpoint_enabled GoogleVertexAiIndexEndpoint#public_endpoint_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the index endpoint. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#region GoogleVertexAiIndexEndpoint#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiIndexEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#timeouts GoogleVertexAiIndexEndpoint#timeouts}

---

### GoogleVertexAiIndexEndpointPrivateServiceConnectConfig <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfig" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig(
  enable_private_service_connect: typing.Union[bool, IResolvable],
  project_allowlist: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">enable_private_service_connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the IndexEndpoint is created without private service access. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist">project_allowlist</a></code> | <code>typing.List[str]</code> | A list of Projects from which the forwarding rule will target the service attachment. |

---

##### `enable_private_service_connect`<sup>Required</sup> <a name="enable_private_service_connect" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```python
enable_private_service_connect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the IndexEndpoint is created without private service access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#enable_private_service_connect GoogleVertexAiIndexEndpoint#enable_private_service_connect}

---

##### `project_allowlist`<sup>Optional</sup> <a name="project_allowlist" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```python
project_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#project_allowlist GoogleVertexAiIndexEndpoint#project_allowlist}

---

### GoogleVertexAiIndexEndpointTimeouts <a name="GoogleVertexAiIndexEndpointTimeouts" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#create GoogleVertexAiIndexEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#delete GoogleVertexAiIndexEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#update GoogleVertexAiIndexEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#create GoogleVertexAiIndexEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#delete GoogleVertexAiIndexEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_vertex_ai_index_endpoint#update GoogleVertexAiIndexEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">reset_project_allowlist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_allowlist` <a name="reset_project_allowlist" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```python
def reset_project_allowlist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">enable_private_service_connect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">project_allowlist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">enable_private_service_connect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">project_allowlist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_private_service_connect_input`<sup>Optional</sup> <a name="enable_private_service_connect_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```python
enable_private_service_connect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_allowlist_input`<sup>Optional</sup> <a name="project_allowlist_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```python
project_allowlist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_private_service_connect`<sup>Required</sup> <a name="enable_private_service_connect" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```python
enable_private_service_connect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_allowlist`<sup>Required</sup> <a name="project_allowlist" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```python
project_allowlist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiIndexEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

---


### GoogleVertexAiIndexEndpointTimeoutsOutputReference <a name="GoogleVertexAiIndexEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_index_endpoint

googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVertexAiIndexEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>]

---



