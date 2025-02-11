# `googleIntegrationConnectorsManagedZone` Submodule <a name="`googleIntegrationConnectorsManagedZone` Submodule" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationConnectorsManagedZone <a name="GoogleIntegrationConnectorsManagedZone" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone google_integration_connectors_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_managed_zone

googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: str,
  name: str,
  target_project: str,
  target_vpc: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleIntegrationConnectorsManagedZoneTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.dns">dns</a></code> | <code>str</code> | DNS Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.targetProject">target_project</a></code> | <code>str</code> | The name of the Target Project. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.targetVpc">target_vpc</a></code> | <code>str</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.dns"></a>

- *Type:* str

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#dns GoogleIntegrationConnectorsManagedZone#dns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.name"></a>

- *Type:* str

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#name GoogleIntegrationConnectorsManagedZone#name}

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.targetProject"></a>

- *Type:* str

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#target_project GoogleIntegrationConnectorsManagedZone#target_project}

---

##### `target_vpc`<sup>Required</sup> <a name="target_vpc" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.targetVpc"></a>

- *Type:* str

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#target_vpc GoogleIntegrationConnectorsManagedZone#target_vpc}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.description"></a>

- *Type:* str

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#description GoogleIntegrationConnectorsManagedZone#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#labels GoogleIntegrationConnectorsManagedZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#timeouts GoogleIntegrationConnectorsManagedZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#create GoogleIntegrationConnectorsManagedZone#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#delete GoogleIntegrationConnectorsManagedZone#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#update GoogleIntegrationConnectorsManagedZone#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleIntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_managed_zone

googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_managed_zone

googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_managed_zone

googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_managed_zone

googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleIntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleIntegrationConnectorsManagedZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleIntegrationConnectorsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationConnectorsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference">GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dnsInput">dns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProjectInput">target_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpcInput">target_vpc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dns">dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProject">target_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpc">target_vpc</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeouts"></a>

```python
timeouts: GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference">GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dnsInput"></a>

```python
dns_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_project_input`<sup>Optional</sup> <a name="target_project_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProjectInput"></a>

```python
target_project_input: str
```

- *Type:* str

---

##### `target_vpc_input`<sup>Optional</sup> <a name="target_vpc_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpcInput"></a>

```python
target_vpc_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIntegrationConnectorsManagedZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.dns"></a>

```python
dns: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

---

##### `target_vpc`<sup>Required</sup> <a name="target_vpc" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.targetVpc"></a>

```python
target_vpc: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationConnectorsManagedZoneConfig <a name="GoogleIntegrationConnectorsManagedZoneConfig" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_managed_zone

googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: str,
  name: str,
  target_project: str,
  target_vpc: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleIntegrationConnectorsManagedZoneTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dns">dns</a></code> | <code>str</code> | DNS Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.name">name</a></code> | <code>str</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetProject">target_project</a></code> | <code>str</code> | The name of the Target Project. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetVpc">target_vpc</a></code> | <code>str</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.dns"></a>

```python
dns: str
```

- *Type:* str

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#dns GoogleIntegrationConnectorsManagedZone#dns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#name GoogleIntegrationConnectorsManagedZone#name}

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#target_project GoogleIntegrationConnectorsManagedZone#target_project}

---

##### `target_vpc`<sup>Required</sup> <a name="target_vpc" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.targetVpc"></a>

```python
target_vpc: str
```

- *Type:* str

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#target_vpc GoogleIntegrationConnectorsManagedZone#target_vpc}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#description GoogleIntegrationConnectorsManagedZone#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#id GoogleIntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#labels GoogleIntegrationConnectorsManagedZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#project GoogleIntegrationConnectorsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneConfig.property.timeouts"></a>

```python
timeouts: GoogleIntegrationConnectorsManagedZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#timeouts GoogleIntegrationConnectorsManagedZone#timeouts}

---

### GoogleIntegrationConnectorsManagedZoneTimeouts <a name="GoogleIntegrationConnectorsManagedZoneTimeouts" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_managed_zone

googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#create GoogleIntegrationConnectorsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#delete GoogleIntegrationConnectorsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#update GoogleIntegrationConnectorsManagedZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#create GoogleIntegrationConnectorsManagedZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#delete GoogleIntegrationConnectorsManagedZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_integration_connectors_managed_zone#update GoogleIntegrationConnectorsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference <a name="GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_integration_connectors_managed_zone

googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIntegrationConnectorsManagedZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIntegrationConnectorsManagedZone.GoogleIntegrationConnectorsManagedZoneTimeouts">GoogleIntegrationConnectorsManagedZoneTimeouts</a>]

---



