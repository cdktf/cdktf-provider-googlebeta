# `googleChronicleDataAccessScope` Submodule <a name="`googleChronicleDataAccessScope` Submodule" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataAccessScope <a name="GoogleChronicleDataAccessScope" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope google_chronicle_data_access_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScope(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_access_scope_id: str,
  instance: str,
  location: str,
  allow_all: typing.Union[bool, IResolvable] = None,
  allowed_data_access_labels: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeAllowedDataAccessLabels]] = None,
  denied_data_access_labels: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeDeniedDataAccessLabels]] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleChronicleDataAccessScopeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.dataAccessScopeId">data_access_scope_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.allowAll">allow_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.allowedDataAccessLabels">allowed_data_access_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]]</code> | allowed_data_access_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.deniedDataAccessLabels">denied_data_access_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]]</code> | denied_data_access_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. A description of the data access scope for a human reader. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#id GoogleChronicleDataAccessScope#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#project GoogleChronicleDataAccessScope#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_access_scope_id`<sup>Required</sup> <a name="data_access_scope_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.dataAccessScopeId"></a>

- *Type:* str

Required.

The user provided scope id which will become the last part of the name
of the scope resource.
Needs to be compliant with https://google.aip.dev/122

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#data_access_scope_id GoogleChronicleDataAccessScope#data_access_scope_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.instance"></a>

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#instance GoogleChronicleDataAccessScope#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#location GoogleChronicleDataAccessScope#location}

---

##### `allow_all`<sup>Optional</sup> <a name="allow_all" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.allowAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether or not the scope allows all labels, allow_all and
allowed_data_access_labels are mutually exclusive and one of them must be
present. denied_data_access_labels can still be used along with allow_all.
When combined with denied_data_access_labels, access will be granted to all
data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
A customer with scope with denied labels A and B and allow_all will be able
to see all data except data labeled with A and data labeled with B and data
with labels A and B.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#allow_all GoogleChronicleDataAccessScope#allow_all}

---

##### `allowed_data_access_labels`<sup>Optional</sup> <a name="allowed_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.allowedDataAccessLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

allowed_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#allowed_data_access_labels GoogleChronicleDataAccessScope#allowed_data_access_labels}

---

##### `denied_data_access_labels`<sup>Optional</sup> <a name="denied_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.deniedDataAccessLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

denied_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#denied_data_access_labels GoogleChronicleDataAccessScope#denied_data_access_labels}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.description"></a>

- *Type:* str

Optional. A description of the data access scope for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#description GoogleChronicleDataAccessScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#id GoogleChronicleDataAccessScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#project GoogleChronicleDataAccessScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#timeouts GoogleChronicleDataAccessScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putAllowedDataAccessLabels">put_allowed_data_access_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putDeniedDataAccessLabels">put_denied_data_access_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowAll">reset_allow_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowedDataAccessLabels">reset_allowed_data_access_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDeniedDataAccessLabels">reset_denied_data_access_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowed_data_access_labels` <a name="put_allowed_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putAllowedDataAccessLabels"></a>

```python
def put_allowed_data_access_labels(
  value: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeAllowedDataAccessLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putAllowedDataAccessLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

---

##### `put_denied_data_access_labels` <a name="put_denied_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putDeniedDataAccessLabels"></a>

```python
def put_denied_data_access_labels(
  value: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeDeniedDataAccessLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putDeniedDataAccessLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#create GoogleChronicleDataAccessScope#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#delete GoogleChronicleDataAccessScope#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#update GoogleChronicleDataAccessScope#update}.

---

##### `reset_allow_all` <a name="reset_allow_all" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowAll"></a>

```python
def reset_allow_all() -> None
```

##### `reset_allowed_data_access_labels` <a name="reset_allowed_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetAllowedDataAccessLabels"></a>

```python
def reset_allowed_data_access_labels() -> None
```

##### `reset_denied_data_access_labels` <a name="reset_denied_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDeniedDataAccessLabels"></a>

```python
def reset_denied_data_access_labels() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleChronicleDataAccessScope resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleChronicleDataAccessScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleDataAccessScope to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleDataAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabels">allowed_data_access_labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.author">author</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabels">denied_data_access_labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference">GoogleChronicleDataAccessScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAllInput">allow_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabelsInput">allowed_data_access_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeIdInput">data_access_scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabelsInput">denied_data_access_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAll">allow_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeId">data_access_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_data_access_labels`<sup>Required</sup> <a name="allowed_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabels"></a>

```python
allowed_data_access_labels: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList</a>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.author"></a>

```python
author: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `denied_data_access_labels`<sup>Required</sup> <a name="denied_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabels"></a>

```python
denied_data_access_labels: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeouts"></a>

```python
timeouts: GoogleChronicleDataAccessScopeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference">GoogleChronicleDataAccessScopeTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allow_all_input`<sup>Optional</sup> <a name="allow_all_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAllInput"></a>

```python
allow_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_data_access_labels_input`<sup>Optional</sup> <a name="allowed_data_access_labels_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowedDataAccessLabelsInput"></a>

```python
allowed_data_access_labels_input: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeAllowedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

---

##### `data_access_scope_id_input`<sup>Optional</sup> <a name="data_access_scope_id_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeIdInput"></a>

```python
data_access_scope_id_input: str
```

- *Type:* str

---

##### `denied_data_access_labels_input`<sup>Optional</sup> <a name="denied_data_access_labels_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.deniedDataAccessLabelsInput"></a>

```python
denied_data_access_labels_input: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeDeniedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleChronicleDataAccessScopeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>]

---

##### `allow_all`<sup>Required</sup> <a name="allow_all" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.allowAll"></a>

```python
allow_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_access_scope_id`<sup>Required</sup> <a name="data_access_scope_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.dataAccessScopeId"></a>

```python
data_access_scope_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataAccessScopeAllowedDataAccessLabels <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels(
  asset_namespace: str = None,
  data_access_label: str = None,
  ingestion_label: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel = None,
  log_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace">asset_namespace</a></code> | <code>str</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel">data_access_label</a></code> | <code>str</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel">ingestion_label</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.logType">log_type</a></code> | <code>str</code> | The name of the log type. |

---

##### `asset_namespace`<sup>Optional</sup> <a name="asset_namespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace"></a>

```python
asset_namespace: str
```

- *Type:* str

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#asset_namespace GoogleChronicleDataAccessScope#asset_namespace}

---

##### `data_access_label`<sup>Optional</sup> <a name="data_access_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel"></a>

```python
data_access_label: str
```

- *Type:* str

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#data_access_label GoogleChronicleDataAccessScope#data_access_label}

---

##### `ingestion_label`<sup>Optional</sup> <a name="ingestion_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel"></a>

```python
ingestion_label: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label GoogleChronicleDataAccessScope#ingestion_label}

---

##### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels.property.logType"></a>

```python
log_type: str
```

- *Type:* str

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#log_type GoogleChronicleDataAccessScope#log_type}

---

### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel(
  ingestion_label_key: str,
  ingestion_label_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">ingestion_label_key</a></code> | <code>str</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">ingestion_label_value</a></code> | <code>str</code> | Optional. |

---

##### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```python
ingestion_label_key: str
```

- *Type:* str

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}

---

##### `ingestion_label_value`<sup>Optional</sup> <a name="ingestion_label_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```python
ingestion_label_value: str
```

- *Type:* str

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}

---

### GoogleChronicleDataAccessScopeConfig <a name="GoogleChronicleDataAccessScopeConfig" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_access_scope_id: str,
  instance: str,
  location: str,
  allow_all: typing.Union[bool, IResolvable] = None,
  allowed_data_access_labels: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeAllowedDataAccessLabels]] = None,
  denied_data_access_labels: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeDeniedDataAccessLabels]] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleChronicleDataAccessScopeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dataAccessScopeId">data_access_scope_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowAll">allow_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowedDataAccessLabels">allowed_data_access_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]]</code> | allowed_data_access_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.deniedDataAccessLabels">denied_data_access_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]]</code> | denied_data_access_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.description">description</a></code> | <code>str</code> | Optional. A description of the data access scope for a human reader. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#id GoogleChronicleDataAccessScope#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#project GoogleChronicleDataAccessScope#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_access_scope_id`<sup>Required</sup> <a name="data_access_scope_id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.dataAccessScopeId"></a>

```python
data_access_scope_id: str
```

- *Type:* str

Required.

The user provided scope id which will become the last part of the name
of the scope resource.
Needs to be compliant with https://google.aip.dev/122

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#data_access_scope_id GoogleChronicleDataAccessScope#data_access_scope_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#instance GoogleChronicleDataAccessScope#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#location GoogleChronicleDataAccessScope#location}

---

##### `allow_all`<sup>Optional</sup> <a name="allow_all" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowAll"></a>

```python
allow_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether or not the scope allows all labels, allow_all and
allowed_data_access_labels are mutually exclusive and one of them must be
present. denied_data_access_labels can still be used along with allow_all.
When combined with denied_data_access_labels, access will be granted to all
data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
A customer with scope with denied labels A and B and allow_all will be able
to see all data except data labeled with A and data labeled with B and data
with labels A and B.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#allow_all GoogleChronicleDataAccessScope#allow_all}

---

##### `allowed_data_access_labels`<sup>Optional</sup> <a name="allowed_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.allowedDataAccessLabels"></a>

```python
allowed_data_access_labels: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeAllowedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

allowed_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#allowed_data_access_labels GoogleChronicleDataAccessScope#allowed_data_access_labels}

---

##### `denied_data_access_labels`<sup>Optional</sup> <a name="denied_data_access_labels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.deniedDataAccessLabels"></a>

```python
denied_data_access_labels: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeDeniedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

denied_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#denied_data_access_labels GoogleChronicleDataAccessScope#denied_data_access_labels}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A description of the data access scope for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#description GoogleChronicleDataAccessScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#id GoogleChronicleDataAccessScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#project GoogleChronicleDataAccessScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleDataAccessScopeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#timeouts GoogleChronicleDataAccessScope#timeouts}

---

### GoogleChronicleDataAccessScopeDeniedDataAccessLabels <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabels" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels(
  asset_namespace: str = None,
  data_access_label: str = None,
  ingestion_label: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel = None,
  log_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace">asset_namespace</a></code> | <code>str</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel">data_access_label</a></code> | <code>str</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel">ingestion_label</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.logType">log_type</a></code> | <code>str</code> | The name of the log type. |

---

##### `asset_namespace`<sup>Optional</sup> <a name="asset_namespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace"></a>

```python
asset_namespace: str
```

- *Type:* str

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#asset_namespace GoogleChronicleDataAccessScope#asset_namespace}

---

##### `data_access_label`<sup>Optional</sup> <a name="data_access_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel"></a>

```python
data_access_label: str
```

- *Type:* str

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#data_access_label GoogleChronicleDataAccessScope#data_access_label}

---

##### `ingestion_label`<sup>Optional</sup> <a name="ingestion_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel"></a>

```python
ingestion_label: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label GoogleChronicleDataAccessScope#ingestion_label}

---

##### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels.property.logType"></a>

```python
log_type: str
```

- *Type:* str

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#log_type GoogleChronicleDataAccessScope#log_type}

---

### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel(
  ingestion_label_key: str,
  ingestion_label_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">ingestion_label_key</a></code> | <code>str</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">ingestion_label_value</a></code> | <code>str</code> | Optional. |

---

##### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```python
ingestion_label_key: str
```

- *Type:* str

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}

---

##### `ingestion_label_value`<sup>Optional</sup> <a name="ingestion_label_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```python
ingestion_label_value: str
```

- *Type:* str

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}

---

### GoogleChronicleDataAccessScopeTimeouts <a name="GoogleChronicleDataAccessScopeTimeouts" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#create GoogleChronicleDataAccessScope#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#delete GoogleChronicleDataAccessScope#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#update GoogleChronicleDataAccessScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#create GoogleChronicleDataAccessScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#delete GoogleChronicleDataAccessScope#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#update GoogleChronicleDataAccessScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">reset_ingestion_label_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ingestion_label_value` <a name="reset_ingestion_label_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```python
def reset_ingestion_label_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">ingestion_label_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">ingestion_label_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">ingestion_label_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">ingestion_label_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingestion_label_key_input`<sup>Optional</sup> <a name="ingestion_label_key_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```python
ingestion_label_key_input: str
```

- *Type:* str

---

##### `ingestion_label_value_input`<sup>Optional</sup> <a name="ingestion_label_value_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```python
ingestion_label_value_input: str
```

- *Type:* str

---

##### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```python
ingestion_label_key: str
```

- *Type:* str

---

##### `ingestion_label_value`<sup>Required</sup> <a name="ingestion_label_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```python
ingestion_label_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---


### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeAllowedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

---


### GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference <a name="GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel">put_ingestion_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace">reset_asset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel">reset_data_access_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel">reset_ingestion_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType">reset_log_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ingestion_label` <a name="put_ingestion_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```python
def put_ingestion_label(
  ingestion_label_key: str,
  ingestion_label_value: str = None
) -> None
```

###### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel.parameter.ingestionLabelKey"></a>

- *Type:* str

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}

---

###### `ingestion_label_value`<sup>Optional</sup> <a name="ingestion_label_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel.parameter.ingestionLabelValue"></a>

- *Type:* str

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}

---

##### `reset_asset_namespace` <a name="reset_asset_namespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```python
def reset_asset_namespace() -> None
```

##### `reset_data_access_label` <a name="reset_data_access_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```python
def reset_data_access_label() -> None
```

##### `reset_ingestion_label` <a name="reset_ingestion_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```python
def reset_ingestion_label() -> None
```

##### `reset_log_type` <a name="reset_log_type" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType"></a>

```python
def reset_log_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel">ingestion_label</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput">asset_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput">data_access_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput">ingestion_label_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace">asset_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel">data_access_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ingestion_label`<sup>Required</sup> <a name="ingestion_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```python
ingestion_label: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `asset_namespace_input`<sup>Optional</sup> <a name="asset_namespace_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```python
asset_namespace_input: str
```

- *Type:* str

---

##### `data_access_label_input`<sup>Optional</sup> <a name="data_access_label_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```python
data_access_label_input: str
```

- *Type:* str

---

##### `ingestion_label_input`<sup>Optional</sup> <a name="ingestion_label_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```python
ingestion_label_input: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `asset_namespace`<sup>Required</sup> <a name="asset_namespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```python
asset_namespace: str
```

- *Type:* str

---

##### `data_access_label`<sup>Required</sup> <a name="data_access_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```python
data_access_label: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleChronicleDataAccessScopeAllowedDataAccessLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeAllowedDataAccessLabels">GoogleChronicleDataAccessScopeAllowedDataAccessLabels</a>]

---


### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">reset_ingestion_label_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ingestion_label_value` <a name="reset_ingestion_label_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```python
def reset_ingestion_label_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">ingestion_label_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">ingestion_label_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">ingestion_label_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">ingestion_label_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingestion_label_key_input`<sup>Optional</sup> <a name="ingestion_label_key_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```python
ingestion_label_key_input: str
```

- *Type:* str

---

##### `ingestion_label_value_input`<sup>Optional</sup> <a name="ingestion_label_value_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```python
ingestion_label_value_input: str
```

- *Type:* str

---

##### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```python
ingestion_label_key: str
```

- *Type:* str

---

##### `ingestion_label_value`<sup>Required</sup> <a name="ingestion_label_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```python
ingestion_label_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---


### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleChronicleDataAccessScopeDeniedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

---


### GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference <a name="GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel">put_ingestion_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace">reset_asset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel">reset_data_access_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel">reset_ingestion_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType">reset_log_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ingestion_label` <a name="put_ingestion_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```python
def put_ingestion_label(
  ingestion_label_key: str,
  ingestion_label_value: str = None
) -> None
```

###### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel.parameter.ingestionLabelKey"></a>

- *Type:* str

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}

---

###### `ingestion_label_value`<sup>Optional</sup> <a name="ingestion_label_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel.parameter.ingestionLabelValue"></a>

- *Type:* str

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}

---

##### `reset_asset_namespace` <a name="reset_asset_namespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```python
def reset_asset_namespace() -> None
```

##### `reset_data_access_label` <a name="reset_data_access_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```python
def reset_data_access_label() -> None
```

##### `reset_ingestion_label` <a name="reset_ingestion_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```python
def reset_ingestion_label() -> None
```

##### `reset_log_type` <a name="reset_log_type" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType"></a>

```python
def reset_log_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel">ingestion_label</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput">asset_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput">data_access_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput">ingestion_label_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace">asset_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel">data_access_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ingestion_label`<sup>Required</sup> <a name="ingestion_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```python
ingestion_label: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `asset_namespace_input`<sup>Optional</sup> <a name="asset_namespace_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```python
asset_namespace_input: str
```

- *Type:* str

---

##### `data_access_label_input`<sup>Optional</sup> <a name="data_access_label_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```python
data_access_label_input: str
```

- *Type:* str

---

##### `ingestion_label_input`<sup>Optional</sup> <a name="ingestion_label_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```python
ingestion_label_input: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `asset_namespace`<sup>Required</sup> <a name="asset_namespace" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```python
asset_namespace: str
```

- *Type:* str

---

##### `data_access_label`<sup>Required</sup> <a name="data_access_label" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```python
data_access_label: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleChronicleDataAccessScopeDeniedDataAccessLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeDeniedDataAccessLabels">GoogleChronicleDataAccessScopeDeniedDataAccessLabels</a>]

---


### GoogleChronicleDataAccessScopeTimeoutsOutputReference <a name="GoogleChronicleDataAccessScopeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_data_access_scope

googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleChronicleDataAccessScopeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleDataAccessScope.GoogleChronicleDataAccessScopeTimeouts">GoogleChronicleDataAccessScopeTimeouts</a>]

---



