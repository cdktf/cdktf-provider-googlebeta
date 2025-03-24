# `googleIntegrationConnectorsEndpointAttachment` Submodule <a name="`googleIntegrationConnectorsEndpointAttachment` Submodule" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationConnectorsEndpointAttachment <a name="GoogleIntegrationConnectorsEndpointAttachment" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment google_integration_connectors_endpoint_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_endpoint_attachment

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment(
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
  service_attachment: str,
  description: str = None,
  endpoint_global_access: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleIntegrationConnectorsEndpointAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.location">location</a></code> | <code>str</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.serviceAttachment">service_attachment</a></code> | <code>str</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.endpointGlobalAccess">endpoint_global_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.location"></a>

- *Type:* str

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#location GoogleIntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.name"></a>

- *Type:* str

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#name GoogleIntegrationConnectorsEndpointAttachment#name}

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.serviceAttachment"></a>

- *Type:* str

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#service_attachment GoogleIntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.description"></a>

- *Type:* str

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#description GoogleIntegrationConnectorsEndpointAttachment#description}

---

##### `endpoint_global_access`<sup>Optional</sup> <a name="endpoint_global_access" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.endpointGlobalAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#endpoint_global_access GoogleIntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#labels GoogleIntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#timeouts GoogleIntegrationConnectorsEndpointAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess">reset_endpoint_global_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#create GoogleIntegrationConnectorsEndpointAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#delete GoogleIntegrationConnectorsEndpointAttachment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#update GoogleIntegrationConnectorsEndpointAttachment#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_endpoint_global_access` <a name="reset_endpoint_global_access" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess"></a>

```python
def reset_endpoint_global_access() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_endpoint_attachment

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_endpoint_attachment

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_endpoint_attachment

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_endpoint_attachment

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIntegrationConnectorsEndpointAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIntegrationConnectorsEndpointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationConnectorsEndpointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointIp">endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput">endpoint_global_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput">service_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess">endpoint_global_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint_ip`<sup>Required</sup> <a name="endpoint_ip" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointIp"></a>

```python
endpoint_ip: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeouts"></a>

```python
timeouts: GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_global_access_input`<sup>Optional</sup> <a name="endpoint_global_access_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput"></a>

```python
endpoint_global_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_attachment_input`<sup>Optional</sup> <a name="service_attachment_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput"></a>

```python
service_attachment_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIntegrationConnectorsEndpointAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint_global_access`<sup>Required</sup> <a name="endpoint_global_access" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess"></a>

```python
endpoint_global_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationConnectorsEndpointAttachmentConfig <a name="GoogleIntegrationConnectorsEndpointAttachmentConfig" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_endpoint_attachment

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  service_attachment: str,
  description: str = None,
  endpoint_global_access: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleIntegrationConnectorsEndpointAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.location">location</a></code> | <code>str</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.name">name</a></code> | <code>str</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess">endpoint_global_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#location GoogleIntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#name GoogleIntegrationConnectorsEndpointAttachment#name}

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#service_attachment GoogleIntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#description GoogleIntegrationConnectorsEndpointAttachment#description}

---

##### `endpoint_global_access`<sup>Optional</sup> <a name="endpoint_global_access" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess"></a>

```python
endpoint_global_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#endpoint_global_access GoogleIntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#id GoogleIntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#labels GoogleIntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#project GoogleIntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentConfig.property.timeouts"></a>

```python
timeouts: GoogleIntegrationConnectorsEndpointAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#timeouts GoogleIntegrationConnectorsEndpointAttachment#timeouts}

---

### GoogleIntegrationConnectorsEndpointAttachmentTimeouts <a name="GoogleIntegrationConnectorsEndpointAttachmentTimeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_endpoint_attachment

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#create GoogleIntegrationConnectorsEndpointAttachment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#delete GoogleIntegrationConnectorsEndpointAttachment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#update GoogleIntegrationConnectorsEndpointAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#create GoogleIntegrationConnectorsEndpointAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#delete GoogleIntegrationConnectorsEndpointAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_integration_connectors_endpoint_attachment#update GoogleIntegrationConnectorsEndpointAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference <a name="GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_endpoint_attachment

googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIntegrationConnectorsEndpointAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsEndpointAttachment.GoogleIntegrationConnectorsEndpointAttachmentTimeouts">GoogleIntegrationConnectorsEndpointAttachmentTimeouts</a>]

---



