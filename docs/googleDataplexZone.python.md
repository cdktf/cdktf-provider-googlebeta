# `googleDataplexZone` Submodule <a name="`googleDataplexZone` Submodule" id="@cdktf/provider-google-beta.googleDataplexZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexZone <a name="GoogleDataplexZone" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone google_dataplex_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZone(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  discovery_spec: GoogleDataplexZoneDiscoverySpec,
  lake: str,
  location: str,
  name: str,
  resource_spec: GoogleDataplexZoneResourceSpec,
  type: str,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDataplexZoneTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.discoverySpec">discovery_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.lake">lake</a></code> | <code>str</code> | The lake for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.resourceSpec">resource_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.type">type</a></code> | <code>str</code> | Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Description of the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#id GoogleDataplexZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined labels for the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `discovery_spec`<sup>Required</sup> <a name="discovery_spec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.discoverySpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#discovery_spec GoogleDataplexZone#discovery_spec}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.lake"></a>

- *Type:* str

The lake for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#lake GoogleDataplexZone#lake}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#location GoogleDataplexZone#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.name"></a>

- *Type:* str

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#name GoogleDataplexZone#name}

---

##### `resource_spec`<sup>Required</sup> <a name="resource_spec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.resourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#resource_spec GoogleDataplexZone#resource_spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.type"></a>

- *Type:* str

Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#type GoogleDataplexZone#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.description"></a>

- *Type:* str

Optional. Description of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#description GoogleDataplexZone#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#display_name GoogleDataplexZone#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#id GoogleDataplexZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. User defined labels for the zone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#labels GoogleDataplexZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#project GoogleDataplexZone#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#timeouts GoogleDataplexZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec">put_discovery_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putResourceSpec">put_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_discovery_spec` <a name="put_discovery_spec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec"></a>

```python
def put_discovery_spec(
  enabled: typing.Union[bool, IResolvable],
  csv_options: GoogleDataplexZoneDiscoverySpecCsvOptions = None,
  exclude_patterns: typing.List[str] = None,
  include_patterns: typing.List[str] = None,
  json_options: GoogleDataplexZoneDiscoverySpecJsonOptions = None,
  schedule: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#enabled GoogleDataplexZone#enabled}

---

###### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec.parameter.csvOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#csv_options GoogleDataplexZone#csv_options}

---

###### `exclude_patterns`<sup>Optional</sup> <a name="exclude_patterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec.parameter.excludePatterns"></a>

- *Type:* typing.List[str]

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#exclude_patterns GoogleDataplexZone#exclude_patterns}

---

###### `include_patterns`<sup>Optional</sup> <a name="include_patterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec.parameter.includePatterns"></a>

- *Type:* typing.List[str]

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#include_patterns GoogleDataplexZone#include_patterns}

---

###### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec.parameter.jsonOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#json_options GoogleDataplexZone#json_options}

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec.parameter.schedule"></a>

- *Type:* str

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#schedule GoogleDataplexZone#schedule}

---

##### `put_resource_spec` <a name="put_resource_spec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putResourceSpec"></a>

```python
def put_resource_spec(
  location_type: str
) -> None
```

###### `location_type`<sup>Required</sup> <a name="location_type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putResourceSpec.parameter.locationType"></a>

- *Type:* str

Required.

Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#location_type GoogleDataplexZone#location_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#create GoogleDataplexZone#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#delete GoogleDataplexZone#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#update GoogleDataplexZone#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataplexZone resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataplexZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataplexZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataplexZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.assetStatus">asset_status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList">GoogleDataplexZoneAssetStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpec">discovery_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference">GoogleDataplexZoneDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpec">resource_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference">GoogleDataplexZoneResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference">GoogleDataplexZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpecInput">discovery_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lakeInput">lake_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpecInput">resource_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lake">lake</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_status`<sup>Required</sup> <a name="asset_status" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.assetStatus"></a>

```python
asset_status: GoogleDataplexZoneAssetStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList">GoogleDataplexZoneAssetStatusList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `discovery_spec`<sup>Required</sup> <a name="discovery_spec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpec"></a>

```python
discovery_spec: GoogleDataplexZoneDiscoverySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference">GoogleDataplexZoneDiscoverySpecOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `resource_spec`<sup>Required</sup> <a name="resource_spec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpec"></a>

```python
resource_spec: GoogleDataplexZoneResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference">GoogleDataplexZoneResourceSpecOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeouts"></a>

```python
timeouts: GoogleDataplexZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference">GoogleDataplexZoneTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discovery_spec_input`<sup>Optional</sup> <a name="discovery_spec_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpecInput"></a>

```python
discovery_spec_input: GoogleDataplexZoneDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lake_input`<sup>Optional</sup> <a name="lake_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lakeInput"></a>

```python
lake_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_spec_input`<sup>Optional</sup> <a name="resource_spec_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpecInput"></a>

```python
resource_spec_input: GoogleDataplexZoneResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataplexZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lake"></a>

```python
lake: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexZoneAssetStatus <a name="GoogleDataplexZoneAssetStatus" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneAssetStatus()
```


### GoogleDataplexZoneConfig <a name="GoogleDataplexZoneConfig" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  discovery_spec: GoogleDataplexZoneDiscoverySpec,
  lake: str,
  location: str,
  name: str,
  resource_spec: GoogleDataplexZoneResourceSpec,
  type: str,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDataplexZoneTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.discoverySpec">discovery_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lake">lake</a></code> | <code>str</code> | The lake for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.name">name</a></code> | <code>str</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.resourceSpec">resource_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.type">type</a></code> | <code>str</code> | Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.description">description</a></code> | <code>str</code> | Optional. Description of the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#id GoogleDataplexZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined labels for the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `discovery_spec`<sup>Required</sup> <a name="discovery_spec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.discoverySpec"></a>

```python
discovery_spec: GoogleDataplexZoneDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#discovery_spec GoogleDataplexZone#discovery_spec}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lake"></a>

```python
lake: str
```

- *Type:* str

The lake for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#lake GoogleDataplexZone#lake}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#location GoogleDataplexZone#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#name GoogleDataplexZone#name}

---

##### `resource_spec`<sup>Required</sup> <a name="resource_spec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.resourceSpec"></a>

```python
resource_spec: GoogleDataplexZoneResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#resource_spec GoogleDataplexZone#resource_spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#type GoogleDataplexZone#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#description GoogleDataplexZone#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#display_name GoogleDataplexZone#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#id GoogleDataplexZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User defined labels for the zone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#labels GoogleDataplexZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#project GoogleDataplexZone#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.timeouts"></a>

```python
timeouts: GoogleDataplexZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#timeouts GoogleDataplexZone#timeouts}

---

### GoogleDataplexZoneDiscoverySpec <a name="GoogleDataplexZoneDiscoverySpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneDiscoverySpec(
  enabled: typing.Union[bool, IResolvable],
  csv_options: GoogleDataplexZoneDiscoverySpecCsvOptions = None,
  exclude_patterns: typing.List[str] = None,
  include_patterns: typing.List[str] = None,
  json_options: GoogleDataplexZoneDiscoverySpecJsonOptions = None,
  schedule: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Required. Whether discovery is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.excludePatterns">exclude_patterns</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.includePatterns">include_patterns</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.schedule">schedule</a></code> | <code>str</code> | Optional. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#enabled GoogleDataplexZone#enabled}

---

##### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.csvOptions"></a>

```python
csv_options: GoogleDataplexZoneDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#csv_options GoogleDataplexZone#csv_options}

---

##### `exclude_patterns`<sup>Optional</sup> <a name="exclude_patterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.excludePatterns"></a>

```python
exclude_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#exclude_patterns GoogleDataplexZone#exclude_patterns}

---

##### `include_patterns`<sup>Optional</sup> <a name="include_patterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.includePatterns"></a>

```python
include_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#include_patterns GoogleDataplexZone#include_patterns}

---

##### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.jsonOptions"></a>

```python
json_options: GoogleDataplexZoneDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#json_options GoogleDataplexZone#json_options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#schedule GoogleDataplexZone#schedule}

---

### GoogleDataplexZoneDiscoverySpecCsvOptions <a name="GoogleDataplexZoneDiscoverySpecCsvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions(
  delimiter: str = None,
  disable_type_inference: typing.Union[bool, IResolvable] = None,
  encoding: str = None,
  header_rows: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.delimiter">delimiter</a></code> | <code>str</code> | Optional. The delimiter being used to separate values. This defaults to ','. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference">disable_type_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.encoding">encoding</a></code> | <code>str</code> | Optional. The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.headerRows">header_rows</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#delimiter GoogleDataplexZone#delimiter}

---

##### `disable_type_inference`<sup>Optional</sup> <a name="disable_type_inference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference"></a>

```python
disable_type_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}

---

##### `header_rows`<sup>Optional</sup> <a name="header_rows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.headerRows"></a>

```python
header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#header_rows GoogleDataplexZone#header_rows}

---

### GoogleDataplexZoneDiscoverySpecJsonOptions <a name="GoogleDataplexZoneDiscoverySpecJsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions(
  disable_type_inference: typing.Union[bool, IResolvable] = None,
  encoding: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference">disable_type_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.encoding">encoding</a></code> | <code>str</code> | Optional. The character encoding of the data. The default is UTF-8. |

---

##### `disable_type_inference`<sup>Optional</sup> <a name="disable_type_inference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference"></a>

```python
disable_type_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}

---

### GoogleDataplexZoneResourceSpec <a name="GoogleDataplexZoneResourceSpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneResourceSpec(
  location_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec.property.locationType">location_type</a></code> | <code>str</code> | Required. |

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

Required.

Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#location_type GoogleDataplexZone#location_type}

---

### GoogleDataplexZoneTimeouts <a name="GoogleDataplexZoneTimeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#create GoogleDataplexZone#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#delete GoogleDataplexZone#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#update GoogleDataplexZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#create GoogleDataplexZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#delete GoogleDataplexZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#update GoogleDataplexZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexZoneAssetStatusList <a name="GoogleDataplexZoneAssetStatusList" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneAssetStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataplexZoneAssetStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataplexZoneAssetStatusOutputReference <a name="GoogleDataplexZoneAssetStatusOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.activeAssets">active_assets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets">security_policy_applying_assets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus">GoogleDataplexZoneAssetStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_assets`<sup>Required</sup> <a name="active_assets" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.activeAssets"></a>

```python
active_assets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_policy_applying_assets`<sup>Required</sup> <a name="security_policy_applying_assets" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets"></a>

```python
security_policy_applying_assets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexZoneAssetStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus">GoogleDataplexZoneAssetStatus</a>

---


### GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference <a name="GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference">reset_disable_type_inference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows">reset_header_rows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_disable_type_inference` <a name="reset_disable_type_inference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference"></a>

```python
def reset_disable_type_inference() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_header_rows` <a name="reset_header_rows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows"></a>

```python
def reset_header_rows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput">disable_type_inference_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput">header_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference">disable_type_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows">header_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `disable_type_inference_input`<sup>Optional</sup> <a name="disable_type_inference_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput"></a>

```python
disable_type_inference_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `header_rows_input`<sup>Optional</sup> <a name="header_rows_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput"></a>

```python
header_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `disable_type_inference`<sup>Required</sup> <a name="disable_type_inference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference"></a>

```python
disable_type_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `header_rows`<sup>Required</sup> <a name="header_rows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows"></a>

```python
header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexZoneDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

---


### GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference <a name="GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference">reset_disable_type_inference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_type_inference` <a name="reset_disable_type_inference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference"></a>

```python
def reset_disable_type_inference() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput">disable_type_inference_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference">disable_type_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_type_inference_input`<sup>Optional</sup> <a name="disable_type_inference_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput"></a>

```python
disable_type_inference_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `disable_type_inference`<sup>Required</sup> <a name="disable_type_inference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference"></a>

```python
disable_type_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexZoneDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

---


### GoogleDataplexZoneDiscoverySpecOutputReference <a name="GoogleDataplexZoneDiscoverySpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions">put_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions">put_json_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetCsvOptions">reset_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetExcludePatterns">reset_exclude_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetIncludePatterns">reset_include_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetJsonOptions">reset_json_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv_options` <a name="put_csv_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions"></a>

```python
def put_csv_options(
  delimiter: str = None,
  disable_type_inference: typing.Union[bool, IResolvable] = None,
  encoding: str = None,
  header_rows: typing.Union[int, float] = None
) -> None
```

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions.parameter.delimiter"></a>

- *Type:* str

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#delimiter GoogleDataplexZone#delimiter}

---

###### `disable_type_inference`<sup>Optional</sup> <a name="disable_type_inference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions.parameter.disableTypeInference"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions.parameter.encoding"></a>

- *Type:* str

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}

---

###### `header_rows`<sup>Optional</sup> <a name="header_rows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions.parameter.headerRows"></a>

- *Type:* typing.Union[int, float]

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#header_rows GoogleDataplexZone#header_rows}

---

##### `put_json_options` <a name="put_json_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions"></a>

```python
def put_json_options(
  disable_type_inference: typing.Union[bool, IResolvable] = None,
  encoding: str = None
) -> None
```

###### `disable_type_inference`<sup>Optional</sup> <a name="disable_type_inference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions.parameter.disableTypeInference"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions.parameter.encoding"></a>

- *Type:* str

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}

---

##### `reset_csv_options` <a name="reset_csv_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetCsvOptions"></a>

```python
def reset_csv_options() -> None
```

##### `reset_exclude_patterns` <a name="reset_exclude_patterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetExcludePatterns"></a>

```python
def reset_exclude_patterns() -> None
```

##### `reset_include_patterns` <a name="reset_include_patterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetIncludePatterns"></a>

```python
def reset_include_patterns() -> None
```

##### `reset_json_options` <a name="reset_json_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetJsonOptions"></a>

```python
def reset_json_options() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference">GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference">GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput">csv_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput">exclude_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatternsInput">include_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput">json_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatterns">exclude_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatterns">include_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv_options`<sup>Required</sup> <a name="csv_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptions"></a>

```python
csv_options: GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference">GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference</a>

---

##### `json_options`<sup>Required</sup> <a name="json_options" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptions"></a>

```python
json_options: GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference">GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference</a>

---

##### `csv_options_input`<sup>Optional</sup> <a name="csv_options_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput"></a>

```python
csv_options_input: GoogleDataplexZoneDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_patterns_input`<sup>Optional</sup> <a name="exclude_patterns_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput"></a>

```python
exclude_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_patterns_input`<sup>Optional</sup> <a name="include_patterns_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatternsInput"></a>

```python
include_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_options_input`<sup>Optional</sup> <a name="json_options_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput"></a>

```python
json_options_input: GoogleDataplexZoneDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_patterns`<sup>Required</sup> <a name="exclude_patterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatterns"></a>

```python
exclude_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_patterns`<sup>Required</sup> <a name="include_patterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatterns"></a>

```python
include_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexZoneDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

---


### GoogleDataplexZoneResourceSpecOutputReference <a name="GoogleDataplexZoneResourceSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationTypeInput">location_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationType">location_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_type_input`<sup>Optional</sup> <a name="location_type_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationTypeInput"></a>

```python
location_type_input: str
```

- *Type:* str

---

##### `location_type`<sup>Required</sup> <a name="location_type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationType"></a>

```python
location_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexZoneResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

---


### GoogleDataplexZoneTimeoutsOutputReference <a name="GoogleDataplexZoneTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_zone

googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataplexZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>]

---



